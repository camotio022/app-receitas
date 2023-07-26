import { AppBar, Container, Divider, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { api } from '../../api'
import { Button, CircularProgress } from '@mui/material'
import PropTypes from 'prop-types'

import { useTheme } from '@emotion/react'
import {
  Edit as EditIcon,
  Folder as FolderIcon,
  Image as ImageIcon,
} from '@mui/icons-material'
import * as Tag from './styles/index.js'
import { UserEditFieldsRecipe } from './componentes/UserEditFieldsRecipe/index.jsx'
import { MoreEditFieldsRecipe } from './componentes/MoreFieldsEditRecipe/index.jsx'
import { CategoryEditRecipe } from './componentes/CategoryEditRecipe/index.jsx'
import { HeaderEditRecipe } from './componentes/HeaderEditRecipe/index.jsx'
import { MyAppBar } from './componentes/AppBar'
import { ProgressEditRecipe } from './componentes/ProgressEditRecipe'
import { MyTextField } from '../../componentes/textField/textField'

const UpdateButton = ({ onClick, loading }) => {
  return (
    <Button
      variant="contained"
      color="primary"
      onClick={onClick}
      disabled={loading}
    >
      {loading ? <CircularProgress size={12} color="inherit" /> : 'Atualizar'}
    </Button>
  )
}

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
function a11yProps(index) {
  return {
    id: `action-tab-${index}`,
    'aria-controls': `action-tabpanel-${index}`,
  }
}

const sections = [
  {
    title: 'Header',
    fields: [
      { label: 'Recipe Title', name: 'recipeTitle' },
      { label: 'Cook Time', name: 'cookTime' },
      { label: 'Serving Size', name: 'servingSize' },
    ],
  },
  {
    title: 'Category',
    fields: [
      { label: 'Recipe Category', name: 'recipeCategory' },
      { label: 'Recipe Difficulty', name: 'recipeDifficulty' },
    ],
  },
]

export const EditRecipes = () => {
  const { id } = useParams()
  const [docRec, setDocRec] = useState()
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
  const [loading, setLoading] = useState(false)
  const theme = useTheme()
  const [value, setValue] = useState(0)
  const [isLoading, setIsLoading] = useState(false)
  const [progress, setProgress] = useState(0)
  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prevProgress) =>
        prevProgress >= 100 ? 0 : prevProgress + 50
      )
    }, 1000)

    return () => {
      clearInterval(interval)
    }
  }, [])
  useEffect(() => {
    const fetchRecipe = async () => {
      if (id) {
        try {
          const res = await api.recipe.get(id)
          setDocRec(res)
          setFormData(res) // Preencha os campos editados com os valores existentes
        } catch (error) {
          console.error('Erro ao buscar detalhes da receita:', error)
        }
      }
    }
    fetchRecipe()
  }, [id])
  const handleFieldChange = (fieldName, value) => {
    setFormData((prevData) => ({
      ...prevData,
      [fieldName]: value,
    }))
  }
  const handleUpdateRecipe = async () => {
    setIsLoading(true)
    try {
      await api.recipe.update(id, formData)
      console.log('Campos atualizados com sucesso')
    } catch (error) {
      console.error('Erro ao atualizar os campos:', error)
    }
    setIsLoading(false)
  }
  const handleUpdateClick = async () => {
    setIsLoading(true)
    try {
      await handleUpdateRecipe()
      const updatedRecipe = await api.recipe.get(id)
      setDocRec(updatedRecipe)
      console.log('Receita atualizada com sucesso:', updatedRecipe)
      await new Promise((resolve) => setTimeout(resolve, 2000))
    } catch (error) {
      console.error('Erro ao atualizar a receita:', error)
    }
    setIsLoading(false)
  }
  const handleChange = (event, newValue) => {
    setValue(newValue)
  }
  return (
    <>
      <MyAppBar
        handleChange={handleChange}
        a11yProps={a11yProps}
        value={value}
      />
      {isLoading ? (
        <>
          <ProgressEditRecipe progress={progress} />
        </>
      ) : (
        <Tag.MyContainer>
          <Tag.MyPaper>
            <HeaderEditRecipe
              formData={formData}
              handleFieldChange={handleFieldChange}
            />
            {/* <CategoryEditRecipe
              formData={formData}
              handleFieldChange={handleFieldChange}
            /> */}
            {sections.map((section) => (
              <div>
                <h2>{section.title}</h2>
                {fields.map((field) => (
                  <MyTextField
                    key={field.name}
                    label={field.label}
                    name={field.name}
                    value={formData[field.name]}
                    onChange={(event) =>
                      handleFieldChange(field.name, event.target.value)
                    }
                  />
                ))}
                <Divider />
              </div>
            ))}
            <MoreEditFieldsRecipe
              formData={formData}
              handleFieldChange={handleFieldChange}
            />

            <UserEditFieldsRecipe
              handleFieldChange={handleFieldChange}
              formData={formData}
            />
          </Tag.MyPaper>
          <Divider />
          <UpdateButton
            fullWidth={true}
            onClick={handleUpdateClick}
            loading={loading}
          />
        </Tag.MyContainer>
      )}
    </>
  )
}
