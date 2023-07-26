import './App.css'
import React, { useContext, useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { darkTheme, lightTheme } from './App/theme'

import { ThemeButton } from './colors.jsx'
import { CssBaseline, ThemeProvider } from '@mui/material'
import { Links } from './componentes/LINKS'
import { TopReview } from './pages/ReviewRecipes/index.jsx'
import { DetailsRecipes } from './pages/DetailsRecipes/index.jsx'
import { SignUp } from './screens/signUp/index.jsx'
import { SignIn } from './screens/signIn/index.jsx'
import { CreateRecipes } from './pages/CreateRecipes/createRecipe'
import { NavigationHandler } from './router/NavigationHandler'
import { AuthContext, AuthProvider } from './contexts/AuthContext'
import { Comunidade } from './pages/Comunidade/index.jsx'
import { MyRecipes } from './pages/MyRecipes/index.jsx'
import { FavoriteRecipes } from './pages/FavoriteRecipes/index.jsx'
import { LogoutAuto } from './LogoutAuto'
import { EditRecipes } from './pages/EditeRecipes/index.jsx'
import { HomePage } from './pages/Home/index.jsx'
import { PerfilUser } from './pages/USERFILES/EDITUSERPAGE/index.jsx'
import { INTERFACE } from './pages/INTERFACE/index.jsx'

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
          <INTERFACE RENDERPAGE={<>
            <Routes>
              <Route path="/home" element={<HomePage />} />
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
      {/* <ThemeButton handleClick={handleToggleMode} /> */}
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
