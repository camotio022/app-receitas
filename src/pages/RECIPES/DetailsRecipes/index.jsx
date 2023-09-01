import {
    Avatar,
    Button,
    Card, Grid, List, ListItem, ListItemAvatar, ListItemText, Stack, TextField, Typography,
} from '@mui/material'
import { useParams } from 'react-router-dom'
import * as Tag from './styles/index.js'
import React, { useContext, useEffect, useState } from 'react'
import { CardMidiaDetailRecipe } from './componentes/CardMidiaDetailsRecipes/index.jsx'
import { PreviaDetailsRecipe } from './componentes/previaDetailsRecipe/index.jsx'
import { NutricionaisDetailsRecipe } from './componentes/nutriDetailsRecipe/index.jsx'
import { IngredientDetailsRecipe } from './componentes/IngredientsDetailsRecipe/index.jsx'
import { StepsDetailsRecipe } from './componentes/StepsDetailsRecipe/index.jsx'
import { LoadingDetailsRecipe } from './componentes/loadingDetailsRecipe/index.jsx'
import { api_recipes } from '../../../api/recipes/recipes.js'
import { api_more } from '../../../api/index.js'
import { Comments } from './componentes/comments/index.jsx'
import { collection, onSnapshot } from 'firebase/firestore'
import { db } from '../../../../firebase.config.js'
import { AuthContext } from '../../../contexts/AuthContext.jsx'
export const DetailsRecipes = () => {
    const { id } = useParams()
    const [recipe, setrecipe] = useState(null)
    const { user } = useContext(AuthContext)
    const amI = user?.uid ===recipe?.author 
    const obterDetalhesrecipe = async () => {
        try{
            const doc = await api_recipes.recipe.get(id)
            setrecipe(doc)
        }catch(e) {alert(e)}
    }
    useEffect(() => {
        const c = collection(db, 'recipes')
        const unsubscribe = onSnapshot(c, (querySnapshot) => {
          const temp = [];
          querySnapshot.forEach((doc) => {
            temp.push({ id: doc.id, ...doc.data() });
          });
          obterDetalhesrecipe()
        });
    
        return () => unsubscribe();
      }, []);
    useEffect(() => {
        obterDetalhesrecipe()
    }, [id])
    if (!recipe) {
        return (
            <>
                <LoadingDetailsRecipe />
            </>
        )
    }
    return (
        <>
            <Tag.Container>
                <Tag.CardMediaContain>
                    <CardMidiaDetailRecipe
                        recipe={recipe}
                        id={id}
                    />
                    <PreviaDetailsRecipe
                        recipe={recipe}
                        id={id} 
                    />
                
                    <NutricionaisDetailsRecipe
                        recipe={recipe}
                        id={id} />
                    <IngredientDetailsRecipe
                        recipe={recipe}
                        id={id} 
                        condicional={amI}/>
                    <StepsDetailsRecipe
                        recipe={recipe}
                        id={id}
                        condicional={amI} />
                    <Comments />
                </Tag.CardMediaContain>
            </Tag.Container >

        </>
    )
}
