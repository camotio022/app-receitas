import { collection, addDoc, doc, setDoc, getDocs, query, where, updateDoc, getDoc } from 'firebase/firestore';

const notificationsCollection = collection(db, 'notifications');
import { db, } from "../../../firebase.config";
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
            const notificationData = {
                userId: followedId,
                followerId: followerId,
                data: {
                    title: 'Nova notificação',
                    action: 'Você tem um novo seguidor',
                    isRead: false,
                },
                hours: new Date().toLocaleTimeString(),
                date: new Date().toLocaleDateString(),
            };
            try {
                const docRef = await addDoc(notificationsCollection, notificationData);
                console.log('id do cocumento criado:', docRef.id);
                console.log('id do seguido:', followedId);
            } catch (error) {
                console.error('Erro ao adicionar notificação:', error);
            }
        },
        postUnfollow: async (followedId, followerId) => {
            if (!followerId || !followedId) {
                console.error('Parâmetros inválidos para enviar notificação.');
                return;
            }
            try {
                const docRef = await addDoc(notificationsCollection, {
                    userId: followedId,
                    data: {
                        title: 'Deixaram de seguir você',
                        action: 'Um usuário deixou de seguir você.',
                        isRead: false,
                    },
                    hours: new Date().toLocaleTimeString(),
                    date: new Date().toLocaleDateString(),
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
        newRecipe: async (shooter, docRefId) => {
            if (!shooter || !docRefId) {
                console.error('Parâmetros inválidos para criar notificação de nova receita.');
                return;
            }
            try {
                const receitaDataRef = await getDoc(doc(db, 'recipes', docRefId));
                if (!receitaDataRef.exists()) {
                    console.error('Receita não encontrada.');
                    return;
                }

                const autorId = receitaDataRef.data().autor; // ID do autor da receita

                const seguidoresRef = doc(db, 'users', shooter);
                const seguidoresDoc = await getDoc(seguidoresRef);
                if (!seguidoresDoc.exists()) {
                    console.error('Usuário não encontrado.');
                    return;
                }

                const seguidoresData = seguidoresDoc.data();
                const seguidores = seguidoresData.followers;
                const notificacoesRef = collection(db, 'notifications');
                const notificacoesPromises = seguidores.map(async followerId => {
                    const notificationData = {
                        userId: followerId,
                        data: {
                            title: 'Nova Receita',
                            action: `O usuário ${seguidoresData.name} criou uma nova receita: ${receitaDataRef.data().recipeTitle}`,
                            isRead: false,
                        },
                        hours: new Date().toLocaleTimeString(),
                        date: new Date().toLocaleDateString(),
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



