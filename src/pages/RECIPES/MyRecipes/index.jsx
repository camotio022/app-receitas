import React, { useState, useEffect, useContext } from 'react'
import './index.css'
import * as Tag from './index.js'
import {
  Typography,
  Box,
} from '@mui/material'
import { AuthContext } from '../../../contexts/AuthContext'
import { useTheme } from '@emotion/react'

import { ProgressMyRecipes } from './componentes/progress'
import { OptionsMyRecipes } from './componentes/options'
import { CardMyRecipes } from './componentes/cardRecipes'
import { api_myrecipes } from '../../../api/recipes/myrecipes'
import { AppBarGlobal } from '../../../componentes/AppBar'
import { Folder } from '@mui/icons-material'
import { PaginationComponent } from '../ReviewRecipes/componentes/PAGINATION'
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


export const MyRecipes = () => {
  const { user } = useContext(AuthContext)
  const theme = useTheme()
  const [value, setValue] = useState(0)
  const [myRecipes, setMyRecipes] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 10;
  const indexOfLastRecipe = currentPage * itemsPerPage
  const indexOfFirstRecipe = indexOfLastRecipe - itemsPerPage
  const currentRecipes = myRecipes.slice(indexOfFirstRecipe, indexOfLastRecipe)
  const [isLoading, setIsLoading] = useState(true)
  const [progress, setProgress] = useState(0)
  const [floatingMenu, setFloatingMenu] = useState(null)
  const [handleOptions, setHandleOptions] = useState([])
  const handleOptionsOP = (index) => {
    const updatedOptions = {}
    for (let i = 0; i < myRecipes.length; i++) {
      updatedOptions[i] = i === index ? !handleOptions[index] : false
    }
    setHandleOptions(updatedOptions)
  }
  const handleClickOutsideMenu = (index) => {
    setHandleOptions(!handleOptions[index])
  }
  const deleteRecipe = async (recipeId, recipeName) => {
    if (recipeId) {
      const response = window.prompt(
        `Tem certeza que deseja apagar permanentemente esta receita? ${recipeName}? Sim ou Não`
      )
      if (response === 'sim') {
        try {
          await api_myrecipes.myRecipes.delete(recipeId)
          alert('Receita apagada com sucesso!')
        } catch (error) {
          console.error('Erro ao apagar a receita:', error)
          alert(
            'Ocorreu um erro ao apagar a receita. Por favor, tente novamente.'
          )
        }
      } else {
        alert('Ainda bem que não confirmou!')
      }
    }
  }
  const handleScroll = () => {

  }

  useEffect(() => {
    const listener = window.addEventListener('scroll', handleScroll)

    const fetchData = async () => {
      setIsLoading(true)
      try {
        const myRecipesList = await api_myrecipes.myRecipes.get(user.uid)
        setMyRecipes(myRecipesList)
      } catch (error) {
        console.error('Erro ao buscar as receitas:', error)
      } finally {
        setIsLoading(false)
      }
    }

    fetchData()
    return () => window.removeEventListener('scroll', listener)
  }, [])
  const handleChange = (event, newValue) => {
    setValue(newValue)
  }
  const tabs = [
    { icon: Folder, text: "MINHAS RECEITAS" },
  ];
  const handlePageChange = (event, page) => {
    setCurrentPage(page)
  }
  return (

    <>
      <AppBarGlobal
        handleChange={handleChange}
        value={value}
        tabs={tabs}
      />
      {isLoading ? (
        <>
          <ProgressMyRecipes progress={progress} />
        </>
      ) : (
        <TabPanel value={value} index={0} dir={theme.direction}>
          <Tag.MenuItemsLinks>
            {currentRecipes.map((recipe, index) => {
              return (
                <CardMyRecipes
                  options={<>
                    <OptionsMyRecipes
                      handleClickOutsideMenu={handleClickOutsideMenu}
                      floatingMenu={floatingMenu}
                      index={index}
                      recipe={recipe}
                      deleteRecipe={deleteRecipe}
                    />
                  </>}
                  handleOptionsOP={handleOptionsOP}
                  index={index}
                  recipe={recipe}
                  handleOptions={handleOptions}
                />
              )
            })}
          </Tag.MenuItemsLinks>
          {myRecipes.length > itemsPerPage && (
            <PaginationComponent
              recipes={myRecipes}
              itemsPerPage={itemsPerPage}
              currentPage={currentPage}
              handlePageChange={handlePageChange}
            />
          )}
        </TabPanel>
      )}
    </>
  )
}
