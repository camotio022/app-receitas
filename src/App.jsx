import './App.css'
import React, { useState } from 'react'
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'

import { darkTheme, lightTheme } from './App/theme'

// import GlobalStyles from './App/global/global'

import { HomePage } from './pages/Home'
import { ThemeButton } from './colors.jsx'
import { Box, CssBaseline, ThemeProvider } from '@mui/material'
import { Links } from './componentes/LINKS'
import { TopReview } from './pages/ReviewRecipes/index.jsx'
import { DetailsRecipes } from './pages/DetailsRecipes/index.jsx'
import { SignUp } from './templates/signUp/index.jsx'
import { SignIn } from './templates/signIn/index.jsx'
import { CreateRecipes } from './pages/CreateRecipes/createRecipe'



function App() {
    const [useDarkMode, setUseDarkMode] = useState(false)
    const [iSuserLoged, setIsUserLoged] = useState(false)

    const handleToggleMode = () => {
        setUseDarkMode(!useDarkMode)
    }

    const theme = useDarkMode ? darkTheme : lightTheme
    if (!iSuserLoged) {
        return (
            <ThemeProvider theme={theme}>
                <Links />
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<TopReview />} />
                        <Route path="/createRecipes" element={<CreateRecipes />} />
                        <Route path="/detailsRecipes/:id" element={<DetailsRecipes/>}/>
                        <Route path="/signup" element={<SignUp />}/>
                        <Route path="/signin" element={<SignIn />}/>
                    </Routes>
                </BrowserRouter>
                <ThemeButton handleClick={handleToggleMode} />
                <CssBaseline />
            </ThemeProvider>
        )
    }

    return (
        <ThemeProvider theme={theme}>
            <div>usuário não logado</div>
        </ThemeProvider>
    )
}

export default App
