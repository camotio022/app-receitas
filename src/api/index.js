import {
  addDoc,
  collection,
  doc,
  getDoc,
  getDocs,
  setDoc,
} from "firebase/firestore";
import { db } from "../../firebase.config";
import { User } from "./entities/User.jsx";

/*

    user/ GET - listar todos os usuarios
    user/ POST - criar um usuario
    user/:id GET - ver detalhe do usuario
     user/:id POST - alterar dados do usuario


    recipe/ GET - listar todos as receitas
    recipe/ POST - criar uma receita
    recipe/:id GET - ver detalhe da receita
    

*/

//payload - dados transmitidos na requisição

const getCollection = async (collectionPath) => {
  const collectionSnap = await getDocs(collection(db, collectionPath));
  const collectionList = [];
  collectionSnap.forEach((doc) => {
    collectionList.push({ ...doc.data(), id: doc.id });
  });

  return collectionList;
};


export const api = {
  user: {
    get: async (id) => {
      if (id) {
        const docSnap = await getDoc(doc(db, "users", id));
        if (docSnap.exists()) {
          return docSnap.data();
        } else {
          // doc.data() will be undefined in this case
          console.log("No such document!");
        }
        return {};
      }
      return getCollection("users");
    },
    post: async (payload) => {
      const { id, email, name, lastName, password } = payload;
      if (id) {
        //
        return;
      }

      //   const newUser = new User({ email, name });
      const docRef = await addDoc(collection(db, "users"), { email, name, lastName, password });
      // criar um usuario no firebase utilizando email name
    },
  },
  ingredient: {},
  recipe: {
    get: async (id) => {
      if (id) {
        const docRef = doc(db, "recipes", id);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          return docSnap.data();
        } else {
          // doc.data() will be undefined in this case
          console.log("No such document!");
        }
        return {};
      }

      return getCollection("recipes");
    },
  },
};
