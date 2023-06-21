import {
    GoogleAuthProvider,
    getAuth,
    signInWithEmailAndPassword,
    signInWithPopup,
} from 'firebase/auth'
import React, { createContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

export const AuthContext = createContext()
const provider = new GoogleAuthProvider()

export const AuthProvider = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const [user, setUser] = useState(null)

    const [userData, setUserData] = useState(null)
    const navigate = useNavigate()
    useEffect(() => {
        const checkUserAuthentication = () => {
            const loggedInStatus = localStorage.getItem('isLoggedIn')
            setIsLoggedIn(loggedInStatus === 'true')

            if (loggedInStatus === 'true') {
                const userDataFromLocalStorage = JSON.parse(
                    localStorage.getItem('user')
                )
                if (userDataFromLocalStorage) {
                    setUserData(userDataFromLocalStorage)
                    setUser(userDataFromLocalStorage)
                }
            }
        }
        checkUserAuthentication()
    }, [userData])
    const login = (userData) => {
        setIsLoggedIn(true)
        localStorage.setItem('isLoggedIn', 'true')
        localStorage.setItem('user', JSON.stringify(userData))
    }
    const logout = () => {
        alert('Logout')
        // Lógica de logout
        // Define isAuthenticated como false e remove o token de autenticação
        setIsLoggedIn(false)
        localStorage.removeItem('isLoggedIn')
        localStorage.removeItem('user')
        // Outras lógicas de remoção do token de autenticação, como cookies ou localStorage
    }

    const loginWithGoogle = async () => {
        const auth = getAuth()
        signInWithPopup(auth, provider)
            .then((result) => {
                const credential =
                    GoogleAuthProvider.credentialFromResult(result)
                const token = credential.accessToken
                setUser(result.user)
                login(result.user)
                navigate('/topReview') //redirecionar
            })
            .catch((error) => {
                // Handle Errors here.
                const errorCode = error.code
                const errorMessage = error.message
                // The email of the user's account used.
                const email = error?.customData?.email
                // The AuthCredential type that was used.
                const credential = GoogleAuthProvider.credentialFromError(error)
                console.log(error)
            })
    }

    const loginWithEmailAndPassword = async (email, password) => {
        const auth = getAuth()
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                setUser(userCredential.user)
                login(userCredential.user)
            })
            .catch((error) => {
                const errorCode = error.code
                const errorMessage = error.message
                console.log(error.message)
            })
    }
    return (
        <AuthContext.Provider
            value={{
                isLoggedIn,
                login,
                logout,
                loginWithGoogle,
                loginWithEmailAndPassword,
            }}
        >
            {children}
        </AuthContext.Provider>
    )
}
