import { collection, query, where, getDocs, getDoc } from 'firebase/firestore';
import { db } from '../../../firebase.config';

export const api_comments = {
    comments: {
        get: async (id) => {
            if (id) {
                const docSnap = await getDoc(doc(db, "recipesComments", id));
                if (docSnap.exists()) {
                    return docSnap.data();
                } else {
                    console.log("No such document!");
                }
                return {};
            }
            const querySnapshot = await getDocs(collection(db, "recipesComments"));
            const commentData = [];
            querySnapshot.forEach((doc) => {
                commentData.push(doc.data());
            });
            return commentData;
        },
        getForRecipe: async (recipeId) => {
            if (!recipeId) return
            try {
                const commentsRef = collection(db, 'recipesComments');
                const q = query(commentsRef, where('commented_recipeId', '==', recipeId));
                const querySnapshot = await getDocs(q);
                const comments = [];
                querySnapshot.forEach((doc) => {
                    comments.push({ id: doc.id, ...doc.data() });
                });
                return comments;
            } catch (error) {
                console.error('Erro ao buscar comentários da receita:', error);
                return [];
            }
        },
    },
};
