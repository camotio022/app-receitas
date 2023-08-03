import { collection, addDoc, doc, setDoc, getDocs, query, where } from 'firebase/firestore';

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
                createdAt: new Date().toISOString(),
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
                    createdAt: new Date().toISOString(),
                });
                console.log('Notificação de unfollow adicionada com sucesso:', docRef.id);
            } catch (error) {
                console.error('Erro ao adicionar notificação de unfollow:', error);
            }
        },
    }
}

 // const userToken = "AAAAv0yytIg:APA91bHa7M_Jx_xNU_Yiauvz27XsuiHDvBPWBOOxuKSCXbq4M3P0pihVVTDRIg9zcotq7gwDNQoLO6caUWZiJKT077Ofenoy-VOofGH21mBW8CY1DcT2dMVksbp7Yl2qvCoK_DjDpBJV";
                // const messaging = getMessaging();
                // const registrationToken = await getToken(messaging);
                // const fcmApiUrl = 'https://fcm.googleapis.com/fcm/send';
                // // Agora, envie a notificação para o seguido usando FCM
                // const message = {
                //     notification: {
                //         title: 'Novo seguidor!',
                //         body: 'Você tem um novo seguidor!',
                //     },
                //     token: userToken,
                // };
                // const headers = new Headers({
                //     'Authorization': `key=${userToken}`,
                //     'Content-Type': 'application/json',
                // });
                // const options = {
                //     method: 'POST',
                //     headers: headers,
                //     body: JSON.stringify(message),
                // };
                // const response = await fetch(fcmApiUrl, options);
                // const responseData = await response.text();
                // if (response.ok) {
                //     console.log('Notificação enviada com sucesso:', responseData);
                // } else {
                //     console.log('Erro ao enviar notificação:', responseData);
                // }