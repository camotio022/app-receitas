import { useEffect, useState } from 'react';
import { collection, query, where, getDocs } from 'firebase/firestore';
import { db } from "../../../../firebase.config.js";
import *as Tag from './index.js'
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
            if (searchInput.length >= 3) {
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
                    {results.map((result)=> {
                        return(
                            <>{result.type === 'user' ? <>
                            
                            </>: 'Nada h'}</>
                        )
                    })}
                </>
            )}
        </Tag.MenuItemsLinks>
    );
};
