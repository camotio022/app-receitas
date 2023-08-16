
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { api_recipes } from "../../../api/recipes/recipes"
import *as Tag from './styles/index'
import { Box, Stack, Typography, useTheme } from "@mui/material"
import CookIcon from '@mui/icons-material/Restaurant';
import { AppBarGlobal } from "../../../componentes/AppBar"
import { api_recipe_favorites } from "../../../api/recipes/favoriterecipes"
import { useContext } from "react"
import { AuthContext } from "../../../contexts/AuthContext"
import PropTypes from 'prop-types'
import { CardRecipe } from "../../../componentes/CARDRECIPE/index.jsx"
import { AutoStories } from "@mui/icons-material"
function TabPanel(props) {
    const { children, value, index, ...other } = props
    return (
        <Typography
            component="div"
            role="tabpanel"
            hidden={value !== index}
            id={`action-tabpanel-${index}`}
            aria-labelledby={`action-tab-${index}`}
            {...other}
        >
            {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
        </Typography>
    )
}
TabPanel.PropTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
}
const getyourRecipes = async (id, collumn) => {
    try {
        const result = await api_recipes.recipe.get()
        const filter = result.filter((res) => res.author === id)
        collumn(filter)
    } catch (error) {
        console.log(error)
    }
}
export const CardUsers = ({
    recipes,
    value,
    theme,
    index,
    user
}) => {
    return (

        <TabPanel fullWidth value={value} index={index} dir={theme.direction} >
            <Tag.MenuItemsLinks>
                {recipes.map((recipe) => {
                    return (
                        <CardRecipe
                            id={recipe.id}
                            recipeTitle={recipe?.recipeTitle}
                            recipeImage={recipe?.recipeImage}
                            author={recipe?.author}
                            starsLikedCounter={recipe?.starsLikedCounter}
                            fevoritingRecipe={() => fevoritingRecipe(recipe?.id, user?.uid)}
                            displayNameAuhtor={user?.displayName}
                            AuthorName={recipe?.name}
                            commentsCounter={recipe?.commentsCounter}
                            ranking={recipe?.ranking}
                        />
                    )
                })}
            </Tag.MenuItemsLinks>
        </TabPanel >
    )
}
export const TheirRecipes = () => {
    const theme = useTheme()
    const { user } = useContext(AuthContext)
    const { id } = useParams()
    const [value, setValue] = useState(0)
    const [theirRecipes, setTheirRecipes] = useState([])
    const [myRecipes, setMyRecipes] = useState([])

    useEffect(() => {
        getyourRecipes(id, setTheirRecipes)
        getyourRecipes(user.uid, setMyRecipes)
    }, [id])
    const handleChange = (event, newValue) => {
        setValue(newValue)
    }
    const handleChangeIndex = (index) => {
        setValue(index)
    }
    const tabs = [
        { icon: CookIcon, text: "Receitas deles" },
        { icon: AutoStories, text: "Minhas Receitas" },
    ];
    const fevoritingRecipe = async (recipeId, userId) => {
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
    return (
        <>
            <AppBarGlobal
                value={value}
                handleChange={handleChange}
                tabs={tabs}
            />
            <Stack
                sx={{ width: '100%' }}
                axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                index={value}
                onChangeIndex={handleChangeIndex}
            >
                <CardUsers
                    recipes={theirRecipes}
                    value={value}
                    theme={theme}
                    index={0}
                    user={user}
                />
                <CardUsers
                    recipes={myRecipes}
                    value={value}
                    theme={theme}
                    index={1}
                    user={user}
                />
            </Stack >
        </>
    )
}