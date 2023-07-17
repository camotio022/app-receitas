import {
  addDoc,
  arrayUnion,
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  query,
  setDoc,
  getFirestore,
  where,
  updateDoc,
} from 'firebase/firestore'
import { db } from '../../firebase.config'
import { User } from './entities/User.jsx'
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
} from 'firebase/auth'

const getCollection = async (collectionPath) => {
  const collectionSnap = await getDocs(collection(db, collectionPath))
  const collectionList = []
  collectionSnap.forEach((doc) => {
    collectionList.push({ ...doc.data(), id: doc.id })
  })

  return collectionList
}

export const api = {
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
        console.error('Erro ao criar usuário e vincular perfil:', error)
        // Trate o erro conforme necessário
      }
    },
    updateCover: async (userId, updatedData) => {
      try {
        const userDocRef = doc(db, 'users', userId)
        await updateDoc(userDocRef, { coverImage: updatedData.coverImage })
        console.log('Imagem de capa atualizada com sucesso!')
      } catch (error) {
        console.error('Erro ao atualizar a imagem de capa:', error)
      }
    },
    update: async (userId, updatedData) => {
      console.log('updateData', updatedData)
      try {
        const userDocRef = doc(db, 'users', userId)
        await updateDoc(userDocRef, updatedData, { merge: true })
        console.log('Usuário atualizado com sucesso!')
      } catch (error) {
        console.error('Erro ao atualizar o usuário:', error)
      }
    },
  },

  recipe: {
    get: async (id) => {
      if (!id) {
        const items = []
        const res = await getDocs(collection(db, 'recipes'))
        res.forEach((item) => {
          items.push({ id: item.id, ...item.data() })
        })
        return items
      }

      const docRef = doc(db, 'recipes', id)
      const docSnap = await getDoc(docRef)

      if (docSnap.exists()) {
        return docSnap.data()
      } else {
        // doc.data() will be undefined in this case
        console.log('No such document!')
      }
    },

    post: async (payload) => {
      const { id, ...rest } = payload
      if (id) {
        return
      }
      const docRef = await addDoc(collection(db, 'recipes'), {
        ...rest,
      })
      console.log(docRef)
      // criar um usuario no firebase utilizando email name
    },
    update: async (recipeId, updatedData) => {
      try {
        const recipeDocRef = doc(db, 'recipes', recipeId)
        await updateDoc(recipeDocRef, updatedData, { merge: true })
        console.log('Receita atualizada com sucesso!')
      } catch (error) {
        console.error('Erro ao atualizar a receita:', error)
      }
    },
  },

  ingredientes: {
    get: async (id) => {
      if (id) {
        const receitaRef = doc(db, 'recipes', id)
        const ingredientesRef = collection(receitaRef, 'ingredientes')
        const ingredientesQuery = query(ingredientesRef)
        const ingredientesSnapshot = await getDocs(ingredientesQuery)
        if (!ingredientesSnapshot.empty) {
          const ingredientesData = ingredientesSnapshot.docs.map((doc) =>
            doc.data()
          )
          return ingredientesData
        } else {
          // Trate o caso em que não há ingredientes
        }
      }
    },
  },
  modopreparo: {
    get: async (id) => {
      if (id) {
        const receitaRef = doc(db, 'recipes', id)
        const ingredientesRef = collection(receitaRef, 'mododepreparo')
        const ingredientesQuery = query(ingredientesRef)
        const ingredientesSnapshot = await getDocs(ingredientesQuery)
        if (!ingredientesSnapshot.empty) {
          const ingredientesData = ingredientesSnapshot.docs.map((doc) =>
            doc.data()
          )
          return ingredientesData
        } else {
          // Trate o caso em que não há ingredientes
        }
      }
    },
  },
  editerecipes: {},
  myRecipes: {
    get: async (authorId) => {
      if (authorId) {
        try {
          const recipesRef = collection(db, 'recipes')
          const q = query(recipesRef, where('author', '==', authorId))
          const snapshot = await getDocs(q)
          const recipes = []
          snapshot.forEach((doc) => {
            const recipe = doc.data()
            recipe.id = doc.id // Adicionar a propriedade "id" ao objeto da receita
            recipes.push(recipe)
          })
          return recipes
        } catch (error) {
          console.error('Erro ao buscar as receitas:', error)
          return [] // Retorna uma lista vazia em caso de erro
        }
      } else {
        return [] // Retorna uma lista vazia se o ID do autor não for fornecido
      }
    },
    delete: async (recipeId) => {
      if (recipeId) {
        try {
          await deleteDoc(doc(db, 'recipes', recipeId))
          console.log('Receita deletada com sucesso')
          // Faça algo após deletar a receita, se necessário
        } catch (error) {
          console.error('Erro ao deletar a receita:', error)
          // Trate o erro adequadamente
        }
      }
    },
  },
  favoriteRecipes: {
    get: async (userId) => {
      // atual - pegando as receitas do usuário e pegando os dados de cada uma delas
      // ideal - pegar as receitas que foram favoritadas pelo usuário
      const recipesCollection = collection(db, 'recipes')
      // receitas que já foram favoritadas pelo usuário
      const recipesRef = await getDocs(
        query(
          recipesCollection,
          where('likesCounter', 'array-contains', userId)
        )
      )
      let recipesData = []
      recipesRef.forEach((el) => recipesData.push(el.data()))
      console.log(recipesData)
      return recipesData
    },
    post: async (recipeId, userId) => {
      if (recipeId && userId) {
        try {
          // Obter a referência da receita
          const recipeDocRef = doc(db, 'recipes', recipeId)
          const recipeDocSnap = await getDoc(recipeDocRef)

          if (!recipeDocSnap.exists()) {
            console.log('Receita não encontrada')
            return []
          }
          // A receita existe, você pode prosseguir com a atualização do likesCounter
          const recipeData = recipeDocSnap.data()
          const likesCounter = recipeData.likesCounter || []

          // Verificar se o usuário já favoritou a receita
          const userAlreadyLiked = likesCounter.includes(userId)
          if (!userAlreadyLiked) {
            // Adicionar o ID do usuário ao likesCounter da receita
            likesCounter.push(userId)
            await updateDoc(recipeDocRef, {
              likesCounter: likesCounter,
            })
          }
        } catch (error) {
          console.error('Erro ao buscar as receitas favoritas:', error)
          return []
        }
      } else {
        return [] // Retorna uma lista vazia se o ID do usuário não for fornecido
      }
    },

    remove: async (recipeId, userId) => {
      if (recipeId && userId) {
        try {
          // Obter a referência da receita
          const recipeDocRef = doc(db, 'recipes', recipeId)
          const recipeDocSnap = await getDoc(recipeDocRef)

          if (!recipeDocSnap.exists()) {
            console.log('Receita não encontrada')
            return false
          }

          // A receita existe, você pode prosseguir com a remoção do likesCounter
          const recipeData = recipeDocSnap.data()
          const likesCounter = recipeData.likesCounter || []

          // Verificar se o usuário já favoritou a receita
          const userIndex = likesCounter.indexOf(userId)
          if (userIndex !== -1) {
            // Remover o ID do usuário do likesCounter da receita
            likesCounter.splice(userIndex, 1)

            // Atualizar o documento da receita com a lista de likes atualizada
            await updateDoc(recipeDocRef, {
              likesCounter: likesCounter,
            })

            console.log('Usuário removido dos likesCounter da receita')
            return true
          } else {
            console.log('Usuário não encontrado nos likesCounter da receita')
            return false
          }
        } catch (error) {
          console.error(
            'Erro ao remover o usuário dos likesCounter da receita:',
            error
          )
          return false
        }
      } else {
        return false // Retorna falso se o ID da receita ou do usuário não forem fornecidos
      }
    },
  },
}
