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
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'

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
      return 'users'
    },
    post: async (payload) => {
      const { id, email, name, lastName, password } = payload
      const firestore = getFirestore()

      const usersCollection = collection(firestore, 'users')
      const emailQuery = query(
        usersCollection,
        where('email', '==', email)
      )
      const emailQuerySnapshot = await getDocs(emailQuery)
      if (!emailQuerySnapshot.empty) {
        alert('O email já está sendo usado por outro usuário.')
        window.location.replace('/signup')
        return
      }
      const userDocRef = await addDoc(usersCollection, {
        email,
        name,
        lastName,
        password,
        // outros dados que você queira adicionar
      })
      console.log('Usuário criado com sucesso:', userDocRef.id)
      window.location.replace('/')
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
    }

  },

  ingredientes: {
    get: async (id) => {
      if (id) {
        const receitaRef = doc(db, 'recipes', id)
        const ingredientesRef = collection(receitaRef, 'ingredientes')
        const ingredientesQuery = query(ingredientesRef)
        const ingredientesSnapshot = await getDocs(ingredientesQuery)
        if (!ingredientesSnapshot.empty) {
          const ingredientesData = ingredientesSnapshot.docs.map(
            (doc) => doc.data()
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
          const ingredientesData = ingredientesSnapshot.docs.map(
            (doc) => doc.data()
          )
          return ingredientesData
        } else {
          // Trate o caso em que não há ingredientes
        }
      }
    },
  },

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
      if (userId) {
        try {
          const usersCollection = collection(db, 'users')
          const userDocRef = query(
            usersCollection,
            where('userId', '==', userId)
          )
          const userDocSnap = await getDocs(userDocRef)
          
          if (userDocSnap.size === 1) {
            const userData = userDocSnap.docs[0].data()
            const favoriteRecipes = userData.favorite_recipes || []
            console.log('passou', favoriteRecipes)
            return Object.values(favoriteRecipes)
          } else {
            return []
          }
        } catch (error) {
          console.error(
            'Erro ao buscar as receitas favoritas:',
            error
          )
          return []
        }
      } else {
        return [] // Retorna uma lista vazia se o ID do usuário não for fornecido
      }
    },
    post: async (recipeId, userId) => {
      if (recipeId && userId) {
        try {
          const userDocRef = doc(db, 'users', userId);
          const userDocSnap = await getDoc(userDocRef);
    
          if (userDocSnap.exists()) {
            // Obter as receitas favoritas do usuário
            const userData = userDocSnap.data();
            const favoriteRecipes = userData.favoriteRecipes || [];
    
            // Verificar se a receita já está nos favoritos
            if (!favoriteRecipes.includes(recipeId)) {
              // A receita não está nos favoritos do usuário
    
              // Adicionar a receita aos favoritos
              favoriteRecipes.push(recipeId);
              await updateDoc(userDocRef, {
                favoriteRecipes: favoriteRecipes,
              });
              alert('Receita adicionada aos favoritos com sucesso!');
            } else {
              // A receita já está nos favoritos do usuário
              alert('A receita já está nos favoritos do usuário.');
            }
    
            // Obter a referência da receita
            const recipeDocRef = doc(db, 'recipes', recipeId);
            const recipeDocSnap = await getDoc(recipeDocRef);
    
            if (recipeDocSnap.exists()) {
              // A receita existe, você pode prosseguir com a atualização do likesCounter
              const recipeData = recipeDocSnap.data();
              const likesCounter = recipeData.likesCounter || [];
    
              // Verificar se o usuário já favoritou a receita
              if (!likesCounter.includes(userId)) {
                // Adicionar o ID do usuário ao likesCounter da receita
                likesCounter.push(userId);
                await updateDoc(recipeDocRef, { likesCounter: likesCounter });
              }
            } else {
              console.log('Receita não encontrada');
              return [];
            }
          } else {
            console.log('Usuário não encontrado');
            return [];
          }
        } catch (error) {
          console.error('Erro ao buscar as receitas favoritas:', error);
          return [];
        }
      } else {
        return []; // Retorna uma lista vazia se o ID do usuário não for fornecido
      }
    },

    remove: async (recipeId, userId) => {
      if (recipeId && userId) {
        const usersRef = firebase.database().ref('users')

        try {
          const snapshot = await usersRef
            .child(userId)
            .child('favorite_recipes')
            .once('value')
          const recipes = snapshot.val() || []
          const updatedRecipes = Object.values(recipes).filter(
            (id) => id !== recipeId
          )
          await usersRef
            .child(userId)
            .child('favorite_recipes')
            .set(updatedRecipes)
          console.log('Receita removida dos favoritos')
          return true
        } catch (error) {
          console.error(
            'Erro ao remover a receita dos favoritos:',
            error
          )
          return false
        }
      } else {
        return false // Retorna falso se o ID do usuário ou da receita não for fornecido
      }
    },
  },
}
