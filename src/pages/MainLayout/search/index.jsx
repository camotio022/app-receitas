import { useEffect, useState } from 'react';
import { collection, query, where, getDocs } from 'firebase/firestore';
import { db } from "../../../../firebase.config.js";
import *as Tag from './index.js'
import { ResultTable } from './componentes/table/index.jsx';
import { Typography } from '@mui/material';
import { FolderList } from './componentes/recipesresults.jsx';
export const MySearch = ({ searchInput }) => {
    const [results, setResults] = useState([]);

    async function searchInFirebase() {

        try {
            const recipeRef = collection(db, 'recipes');
            const userRef = collection(db, 'users');
            const recipeSnapshot = await getDocs(query(recipeRef, where('recipeTitle', '>=', searchInput)));
            const userSnapshot = await getDocs(query(userRef, where('name', '>=', searchInput)));

            const tempResults = [];

            recipeSnapshot.forEach((doc) => {
                tempResults.push({ id: doc.id, ...doc.data(), type: 'recipe' });
            });

            userSnapshot.forEach((doc) => {
                tempResults.push({ id: doc.id, ...doc.data(), type: 'user' });
            });

            return tempResults;
        } catch (error) {
            console.error('Erro ao realizar a busca:', error);
            return [];
        }
    }

    useEffect(() => {
        async function fetchResults() {
            if (searchInput) {
                const results = await searchInFirebase();
                setResults(results);
                console.log(results);
            } else {
                setResults([]);
            }
        }

        fetchResults();
    }, [searchInput]);

    return (
        <Tag.MenuItemsLinks>
            {results.length === 0 ? (
                <p>Nenhum resultado encontrado.</p>
            ) : (
                <>
                    {results.map((result) => (
                        <div div key={result.id} >
                            {
                                result.type === 'user' && (
                                    <ResultTable
                                        key={result.id}
                                        results={results} // Passe apenas o objeto result
                                        searchInput={searchInput}
                                    />
                                )
                            }
                            {result.type === 'recipe' && (
                                <>
                                    <FolderList
                                        key={result.id}
                                        results={results} // Passe apenas o objeto result
                                        searchInput={searchInput}
                                    />
                                </>
                            )}
                        </div>

                    ))}

                </>
            )
            }
        </Tag.MenuItemsLinks >
    );
};
