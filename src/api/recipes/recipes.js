import {
    addDoc,
    arrayUnion,
    collection,
    doc,
    getDoc,
    getDocs,
    updateDoc,
} from 'firebase/firestore'
import { db } from '../../../firebase.config'
import { api_notifications } from '../users/notifications'
export const api_recipes = {
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
                alert('No such document!')
            }
        },
        post: async (payload, userId) => {
            if (!userId) return
            const { id, ...rest } = payload
            if (id) {
                return
            }
            const docRef = await addDoc(collection(db, 'recipes'), {
                ...rest,
            })
            await api_notifications.notificationCreateRecipe.newRecipe(docRef.id)
        },
        update: async (recipeId, updatedData) => {
            try {
                const recipeDocRef = doc(db, 'recipes', recipeId)
                await updateDoc(recipeDocRef, updatedData, { merge: true })
                alert('Receita atualizada com sucesso!')
            } catch (error) {
                alert('Erro ao atualizar a receita:', error)
            }
        },
        AddIngredient: async (docRef, newValue) => {
            if (!docRef || !newValue) return;
            try {
                const listDocRef = doc(db, 'recipes', docRef);
                const docSnapshot = await getDoc(listDocRef);
        
                if (docSnapshot.exists()) {
                    const data = docSnapshot.data();
                    const ingredients = data.ingredients || [];
                    const updatedIngredients = [...ingredients, newValue];
                    await updateDoc(listDocRef, { ingredients: updatedIngredients });
                    console.log('Ingredient updated successfully');
                }
            } catch (error) {
                console.error(error);
            }
        },
        
        editIngredient: async (docRef, oldValue, newValue) => {
            if (!docRef || !newValue) return
            try {
                const listDocRef = doc(db, 'recipes', docRef);
                const docSnapshot = await getDoc(listDocRef);

                if (docSnapshot.exists()) {
                    const data = docSnapshot.data();
                    const ingredients = data.ingredients || [];
                    const originalIndex = ingredients.indexOf(oldValue);
                    ingredients[originalIndex] = newValue;
                    await updateDoc(listDocRef, { ingredients });
                    console.log('Ingredient updated successfully');
                }
                } catch (error) {
                    alert(error)
                }
            },
        },
    }