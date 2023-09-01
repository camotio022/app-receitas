import {
  Stack,
  Typography,
  Box,
} from '@mui/material'
import PropTypes from 'prop-types'
import * as Tag from './index'
import './index.css'
import { api_recipes } from '../../../api/recipes/recipes'
import { api_recipe_favorites } from '../../../api/recipes/favoriterecipes'
import { useContext, useEffect, useRef, useState } from 'react'
import { collection, getDocs, onSnapshot } from 'firebase/firestore'
import { db } from '../../../../firebase.config'
import { AuthContext } from '../../../contexts/AuthContext'
import { useTheme } from '@emotion/react'
import { CircularProgress } from '@mui/material'
import { CardRecipe } from '../../../componentes/CARDRECIPE/index.jsx'
import { CardInImage } from './componentes/IMAGECARDS/index.jsx'
import { PaginationComponent } from './componentes/PAGINATION'
import { AppBarGlobal } from '../../../componentes/AppBar'
import { Folder, Image } from '@mui/icons-material'
import { api_comments } from '../../../api/usersComments'

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
export const  TopReview = (props) => {
  const { user } = useContext(AuthContext)
  const theme = useTheme()
  
  const [value, setValue] = useState(0)
  const [terminete, setTerminate]=useState(false)
  const [recipes, setRecipes] = useState([])
  const [comment, setComment] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 10;
  const indexOfLastRecipe = currentPage * itemsPerPage
  const indexOfFirstRecipe = indexOfLastRecipe - itemsPerPage
  const currentRecipes = recipes.slice(indexOfFirstRecipe, indexOfLastRecipe)
  const handlePageChange = (event, page) => {
    setCurrentPage(page)
  }
  const [isLoading, setIsLoading] = useState(true)
  const [progress, setProgress] = useState(0)

  const obterrecipes = async () => {
    setTerminate(true)
    setIsLoading(true)
    try {
      const recipesData = await api_recipes.recipe.get()
      const commentData = await api_comments.comments.get()
      setRecipes(recipesData)
      setComment(commentData)
    } catch (error) {
    } finally {
      setIsLoading(false)
      setTerminate(false)
    }
  }
  useEffect(() => {
    const c = collection(db, 'recipes')
    const unsubscribe = onSnapshot(c, (querySnapshot) => {
      const temp = [];
      querySnapshot.forEach((doc) => {
        temp.push({ id: doc.id, ...doc.data() });
      });
      setRecipes(temp);
    });

    return () => unsubscribe();
  }, []);
  useEffect(() => {
    obterrecipes()
  }, [])
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
      } else {
        alert('Usuário já favoritou a receita.')
      }
    } catch (error) {
      alert('Erro ao favoritar a receita:', error)
    }
  }
  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  if (recipes?.length === 0) {
    return (
      <Tag.Cards>
        <CircularProgress
          variant={terminete?"indeterminate":"terminate"}
          value={progress}
          size={80}
        />
        {terminete?"Busacando receitas...":"SEM RECEITAS"}
      </Tag.Cards>
    )
  }
  const tabs = [
    { icon: Folder, text: `${recipes.length} receitas` },
    { icon: Image, text: "ver como imagens" },
  ];
  return (
    <>
      <Box>
        <AppBarGlobal
          value={value}
          handleChange={handleChange}
          tabs={tabs}
        />
        {isLoading ? (
          <Tag.Cards
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              height: '100vh',
            }}
          >
            <Typography variant="h6" sx={{ marginLeft: '10px' }}>
              {`${progress}%`}
            </Typography>
          </Tag.Cards>
        ) : (
          <Stack
            sx={{ width: '100%', marginBottom: '10rem', }}
          >
            <TabPanel value={value} index={0} dir={theme.direction}>
              <Tag.MenuItemsLinks>
                {currentRecipes.map((recipe) => {
                  return (
                    <CardRecipe
                      id={recipe.id}
                      likesCounter={recipe.likesCounter}
                      recipeTitle={recipe?.recipeTitle}
                      recipeImage={recipe?.recipeImage}
                      author={recipe?.author}
                      starsLikedCounter={recipe?.starsLikedCounter}
                      fevoritingRecipe={() => fevoritingRecipe(recipe?.id, user?.uid)}
                      displayNameAuhtor={user?.displayName}
                      AuthorName={recipe?.name}
                      commentsCounter={
                        comment.reduce((total, c) => {
                          if (c.commented_recipeId === recipe?.id) {
                            let commentCount = 1;
                            if (c.replys && c.replys.length > 0) {
                              commentCount += c.replys.length;
                            }
                            return total + commentCount;
                          }
                          return total;
                        }, 0)
                      }
                      ranking={recipe?.ranking}
                    />
                  )
                })}
              </Tag.MenuItemsLinks>
            </TabPanel>
            <TabPanel value={value} index={1} dir={theme.direction}>
              <Tag.MenuItemsLinks>
                {currentRecipes?.map((recipe, index) => {
                  return (
                    <CardInImage
                      key={index}
                      id={recipe.id}
                      recipeImage={recipe?.recipeImage}
                      recipeTitle={recipe?.recipeTitle}
                      likesCounter={recipe.likesCounter}
                      starsLikedCounter={recipe?.starsLikedCounter}
                      commentsCounter={
                        comment.reduce((total, c) => {
                          if (c.commented_recipeId === recipe?.id) {
                            let commentCount = 1;
                            if (c.replys && c.replys.length > 0) {
                              commentCount += c.replys.length;
                            }
                            return total + commentCount;
                          }
                          return total;
                        }, 0)
                      }
                    />)
                })}
              </Tag.MenuItemsLinks>
            </TabPanel>
            {recipes.length > itemsPerPage && (
              <PaginationComponent
                recipes={recipes}
                itemsPerPage={itemsPerPage}
                currentPage={currentPage}
                handlePageChange={handlePageChange}
              />
            )}
          </Stack>
        )}
      </Box>
    </>
  )
}
