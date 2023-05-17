import './App.css'
import React, { useState } from 'react'
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'

import { darkTheme, lightTheme } from './App/theme'

// import GlobalStyles from './App/global/global'

import { HomePage } from './pages/Home'
import { ThemeButton } from './colors.jsx'
import { CssBaseline, ThemeProvider } from '@mui/material'

function App() {
    const [useDarkMode, setUseDarkMode] = useState(false)

    const handleToggleMode = () => {
        setUseDarkMode(!useDarkMode)
    }

    const theme = useDarkMode ? darkTheme : lightTheme
    console.log({ theme })
    return (
        <>
            <ThemeProvider theme={theme}>
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                    </Routes>
                </BrowserRouter>

                <ThemeButton handleClick={handleToggleMode} />
                <CssBaseline />
            </ThemeProvider>
        </>
    )
}

export default App
