import { Add, Favorite, FavoriteBorder, Person, RemoveRedEye, Restaurant } from '@mui/icons-material'
import * as Tag from './styles.js'
import { Button, Link, Stack, Typography } from '@mui/material'
import { green, orange } from '@mui/material/colors'
import { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../../../../../contexts/AuthContext.jsx'
import { api_recipe_favorites } from '../../../../../api/recipes/favoriterecipes.js'

export const CardMidiaDetailRecipe = ({
    recipe, id
}) => {
    const [isFevorite, setIsFevorite] = useState(null)
    const { user } = useContext(AuthContext)
    const fevoritingRecipe = async (recipeId, userId) => {
        console.log(recipeId)
        if (!recipeId || !userId) return
        try {
            const recipeData = await api_recipe_favorites.favoriteRecipes.get(recipeId)

            if (!recipeData) {
                console.log('Receita não encontrada')
                return
            }
            const likesCounter = recipeData.likesCounter || []
            if (!likesCounter.includes(userId)) {
                await api_recipe_favorites.favoriteRecipes.post(recipeId, userId)
                alert('Receita favoritada com sucesso!')
            } else {
                alert('Usuário já favoritou a receita.')
            }
        } catch (error) {
            alert('Erro ao favoritar a receita:', error)
        }
    }
    useEffect(() => {
        const data = async () => {
            try {
                const recipeData = await api_recipe_favorites.favoriteRecipes.get(id)
                const likesCounter = recipeData.likesCounter || []
                if (!likesCounter.includes(user.uid)) {
                    setIsFevorite(true)
                } else {
                    setIsFevorite(false)
                }
            } catch (error) {
                alert('Erro ao favoritar a receita:', error)
            }
        }
        data()
    }, [])
    return (
        <>
            <Tag.Midias
                component="img"
                alt="green iguana"
                height="auto"
                image={recipe?.recipeImage}
            />
            <Stack
                sx={{
                    display: 'flex',
                    alignItems: 'flex-end',
                    justifyContent: 'center',
                    gap: 1,
                    mt: '-3rem',
                    mb: 1,
                    height: 'auto',
                    width: '100%',
                    padding: '0 1.4rem 0 0',
                }}
            >
                <Button
                    onClick={() => !isFevorite && fevoritingRecipe(id, user.uid)}
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        height: '100%',
                        bgcolor: orange[900],
                    }}
                    variant={'contained'}
                    startIcon={isFevorite?<Favorite />:<FavoriteBorder/>}
                    endIcon={<Restaurant />} 
                >
                    {isFevorite ? "Favoritada" : "Favoritar"}
                </Button>
                <Link href={`/edituser/${recipe?.author}`}>
                    <Button
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            height: '100%',
                            bgcolor: green[900],
                        }}
                        variant={'contained'}
                        startIcon={<RemoveRedEye />}
                        endIcon={<Person />}
                    >
                        Ver o usuário
                    </Button>
                </Link>
            </Stack>
            <Stack sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'column',
                width: '100%',
            }} >
                <Typography gutterBottom variant="h5" component="div">
                    {recipe?.recipeTitle}
                </Typography>

                <Stack sx={{
                    width: '90%',
                }} gutterBottom variant="body2" color="text.secondary">
                    {recipe?.recipeDescription}
                </Stack>
            </Stack>
        </>
    )
}