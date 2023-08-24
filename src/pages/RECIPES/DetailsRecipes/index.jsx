import {
    Avatar,
    Button,
    Card, Grid, List, ListItem, ListItemAvatar, ListItemText, Stack, TextField, Typography,
} from '@mui/material'
import { useParams } from 'react-router-dom'
import * as Tag from './styles/index.js'
import React, { useEffect, useState } from 'react'
import { CardMidiaDetailRecipe } from './componentes/CardMidiaDetailsRecipes/index.jsx'
import { PreviaDetailsRecipe } from './componentes/previaDetailsRecipe/index.jsx'
import { NutricionaisDetailsRecipe } from './componentes/nutriDetailsRecipe/index.jsx'
import { IngredientDetailsRecipe } from './componentes/IngredientsDetailsRecipe/index.jsx'
import { StepsDetailsRecipe } from './componentes/StepsDetailsRecipe/index.jsx'
import { LoadingDetailsRecipe } from './componentes/loadingDetailsRecipe/index.jsx'
import { api_recipes } from '../../../api/recipes/recipes.js'
import { api_more } from '../../../api/index.js'
import { Comments } from './componentes/comments/index.jsx'
// ... O restante do seu código ...

const Comment = ({ author, content }) => (
    <ListItem alignItems="flex-start">
        <ListItemAvatar>
            <Avatar alt={author} src="/static/images/avatar/1.jpg" />
        </ListItemAvatar>
        <ListItemText
            primary={author}
            secondary={content}
        />
    </ListItem>
);
export const DetailsRecipes = () => {
    const { id } = useParams()
    const [recipe, setrecipe] = useState(null)
    const [ingredientes, setingredientes] = useState([])
    const [modopreparos, setmodopreparos] = useState(['o', 'o'])
    const [comments, setComments] = useState([]);
    const [newComment, setNewComment] = useState('');
    useEffect(() => {
        const obterDetalhesrecipe = async () => {
            const doc = await api_recipes.recipe.get(id)
            const docIngredientes = await api_more.ingredientes.get(id)
            const getModosPre = await api_more.modopreparo.get(id)
            if (doc) {
                setrecipe(doc)
                docIngredientes?.map((i) => {
                    return setingredientes(i?.description)
                })
                getModosPre?.map((i) => {
                    return setmodopreparos(i?.description || i?.descripion)
                })
            }
        }
        obterDetalhesrecipe()
    }, [id])
    const handleSubmit = () => {

        if (newComment) {
            setComments([...comments, { author: 'User', content: newComment, replies: [] }]);
            setNewComment('');
        }
    };
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
                    />
                    <NutricionaisDetailsRecipe recipe={recipe} />
                    <IngredientDetailsRecipe recipe={recipe} />
                    <StepsDetailsRecipe recipe={recipe} />
                    <Comments />
                </Tag.CardMediaContain>
            </Tag.Container >

        </>
    )
}
