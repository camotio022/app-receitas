import './App.css'
import React, { useContext, useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { darkTheme, lightTheme } from './App/theme'
import { CssBaseline, ThemeProvider } from '@mui/material'
import { TopReview } from './pages/ReviewRecipes/index.jsx'
import { DetailsRecipes } from './pages/DetailsRecipes/index.jsx'
import { SignUp } from './auth/signUp/index.jsx'
import { SignIn } from './auth/signIn/index.jsx'
import { CreateRecipes } from './pages/CreateRecipes/createRecipe'
import { AuthContext, AuthProvider } from './contexts/AuthContext'
import { Comunidade } from './pages/Comunidade/index.jsx'
import { MyRecipes } from './pages/MyRecipes/index.jsx'
import { FavoriteRecipes } from './pages/FavoriteRecipes/index.jsx'
import { LogoutAuto } from './LogoutAuto'
import { EditRecipes } from './pages/EditeRecipes/index.jsx'
import { PerfilUser } from './pages/USERFILES/EDITUSERPAGE/index.jsx'
import { MainLayout } from './pages/MainLayout/index.jsx'

const Main = () => {
  const auth = useContext(AuthContext)

  const [useDarkMode, setUseDarkMode] = useState(false)
  const handleToggleMode = () => {
    setUseDarkMode(!useDarkMode)
  }
  const theme = useDarkMode ? darkTheme : lightTheme
  return (
    <ThemeProvider theme={theme}>
      {auth.isLoggedIn ? (
        <>
          <MainLayout RENDERPAGE={<>
            <Routes>
              <Route path="/" element={<TopReview />} />
              <Route path="/topReview" element={<TopReview />} />
              <Route path="/createRecipes" element={<CreateRecipes />} />
              
              <Route path="/edituser/:id" element={<PerfilUser />} />
              <Route path="/detailsRecipes/:id" element={<DetailsRecipes />} />
              <Route path="/comunidade" element={<Comunidade />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="/signin" element={<SignIn />} />
              <Route path="/my-recipes" element={<MyRecipes />} />
              <Route path="/youfavoriteRecipes" element={<FavoriteRecipes />} />
              <Route path="/editerecipes/:id" element={<EditRecipes />} />
              <Route
                path="/detailsRecipes/:id/edit"
                element={<CreateRecipes />}
              />
            </Routes>
          </>} />
        </>
      ) : (
        <Routes>
          <Route path="/" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      )}
      <CssBaseline />
    </ThemeProvider>
  )
}

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Main />
      </AuthProvider>
      <LogoutAuto />
    </BrowserRouter>
  )
}

export { useContext }
export default App
