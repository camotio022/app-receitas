import {
    collection,
    doc,
    getDoc,
    getDocs,
    query,
    where,
    updateDoc,
} from 'firebase/firestore'
import { db } from '../../../firebase.config'


export const api_recipe_favorites = {
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
                    alert('Erro ao buscar as receitas favoritas:', error)
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
                    alert(
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