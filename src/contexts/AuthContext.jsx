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

    // const loginWithGoogle = async () => {
    //     try {
    //         const auth = getAuth()
    //         const provider = new GoogleAuthProvider()
    //         const result = await signInWithPopup(auth, provider)
    //         const user = result.user
    //         const userData = {
    //             uid: user.uid,
    //             email: user.email,
    //             name: user.displayName,
    //             photoURL: user.photoURL,
    //             // Outros dados do usuário que você queira armazenar
    //         }

    //         login(userData)
    //         console.log('Usuário logado com sucesso:', user, user.uid)
    //         navigate('/topReview')
    //     } catch (error) {
    //         console.error('Erro ao fazer login com o Google:', error)
    //         // Trate o erro de login com o Google conforme necessário
    //     }
    // }
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
    // const loginWithEmailPassword = async (e) => {
    //     const checkUserExists = async (email, password) => {
    //         try {
    //             const auth = getAuth()
    //             const userCredential = await signInWithEmailAndPassword(
    //                 auth,
    //                 email,
    //                 password
    //             )
    //             const user = userCredential.user
    //             const userData = {
    //                 uid: user.uid,
    //                 email: user.email,
    //                 // Outros dados do usuário que você queira armazenar
    //             }

    //             return userData
    //         } catch (error) {
    //             console.error(
    //                 'Erro ao verificar a existência do usuário:',
    //                 error
    //             )
    //             throw error // Ou faça algo diferente com o erro
    //         }
    //     }
    //     try {
    //         const userExists = await checkUserExists(email, password)
    //         if (userExists) {
    //             login(userExists)
    //             console.log('logado')
    //             navigate('/topReview')
    //         } else {
    //         }
    //     } catch (error) {
    //         console.error('Erro ao verificar a existência do usuário:', error)
    //         if (error.code === 'auth/wrong-password') {
    //             setPassword('')
    //             alert('Senha incorreta')
    //         } else {
    //             if (error.code === 'auth/user-not-found') {
    //                 const createUser = async (email, password) => {
    //                     try {
    //                         const auth = getAuth()
    //                         const userCredential =
    //                             await createUserWithEmailAndPassword(
    //                                 auth,
    //                                 email,
    //                                 password
    //                             )
    //                         const user = userCredential.user
    //                         console.log('Usuário criado com sucesso:', user)
    //                     } catch (error) {
    //                         console.error('Erro ao criar usuário:', error)
    //                     }
    //                 }
    //                 createUser(email, password)
    //             } else {
    //                 alert('Erro na mídia')
    //             }
    //         }
    //     }
    // }

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
