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
                        <Route path="/detailsRecipes" element={<DetailsRecipes/>}/>
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
