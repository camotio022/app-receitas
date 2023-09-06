
import { useContext, useEffect, useState } from 'react'
import * as Tag from './index.js'
import { AuthContext } from '../../../contexts/AuthContext.jsx'
import { CardFavoriteRecipe } from './componentes/cardFavoriteRecipe/index.jsx'
import { ProgressFavoriteRecipes } from './componentes/progress/index.jsx'
import { api_recipe_favorites } from '../../../api/recipes/favoriterecipes.js'
import { Grid } from '@mui/material'
export const FavoriteRecipes = () => {
  const [favoriteRecipes, setFavoriteRecipes] = useState([])
  const { user } = useContext(AuthContext)
  const [expanded, setExpanded] = useState([]);
  const handleExpandClick = (index) => {
    setExpanded((prevState) => {
      const newExpanded = [...prevState];
      newExpanded[index] = !newExpanded[index];
      return newExpanded;
    });
  };
  const deleteFavorite = async (recipeId, userId) => {
    if (recipeId && userId) return
    try {
      await api_recipes.favoriteRecipes.remove(recipeId, userId)
    } catch (error) {
      console.error(error)
    }
  }
  useEffect(() => {
    const fetchFavoriteRecipes = async () => {
      const userId = user.uid

      if (userId) {
        try {
          const recipes = await api_recipe_favorites.favoriteRecipes.get(userId)
          setFavoriteRecipes(recipes)
        } catch (error) {
          console.error('Erro ao buscar as receitas favoritas:', error)
          setFavoriteRecipes([]) // Define uma lista vazia em caso de erro
        }
      } else {
        console.log('Erro ao buscar as receitas favoritas:', userId)
        setFavoriteRecipes([]) // Define uma lista vazia se o ID do usuário não estiver disponível
      }
    }
    fetchFavoriteRecipes()
  }, [user])
  if (favoriteRecipes.length === 0) {
    return (
      <>
        <ProgressFavoriteRecipes />
      </>
    )
  }
  return (
    <>
      <Tag.Contain>
        <Grid sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '10px',
          width: '100%',
          height: 'auto',
          marginBlock: "10rem"
        }} item xs={12} sm={6} md={4} lg={3}>
          {favoriteRecipes?.map((favorite, index) => {
            return (
              <CardFavoriteRecipe
              user={user}
                index={index}
                favorite={favorite}
                deleteFavorite={deleteFavorite}
              />
            )
          })}
        </Grid>
      </Tag.Contain>
    </>
  )
}
