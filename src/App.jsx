import './App.css'
import React, { createContext, useContext, useEffect, useState } from 'react'
import { BrowserRouter, Navigate, Route, Router, Routes, useLocation, useNavigate } from 'react-router-dom'
import { darkTheme, lightTheme } from './App/theme'

// import GlobalStyles from './App/global/global'

import { HomePage } from './pages/Home'
import { ThemeButton } from './colors.jsx'
import { CssBaseline, ThemeProvider } from '@mui/material'
import { Links } from './componentes/LINKS'
import { TopReview } from './pages/ReviewRecipes/index.jsx'
import { DetailsRecipes } from './pages/DetailsRecipes/index.jsx'
import { SignUp } from './templates/signUp/index.jsx'
import { SignIn } from './templates/signIn/index.jsx'
import { CreateRecipes } from './pages/CreateRecipes/createRecipe'


export const AuthContext = createContext();
function NavigationHandler() {
    const { isLoggedIn } = useContext(AuthContext);
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
    return <Navigate to={isLoggedIn ? location.pathname : 'http://localhost:3000'} replace />;
}
const AuthProvider = ({ children }) => {

    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const [user, setUser] = useState(null);
    const userData = JSON.parse(localStorage.getItem(''));
    useEffect(() => {
        // Verificar se o usuário está autenticado
        const checkUserAuthentication = () => {
            const loggedInStatus = localStorage.getItem('isLoggedIn');
            setIsLoggedIn(loggedInStatus === 'true');
            // Verifica se há dados do usuário no localStorage
            const userData = JSON.parse(localStorage.getItem('user'));
            if (loggedInStatus === 'true' && userData) {
                setUser(userData);
            }
        };
        checkUserAuthentication();
    }, []);
    const login = () => {
        // Lógica de autenticação bem-sucedida
        // Define isAuthenticated como true e armazena o token de autenticação
        setIsLoggedIn(true);
        localStorage.setItem('isLoggedIn', 'true');
        localStorage.setItem('user', JSON.stringify(userData));
        // Outras lógicas de armazenamento de token de autenticação, como cookies ou localStorage
    };
    const logout = () => {
        alert('Logout')
        // Lógica de logout
        // Define isAuthenticated como false e remove o token de autenticação
        setIsLoggedIn(false);
        localStorage.removeItem('isLoggedIn');
        localStorage.removeItem('user');
        // Outras lógicas de remoção do token de autenticação, como cookies ou localStorage
    };
    return (
        <AuthContext.Provider value={{ isLoggedIn, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};
const MyComponent = () => {
    const { isLoggedIn, login, logout } = useContext(AuthContext);



    const [useDarkMode, setUseDarkMode] = useState(false)
    const [iSuserLoged, setIsUserLoged] = useState(false)
    const handleToggleMode = () => {
        setUseDarkMode(!useDarkMode)
    }
    const theme = useDarkMode ? darkTheme : lightTheme


    if (isLoggedIn) {
        return (
            <div>
                <ThemeProvider theme={theme}>
                    <BrowserRouter>
                        <NavigationHandler />
                        <Links />
                        <Routes>
                            <Route path="/topReview" element={<TopReview />} />
                            <Route path="/createRecipes" element={<CreateRecipes />} />
                            <Route path="/detailsRecipes/:id" element={<DetailsRecipes />} />
                            <Route path="/signup" element={<SignUp />} />
                            <Route path="/signin" element={<SignIn />} />
                        </Routes>
                    </BrowserRouter>
                    <ThemeButton handleClick={handleToggleMode} />
                    <CssBaseline />
                </ThemeProvider>
            </div>
        )
    } else {
        return (
            <div>
                <ThemeProvider theme={theme}>
                    <BrowserRouter>
                        <Routes>
                            <Route path="/" element={<SignIn />} />
                            <Route path="/signup" element={<SignUp />} />
                        </Routes>
                    </BrowserRouter>

                    <ThemeButton handleClick={handleToggleMode} />
                    <CssBaseline />
                </ThemeProvider>
            </div>
        )
    }
};


function App() {
    return (
        <>
            <AuthProvider>
                <MyComponent />
            </AuthProvider>
        </>
    )
}



export default App
