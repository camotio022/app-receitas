import { collection, query, where, getDocs } from 'firebase/firestore';
import { db } from '../../../firebase.config';

export const api_comments = {
    comments: {
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
