import {
    collection,
    deleteDoc,
    doc,
    getDocs,
    query,
    where,
} from 'firebase/firestore'
import { db } from '../../../firebase.config'
export const api_myrecipes = {
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
                    alert('Erro ao buscar as receitas:', error)
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
                    alert('Receita deletada com sucesso')
                    // Faça algo após deletar a receita, se necessário
                } catch (error) {
                    alert('Erro ao deletar a receita:', error)
                    // Trate o erro adequadamente
                }
            }
        },
    },
}