import {
  collection,
  doc,
  getDocs,
  query,
} from 'firebase/firestore'
import { db } from '../../firebase.config'
export const api_more = {
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

}
