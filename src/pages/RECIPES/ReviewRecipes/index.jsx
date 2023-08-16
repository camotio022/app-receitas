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
import { useContext, useEffect, useState } from 'react'
import { collection, getDocs } from 'firebase/firestore'
import { db } from '../../../../firebase.config'
import { AuthContext } from '../../../contexts/AuthContext'
import { useTheme } from '@emotion/react'
import { CircularProgress } from '@mui/material'
import { CardRecipe } from '../../../componentes/CARDRECIPE/index.jsx'
import { CardInImage } from './componentes/IMAGECARDS/index.jsx'
import { PaginationComponent } from './componentes/PAGINATION'
import { AppBarGlobal } from '../../../componentes/AppBar'
import { Folder, Image } from '@mui/icons-material'

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
export const TopReview = (props) => {
  const { user } = useContext(AuthContext)
  const theme = useTheme()
  const [value, setValue] = useState(0)
  const [recipes, setRecipes] = useState([])
  const [imageUrls, setImageUrls] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const [top, setTop] = useState(false)
  const [itemsPerPage] = useState(10)
  const indexOfLastRecipe = currentPage * itemsPerPage
  const indexOfFirstRecipe = indexOfLastRecipe - itemsPerPage
  const currentRecipes = recipes.slice(indexOfFirstRecipe, indexOfLastRecipe)

  const handlePageChange = (event, page) => {
    setCurrentPage(page)
  }
  const [isLoading, setIsLoading] = useState(true)
  const [progress, setProgress] = useState(0)

  const obterrecipes = async () => {
    setIsLoading(true)
    try {
      const recipesData = await api_recipes.recipe.get()
      setRecipes(recipesData)
    } catch (error) {
    } finally {
      setIsLoading(false)
    }
  }
  useEffect(() => {
    obterrecipes()
  }, [])
  const handleScroll = () => {
    const windowHeight = window.innerHeight
    const documentHeight = document.documentElement.scrollHeight
    const scrollTop =
      window.pageYOffset ||
      document.documentElement.scrollTop ||
      document.body.scrollTop
    if (scrollTop + windowHeight >= documentHeight) {
      setTop(true)
    } else {
      setTop(false)
    }
  }
  window.addEventListener('scroll', handleScroll)
  useEffect(() => {
    const fetchImages = async () => {
      const imagesRef = collection(db, 'recipes')
      const imagesSnapshot = await getDocs(imagesRef)
      const imagesData = imagesSnapshot.docs.map((doc) => {
        return {
          url: doc.data().recipeImage,
          title: doc.data().recipeTitle,
        }
      })
      setImageUrls(imagesData)
    }
    fetchImages()
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
        alert('Receita favoritada com sucesso!')
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
  const handleChangeIndex = (index) => {
    setValue(index)
  }
  if (recipes?.length === 0) {
    return (
      <Tag.Cards>
        <CircularProgress
          variant="indeterminate"
          value={progress}
          size={80}
        />
        SEM RECEITAS
      </Tag.Cards>
    )
  }
  const tabs = [
    { icon: Folder, text: "recipe cards" },
    { icon: Image, text: "recipe images" },
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
            sx={{ width: '100%' }}
            axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
            index={value}
            onChangeIndex={handleChangeIndex}
          >
            <TabPanel fullWidth value={value} index={0} dir={theme.direction}>
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
            </TabPanel>
            <TabPanel value={value} index={1} dir={theme.direction}>
              <Tag.MenuItemsLinks>
                {recipes?.map((recipe, index) => {
                  return (
                    <CardInImage
                      key={index}
                      recipeImage={recipe?.recipeImage}
                      recipeTitle={recipe?.recipeTitle}
                    />)
                })}
              </Tag.MenuItemsLinks>
            </TabPanel>
          </Stack>
        )}
      </Box>
      <>
        {top && (
          <>
            {recipes.length > itemsPerPage && (
              <PaginationComponent
                recipes={recipes}
                itemsPerPage={itemsPerPage}
                currentPage={currentPage}
                handlePageChange={handlePageChange}
              />
            )}
          </>
        )}
      </>
    </>
  )
}
