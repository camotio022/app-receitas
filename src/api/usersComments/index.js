import { collection, query, where, getDocs, getDoc, addDoc, doc, updateDoc } from 'firebase/firestore';
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
                alert('Erro ao buscar comentários da receita:', error);
                return [];
            }
        },
        post: async (commented_recipeId, userId, message, timestamp) => {
            if (!commented_recipeId || !userId || !message || !timestamp) {
                console.error('Parâmetros inválidos para adicionar comentário.');
                return;
            }
            const commentsCollectionRef = collection(db, 'recipesComments');
            const userDocRef = doc(db, 'users', userId);
            const userDocSnapshot = await getDoc(userDocRef);
            if (userDocSnapshot.exists()) {
                const userDocData = userDocSnapshot.data();
                const commentData = {
                    commented_recipeId: commented_recipeId,
                    userId: userId,
                    avatar: userDocData.photoURL,
                    name: userDocData.name,
                    message: message,
                    timestamp: timestamp,
                    likesCounter: [],
                    replys: []
                };
                try {
                    await addDoc(commentsCollectionRef, commentData);
                } catch (error) {
                    alert('Erro ao adicionar comentário:', error);
                }
            } else {
                alert('Documento do usuário não encontrado.');
            }
        },
        postLikesCounter: async (commented_recipeId, userId) => {
            if (!commented_recipeId || !userId) {
                alert('Parâmetros inválidos para adicionar curtida.');
                return;
            }
            const commentDocRef = doc(db, 'recipesComments', commented_recipeId);
            const commentDocSnapshot = await getDoc(commentDocRef);
            if (commentDocSnapshot.exists()) {
                const updatedLikesCounter = commentDocSnapshot.data().likesCounter.concat(userId);
                try {
                    await updateDoc(commentDocRef, { likesCounter: updatedLikesCounter });
                   
                } catch (error) {
                    alert('Erro ao adicionar curtida:', error);
                }
            } else {
                alert('Comentário não encontrado.');
            }
        },
        postReplys: async (commented_recipeId, userId, message, timestamp) => {
            if (!commented_recipeId || !userId || !message || !timestamp) {
                console.error('Parâmetros inválidos para adicionar reply.');
                return;
            }
            const commentDocRef = doc(db, 'recipesComments', commented_recipeId);
            const userDocRef = doc(db, 'users', userId);
            const userDocSnapshot = await getDoc(userDocRef);
            if (userDocSnapshot.exists()) {
                const userDocData = userDocSnapshot.data();
                const commentDocSnapshot = await getDoc(commentDocRef);
                if (commentDocSnapshot.exists()) {
                    const commentData = commentDocSnapshot.data();
                    const newReply = {
                        userId: userId,
                        avatar: userDocData.photoURL,
                        name: userDocData.name,
                        message: message,
                        timestamp: timestamp,
                        likesCounter: [],
                        replys: []
                    };
                    const updatedReplies = [...commentData.replys, newReply];
                    try {
                        await updateDoc(commentDocRef, { replys: updatedReplies });
                    } catch (error) {
                        alert('Erro ao adicionar reply:', error);
                    }
                } else {
                    alert('Documento do comentário não encontrado.');
                }
            } else {
                alert('Documento do usuário não encontrado.');
            }
        },

    },
};
