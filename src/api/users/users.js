import {
    addDoc,
    collection,
    doc,
    getDoc,
    getDocs,
    query,
    getFirestore,
    where,
    updateDoc,
} from 'firebase/firestore'
import { db } from '../../../firebase.config'
import {
    getAuth,
    createUserWithEmailAndPassword,
    updateProfile,
} from 'firebase/auth'

export const api_users = {
    user: {
        get: async (id) => {
            if (id) {
                const docSnap = await getDoc(doc(db, 'users', id))
                if (docSnap.exists()) {
                    return docSnap.data()
                } else {
                    // doc.data() will be undefined in this case
                    console.log('No such document!')
                }
                return {}
            }
            const querySnapshot = await getDocs(collection(db, 'users'))
            const usersData = []
            querySnapshot.forEach((doc) => {
                usersData.push(doc.data())
            })
            return usersData
        },
        post: async (payload) => {
            const {
                id,
                email,
                name,
                lastName,
                password,
                coverImage,
                photoURL,
                address,
                birthday,
                age,
                phoneNumber,
                occupation,
                education,
                hobbies,
                socialMedia,
                bio,
            } = payload
            const auth = getAuth()

            try {
                // Criar o usuário no Firebase Auth
                const userCredential = await createUserWithEmailAndPassword(
                    auth,
                    email,
                    password
                )
                const user = userCredential.user

                // Atualizar o perfil do usuário com o nome
                await updateProfile(user, { displayName: `${name} ${lastName}` })

                const firestore = getFirestore()
                const usersCollection = collection(firestore, 'users')

                // Verificar se o email já está sendo usado por outro usuário
                const emailQuery = query(usersCollection, where('email', '==', email))
                const emailQuerySnapshot = await getDocs(emailQuery)

                if (!emailQuerySnapshot.empty) {
                    alert('O email já está sendo usado por outro usuário.')
                    window.location.replace('/signup')
                    return
                }

                // Adicionar os dados do usuário ao Firestore
                const userDocRef = await addDoc(usersCollection, {
                    id: user.uid,
                    email,
                    name,
                    lastName,
                    coverImage: '',
                    photoURL: '',
                    address: '',
                    birthday: '',
                    age: '',
                    phoneNumber: null,
                    occupation: '',
                    education: '',
                    hobbies: '',
                    socialMedia: '',
                    bio: '',
                    // outros dados que você queira adicionar
                })

                console.log('Usuário criado com sucesso:', userDocRef.id)
                window.location.replace('/')
            } catch (error) {
                alert('Erro ao criar usuário e vincular perfil:', error)
                // Trate o erro conforme necessário
            }
        },
        updateCover: async (userId, updatedData) => {
            try {
                const userDocRef = doc(db, 'users', userId)
                await updateDoc(userDocRef, { coverImage: updatedData.coverImage })
                alert('Imagem de capa atualizada com sucesso!')
            } catch (error) {
                alert('Erro ao atualizar a imagem de capa:', error)
            }
        },
        update: async (userId, updatedData) => {
            alert('updateData', updatedData)
            try {
                const userDocRef = doc(db, 'users', userId)
                await updateDoc(userDocRef, updatedData, { merge: true })
                alert('Usuário atualizado com sucesso!')
            } catch (error) {
                alert('Erro ao atualizar o usuário:', error)
            }
        },
    },

}