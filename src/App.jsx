import './App.css'
import React, { useEffect, useState } from 'react'
import { BrowserRouter, Navigate, Route, Router, Routes, useLocation, useNavigate } from 'react-router-dom'
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
function NavigationHandler() {
    const location = useLocation();
    useEffect(() => {
        const handleBeforeUnload = (event) => {
            event.preventDefault();
            event.returnValue = '';
        };
        window.addEventListener('beforeunload', handleBeforeUnload);
        return () => {
            window.removeEventListener('beforeunload', handleBeforeUnload);
        };
    }, []);
    return <Navigate to={location.pathname} replace />;
}

function App() {
    const [useDarkMode, setUseDarkMode] = useState(false)
    const [iSuserLoged, setIsUserLoged] = useState(false)
    const handleToggleMode = () => {
        setUseDarkMode(!useDarkMode)
    }
    const theme = useDarkMode ? darkTheme : lightTheme

    return (
        <ThemeProvider theme={theme}>
            <BrowserRouter>
                <NavigationHandler />
              
                <Routes>
                    <Route path="/" element={<TopReview />} />
                    <Route path="/createRecipes" element={<CreateRecipes />} />
                    <Route path="/detailsRecipes/:id" element={<DetailsRecipes />} />
                    <Route path="/signup" element={<SignUp />} />
                    <Route path="/signin" element={<SignIn />} />
                </Routes>
            </BrowserRouter>
            <Links />
            <ThemeButton handleClick={handleToggleMode} />
            <CssBaseline />
        </ThemeProvider>
    )
}



export default App
