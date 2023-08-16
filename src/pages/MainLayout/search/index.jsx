import { useEffect, useState } from 'react'
import {
  collection,
  query,
  where,
  getDocs,
  onSnapshot,
} from 'firebase/firestore'
import { db } from '../../../../firebase.config.js'
import * as Tag from './index.js'
import { ResultTable } from './componentes/table/index.jsx'
import { Typography } from '@mui/material'
import { FolderList } from './componentes/recipesresults.jsx'
import { api_recipes } from '../../../api/recipes/recipes.js'
import { api_users } from '../../../api/users/users.js'

const recipeRef = collection(db, 'recipes')
const userRef = collection(db, 'users')

export const MySearch = ({ searchInput }) => {
  const [recipes, setRecipes] = useState([])
  const [users, setUsers] = useState([])

  const getData = async () => {
    const recipes = await api_recipes.recipe.get()
    const users = await api_users.user.get()
    setRecipes(recipes)
    setUsers(users)
  }
  useEffect(() => {
    getData()
  }, [])
  const filteredRecipes =
    recipes.filter((r) =>
      r?.recipeTitle?.toLowerCase().includes(searchInput.toLowerCase())
    ) || []
  const filteredUsers =
    users.filter((u) =>
      u?.name.toLowerCase().includes(searchInput.toLowerCase())
    ) || []

  return (
    <Tag.MenuItemsLinks>
      {filteredRecipes.length === 0 ? (
        <p>Nenhum resultado encontrado.</p>
      ) : (
        <>
          <FolderList results={filteredRecipes} searchInput={searchInput} />
          <ResultTable results={filteredUsers} searchInput={searchInput} />
        </>
      )}
    </Tag.MenuItemsLinks>
  )
}
