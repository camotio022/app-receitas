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
                    />
                    <PreviaDetailsRecipe
                        recipe={recipe}
                    />
                    <NutricionaisDetailsRecipe recipe={recipe} />
                    <IngredientDetailsRecipe recipe={recipe} />
                    <StepsDetailsRecipe recipe={recipe} />
                    <Card component="ul"
                        sx={{
                            flexGrow: 1,
                            minWidth: "90%",
                            height: '20rem',
                            mt: '15rem',
                        }}
                    >
                    </Card>
                    <Typography>Comments</Typography>
                    <List style={{ width: '90%', margin: 'auto' }}>
                        {comments.map((comment, index) => (
                            <Comment
                                key={index}
                                author={comment.author}
                                content={comment.content}
                            />
                        ))}
                    </List>
                    <Grid container alignItems="center" spacing={2} sx={{ width: '90%' }}>
                        <Grid item xs={12} md={9}>
                            <TextField
                                label="Add a comment"
                                variant="outlined"
                                fullWidth
                                value={newComment}
                                onChange={(e) => setNewComment(e.target.value)}
                            />
                        </Grid>
                        <Grid item xs={12}
                            md={3} mb={3} >
                            <Button fullWidth onClick={handleSubmit} variant="contained" color="primary" >
                                Add Comment
                            </Button>
                        </Grid>
                    </Grid>

                </Tag.CardMediaContain>
            </Tag.Container >

        </>
    )
}
