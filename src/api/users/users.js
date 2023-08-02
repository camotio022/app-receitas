import {
  addDoc,
  collection,
  doc,
  getDoc,
  getDocs,
  query,
  getFirestore,
  where,
  updateDoc,
  arrayUnion,
  arrayRemove,
} from "firebase/firestore";
import { db, messaging, analytics } from "../../../firebase.config";
import { getMessaging, getToken } from 'firebase/messaging';
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { json } from "react-router-dom";
export const api_users = {
  user: {
    get: async (id) => {
      if (id) {
        const docSnap = await getDoc(doc(db, "users", id));
        if (docSnap.exists()) {
          return docSnap.data();
        } else {
          console.log("No such document!");
        }
        return {};
      }
      const querySnapshot = await getDocs(collection(db, "users"));
      const usersData = [];
      querySnapshot.forEach((doc) => {
        usersData.push(doc.data());
      });
      return usersData;
    },
    post: async (payload) => {
      const {
        id,
        email,
        name,
        lastName,
        password,
        coverImage,
        photoURL,
        address,
        birthday,
        age,
        phoneNumber,
        occupation,
        education,
        hobbies,
        socialMedia,
        bio,
      } = payload;
      const auth = getAuth();

      try {
        // Criar o usuário no Firebase Auth
        const userCredential = await createUserWithEmailAndPassword(
          auth,
          email,
          password
        );
        const user = userCredential.user;

        // Atualizar o perfil do usuário com o nome
        await updateProfile(user, { displayName: `${name} ${lastName}` });

        const firestore = getFirestore();
        const usersCollection = collection(firestore, "users");

        // Verificar se o email já está sendo usado por outro usuário
        const emailQuery = query(usersCollection, where("email", "==", email));
        const emailQuerySnapshot = await getDocs(emailQuery);

        if (!emailQuerySnapshot.empty) {
          alert("O email já está sendo usado por outro usuário.");
          window.location.replace("/signup");
          return;
        }
        const userDocRef = await addDoc(usersCollection, {
          id: user.uid,
          email,
          name,
          lastName,
          coverImage: "",
          photoURL: "",
          address: "",
          birthday: "",
          age: "",
          phoneNumber: null,
          occupation: "",
          education: "",
          hobbies: "",
          socialMedia: "",
          bio: "",
          // outros dados que você queira adicionar
        });

        console.log("Usuário criado com sucesso:", userDocRef.id);
        window.location.replace("/");
      } catch (error) {
        alert("Erro ao criar usuário e vincular perfil:", error);
      }
    },
    updateCover: async (userId, updatedData) => {
      try {
        const userDocRef = doc(db, "users", userId);
        await updateDoc(userDocRef, { coverImage: updatedData.coverImage });
      } catch (error) {
        alert("Erro ao atualizar a imagem de capa:", error);
      }
    },
    update: async (userId, updatedData) => {
      try {
        const userDocRef = doc(db, "users", userId);
        await updateDoc(userDocRef, updatedData, { merge: true });
        alert("Usuário atualizado com sucesso!");
      } catch (error) {
        alert("Erro ao atualizar o usuário:", error);
      }
    }
  },
  fallow: {
    add: async (followed, follower) => {
      if (!follower && !followed) return
      try {
        const userDocRef = doc(db, "users", followed);
        await updateDoc(userDocRef, { followers: arrayUnion(follower) });
        console.log("Seguindo com sucesso!");
      } catch (error) {
        alert("Erro ao seguir o usuário: " + error.message);
      }
    },
    unfollow: async (followed, follower) => {
      if (!follower && !followed) return
      try {
        const userDocRef = doc(db, "users", followed);
        await updateDoc(userDocRef, { followers: arrayRemove(follower) });
        console.log("Deixou de seguir com sucesso!");
      } catch (error) {
        alert("Erro ao deixar de seguir o usuário: " + error.message);
      }
    },
    followers: async (followed, follower) => {
      try {
        const userDocRef = doc(db, "users", followed);
        const userSnapshot = await getDoc(userDocRef);
        if (userSnapshot.exists()) {
          const followers = userSnapshot.data().followers;
          return followers.includes(follower);
        }
        return false;
      } catch (error) {
        console.error("Erro ao verificar se o usuário está seguindo:", error);
        return false;
      }
    },
  },
  sendNotificationUser: {
    update: async (userToken) => {
      const messaging = getMessaging();
      const registrationToken = await getToken(messaging);
      try {
        const fcmApiUrl = 'https://fcm.googleapis.com/fcm/send';
        const message = {
          notification: {
            title: 'Novo seguidor!',
            body: 'Você tem um novo seguidor!',
          },
          to: registrationToken,
        };
        const headers = new Headers({
          'Authorization': `key=${userToken}`,
          'Content-Type': 'application/json',
        });
        const options = {
          method: 'POST',
          headers: headers,
          body: JSON.stringify(message),
        };
        const response = await fetch(fcmApiUrl, options);
        const responseData = await response.text();

        if (response.ok) {
          console.log('Notificação enviada com sucesso:', responseData);
        } else {
          console.log('Erro ao enviar notificação:', responseData);
        }
      } catch (error) {
        console.log('Erro ao enviar notificação:', error.message);
      }
    },
  }



}

