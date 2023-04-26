import { collection, doc, getDoc, getDocs } from "firebase/firestore"
import { db } from '../../firebase.config';


export const api = {
    user: {
        get: (id) => {
            if (id) {
                return {}
            }
            return []
        }
    },
    ingredient: {},
    recipe: {
        get: async (id) => {
            if (id) {
                const docRef = doc(db, "recipes", id);
                const docSnap = await getDoc(docRef);

                if (docSnap.exists()) {
                    return docSnap.data()
                } else {
                    // doc.data() will be undefined in this case
                    console.log("No such document!");
                }
                return {

                }
            }

            const recipesSnap = await getDocs(collection(db, "recipes"))
            const recipes = []
            recipesSnap.forEach((doc) => {
                recipes.push(doc.data())
            })
            return recipes
            // if (recipesSnap.exists()) {
            //     console.log("Document data", recipesSnap.data())
            // } else {
            // }
            return []
        }
    },
}