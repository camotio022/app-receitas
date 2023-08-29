import { Fragment, useContext } from 'react'
import Container from '@mui/material/Container'
import Paper from '@mui/material/Paper'

import './styles/index.css'
import { RecipeForm } from './RecipeForm'

import { useState } from 'react'
import { useEffect } from 'react'
import { AuthContext } from '../../../contexts/AuthContext'
import { useNavigate } from 'react-router-dom'
import { api_recipes } from '../../../api/recipes/recipes'
import { api_notifications } from '../../../api/users/notifications'
import { rulesCreateRecipes } from './validation'
import { CircularProgress, Grid, Stack } from '@mui/material'
export const CreateRecipes = ({ }) => {
  const { user } = useContext(AuthContext)
  const [scrollHeight, setScrollHeight] = useState(0)
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    recipeTitle: '',
    recipeDescription: '',
    ingredients: [],
    modPreps: [],
    prepTime: '',
    cookTime: '',
    servingSize: '',
    recipeCategory: '',
    recipeDifficulty: '',
    recipeImage: null,
    cookingTips: '',
    calories: '',
    carbs: '',
    protein: '',
    fat: '',
    sod: '',
    gord: '',
    author: '',
    ranking: '',
    creationDate: '',
    name: '',
    email: '',
    country: '',
  })
  const handleInputChangesCreateRecipes = (event) => {
    const { name, value } = event.target
    setFormData({ ...formData, [name]: value })
  }
  const handleImageChange = (event) => {
    const file = event.target.files[0]
    const reader = new FileReader()
    reader.onload = () => {
      const base64Image = reader.result
      setFormData({ ...formData, recipeImage: base64Image })
    }
    reader.readAsDataURL(file)
  }
  const handleSubmit = async (event) => {
    if (!rulesCreateRecipes(formData, setFormData)) return false
    setLoading(true)
    const date = new Date().toLocaleString()
    const userId = user?.uid
    if (userId) {
      const payload = {
        ...formData,
        author: user.uid,
        email: user.email,
        creationDate: date
      }
      try {
        await api_recipes.recipe.post(payload, userId);
        setFormData('')
        navigate('/my-recipes')
      } catch (error) {
        console.error('Erro ao criar receita:', error);
      } finally {
        setLoading(false)
      }
    }
  }
  useEffect(() => {
    const handleScroll = () => {
      const height = window.scrollY || 0
      setScrollHeight(height)
    }
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', handleScroll)
      return () => {
        window.removeEventListener('scroll', handleScroll)
      }
    }
  }, [])
  return (
    <>
      <Container
        component="main"
        maxWidth="sm"
        sx={{
          mb: 15,
          mt: 15,
          display: 'center',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {loading ?
          <Paper
            variant="outlined"
            sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}
          >
            <Stack sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 1
            }}>
              Receita de {formData.recipeTitle} está sendo criada, por favor aguarde...
              <CircularProgress
                size={40}
                color="inherit" />
            </Stack>
          </Paper> :
          <Paper
            variant="outlined"
            sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}
          >
            <Fragment>
              <RecipeForm
                formData={formData}
                setFormData={setFormData}
                handleInputChangesCreateRecipes={
                  handleInputChangesCreateRecipes
                }
                handleImageChange={handleImageChange}
                handleSubmit={handleSubmit}
              />
            </Fragment>
          </Paper>}
      </Container>
    </>
  )
}
