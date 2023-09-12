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
import { getFirestore, doc, setDoc, collection, getDocs, query, where, updateDoc } from 'firebase/firestore'
import { api_users } from '../api/users/users'

export const AuthProvider = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const [user, setUser] = useState(null)

    const [userData, setUserData] = useState(null)
    const navigate = useNavigate()
    const checkUserAuthentication = async () => {
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
    useEffect(() => {
        checkUserAuthentication()
    }, [])

    const login = (userData) => {
        setIsLoggedIn(true)
        localStorage.setItem('isLoggedIn', 'true')
        localStorage.setItem('user', JSON.stringify(userData))
    }
    const logout = () => {
        setIsLoggedIn(false)
        localStorage.removeItem('isLoggedIn')
        localStorage.removeItem('user')
        window.location.replace('/')
    }

    const loginWithGoogle = async () => {
        const auth = getAuth();
        signInWithPopup(auth, provider)
            .then(async (result) => {
                const credential = GoogleAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;
                const { user } = result;
                const firestore = getFirestore();
                const usersRef = collection(firestore, 'users');
                const querySnapshot = await getDocs(query(usersRef, where('email', '==', user.email)));
                const existingUser = querySnapshot.docs[0];

                if (existingUser) {
                    const userData = {
                        name: user.displayName,
                    };
                    await updateDoc(doc(usersRef, existingUser.id), userData);
                    setUser(existingUser.data());
                } else {
                    const newUser = {
                        id: user.uid,
                        name: user.displayName,
                        email: user.email,
                        photoURL: user.photoURL,
                        // outros dados que você queira adicionar
                    };

                    await setDoc(doc(usersRef, user.uid), newUser);
                    setUser(newUser);
                }

                console.log('Dados do usuário adicionados/atualizados com sucesso no Firestore.');
                login(user);
                navigate('/topReview'); //redirecionar
            })
            .catch((error) => {
                // Handle Errors here.
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(error);
            });
    };

    const loginWithEmailAndPassword = async (email, password) => {
        const auth = getAuth()
        if (!email && !password) return
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                setUser(userCredential.user)
                login(userCredential.user)
            })
            .catch((error) => {
                const errorCode = error.code
                const errorMessage = error.message
                alert(error.message)
            })
    }
    const loginWithFacebook = async () => {
        const auth = getAuth();
        const provider = new FacebookAuthProvider();
        signInWithPopup(auth, provider)
            .then((result) => {
                const credential = FacebookAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;
                const { user } = result;
                const userData = {
                    id: user.uid,
                    name: user.displayName,
                    email: user.email,
                    photoURL: user.photoURL,
                    // outros dados que você queira adicionar
                };
                // Adicione os dados do usuário ao Firestore
                const firestore = getFirestore();
                setDoc(doc(firestore, 'users', user.uid), userData)
                    .then(() => {
                        console.log('Dados do usuário adicionados com sucesso ao Firestore.');
                        // Faça o que precisar com os dados do usuário e redirecione para a página desejada
                        navigate('/topReview');
                    })
                    .catch((error) => {
                        console.error('Erro ao adicionar dados do usuário ao Firestore:', error);
                    });
            })
            .catch((error) => {
                // Trate os erros
                console.log(error);
            });
    };
    return (
        <AuthContext.Provider
            value={{
                isLoggedIn,
                login,
                logout,
                loginWithGoogle,
                loginWithEmailAndPassword,
                loginWithFacebook,
                user,
            }}
        >
            {children}
        </AuthContext.Provider>
    )
}
