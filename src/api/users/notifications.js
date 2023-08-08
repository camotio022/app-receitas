import { collection, addDoc, doc, setDoc, getDocs, query, where, updateDoc, getDoc } from 'firebase/firestore';

const notificationsCollection = collection(db, 'notifications');
import { db, } from "../../../firebase.config";
const time = {
    hours: new Date().toLocaleTimeString(),
    date: new Date().toLocaleDateString(),
}
const existes = (value) => {
    if (!value.exists()) {
        console.error('Receita não encontrada.');
        return;
    }
}
export const api_notifications = {
    notification: {
        get: async (userId) => {
            if (!userId) return;
            try {
                const querySnapshot = await getDocs(
                    query(notificationsCollection, where('userId', '==', userId))
                );
                const notificationsData = [];
                querySnapshot.forEach((doc) => {
                    notificationsData.push({
                        id: doc.id,
                        data: doc.data(),
                    });
                });
                return notificationsData;
            } catch (error) {
                console.error('Erro ao obter notificações:', error);
            }
        },
        post: async (followedId, followerId) => {
            if (!followerId || !followedId) {
                console.error('Parâmetros inválidos para enviar notificação.');
                return;
            }
            const userDataRef = await getDoc(doc(db, 'users', followerId));
            existes(userDataRef)
            const notificationData = {
                userId: followedId,
                docRef: followerId,
                type: 'seguidor',
                data: {
                    title: `${userDataRef.data().name}`,
                    action: 'Começou a seguir você!',
                    isRead: false,
                },
                time,
            };
            try {
                await addDoc(notificationsCollection, notificationData);
            } catch (error) {
                console.error('Erro ao adicionar notificação:', error);
            }
        },
        postUnfollow: async (followedId, followerId) => {
            if (!followerId || !followedId) {
                console.error('Parâmetros inválidos para enviar notificação.');
                return;
            }
            const userDataRef = await getDoc(doc(db, 'users', followerId));
            existes(userDataRef)
            try {
                const docRef = await addDoc(notificationsCollection, {
                    userId: followedId,
                    docRef: userDataRef.id,
                    type: 'seguidor',
                    data: {
                        title: `${userDataRef.data().name}`,
                        action: 'Deixou de seguir você.',
                        isRead: false,
                    },
                    time,
                });
                console.log('Notificação de unfollow adicionada com sucesso:', docRef.id);
            } catch (error) {
                console.error('Erro ao adicionar notificação de unfollow:', error);
            }
        },
        hasAlreadyBeenSeen: async (userId, notificationId) => {
            if (!userId || !notificationId) return;
            try {
                const notificationsRef = collection(db, 'notifications');
                const querySnapshot = await getDocs(query(notificationsRef, where('userId', '==', userId)));
                querySnapshot.forEach(async (doc) => {
                    const data = doc.data();
                    const docId = doc.ref.id;
                    if (docId === notificationId) {
                        await updateDoc(doc.ref, {
                            data: {
                                ...data.data,
                                isRead: true,
                                alreadyOpenedHours: new Date().toLocaleTimeString(),
                                alreadyOpenedDate: new Date().toLocaleDateString(),
                            },
                        });
                    }
                });
            } catch (error) {
                console.error('Erro ao verificar se as notificações foram lidas:', error);
                return false;
            }
        },
        markAllAsRead: async (userId) => {
            const notificationsRef = collection(db, 'notifications');
            const userNotificationsQuery = query(notificationsRef, where('userId', '==', userId));
            try {
                const querySnapshot = await getDocs(userNotificationsQuery);
                const batch = db.batch();
                querySnapshot.forEach((doc) => {
                    const notificationRef = doc(db, 'notifications', doc.id);
                    batch.update(notificationRef, {
                        'data.isRead': true,
                    });
                });
                await batch.commit();
                console.log('Notificações do usuário marcadas como lidas com sucesso:', userId);
            } catch (error) {
                console.error('Erro ao marcar notificações do usuário como lidas:', error);
            }
        }
    },
    notificationCreateRecipe: {
        newRecipe: async (docRefId) => {
            if (!docRefId) {
                console.error('Parâmetros inválidos para criar notificação de nova receita.');
                return;
            }
            try {
                const receitaDataRef = await getDoc(doc(db, 'recipes', docRefId));
                existes(receitaDataRef)
                const autorId = receitaDataRef.data().author;
                const seguidoresRef = doc(db, 'users', autorId);
                const seguidoresDoc = await getDoc(seguidoresRef);
                existes(seguidoresDoc)
                const seguidoresData = seguidoresDoc.data();
                const seguidores = seguidoresData.followers;
                if (!seguidores) return
                const notificacoesRef = collection(db, 'notifications');
                const notificacoesPromises = seguidores.map(async shotId => {
                    const notificationData = {
                        userId: shotId,
                        docRef: receitaDataRef.id,
                        type: 'receita',
                        data: {
                            title: 'Nova Receita',
                            action: `${seguidoresData.name} criou uma nova receita: ${receitaDataRef.data().recipeTitle}`,
                            isRead: false,
                        },
                        time,
                    };
                    await addDoc(notificacoesRef, notificationData);
                });
                await Promise.all(notificacoesPromises);
                console.log('Notificações de nova receita criadas com sucesso.');
            } catch (error) {
                console.error('Erro ao criar notificações de nova receita:', error);
            }
        },
    },

};



