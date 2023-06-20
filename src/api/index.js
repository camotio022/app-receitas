import {
  Firestore,
  addDoc,
  arrayUnion,
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  query,
  setDoc,
  where,
} from "firebase/firestore";
import { db } from "../../firebase.config";
import { User } from "./entities/User.jsx";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

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
      return ("users");
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
    post: async (payload) => {
      const {
        id,
        recipeTitle,
        recipeDescription,
        ingredients,
        modPreps,
        prepTime,
        cookTime,
        servingSize,
        recipeCategory,
        recipeDifficulty,
        recipeImage,
        cookingTips,
        calories,
        carbs,
        protein,
        fat,
        sod,
        gord,
        author,
        creationDate,
        ranking,
        name,
        email,
        country,
        commentsCounter,
        starsLikedCounter
      } = payload;
      if (id) {
        return;
      }
      const docRef = await addDoc(collection(db, "recipes"), {
        recipeTitle,
        recipeDescription,
        ingredients,
        modPreps,
        prepTime,
        cookTime,
        servingSize,
        recipeCategory,
        recipeDifficulty,
        recipeImage,
        cookingTips,
        calories,
        carbs,
        protein,
        fat,
        sod,
        gord,
        ranking,
        commentsCounter: 0,
        starsLikedCounter: 0,
        author,
        creationDate,
        name,
        email,
        country,
      });
      // criar um usuario no firebase utilizando email name
    },
  },
  ingredientes: {
    get: async (id) => {
      if (id) {
        const receitaRef = doc(db, 'recipes', id);
        const ingredientesRef = collection(receitaRef, 'ingredientes');
        const ingredientesQuery = query(ingredientesRef);
        const ingredientesSnapshot = await getDocs(ingredientesQuery);
        if (!ingredientesSnapshot.empty) {
          const ingredientesData = ingredientesSnapshot.docs.map((doc) => doc.data());
          return ingredientesData;
        } else {
          // Trate o caso em que não há ingredientes
        }
      }

    }
  },
  modopreparo: {
    get: async (id) => {
      if (id) {
        const receitaRef = doc(db, 'recipes', id);
        const ingredientesRef = collection(receitaRef, 'mododepreparo');
        const ingredientesQuery = query(ingredientesRef);
        const ingredientesSnapshot = await getDocs(ingredientesQuery);
        if (!ingredientesSnapshot.empty) {
          const ingredientesData = ingredientesSnapshot.docs.map((doc) => doc.data());
          return ingredientesData;
        } else {
          // Trate o caso em que não há ingredientes
        }
      }

    }
  },


  myRecipes: {
    get: async (authorId) => {
      if (authorId) {
        try {
          const recipesRef = collection(db, 'recipes');
          const q = query(recipesRef, where('authorId', '==', authorId));
          const snapshot = await getDocs(q);
          const recipes = [];
          snapshot.forEach((doc) => {
            const recipe = doc.data();
            recipe.id = doc.id; // Adicionar a propriedade "id" ao objeto da receita
            recipes.push(recipe);
          });
          return recipes;
        } catch (error) {
          console.error('Erro ao buscar as receitas:', error);
          return []; // Retorna uma lista vazia em caso de erro
        }
      } else {
        return []; // Retorna uma lista vazia se o ID do autor não for fornecido
      }
    },
    delete: async (recipeId) => {
      if (recipeId) {
        try {
          await deleteDoc(doc(db, 'recipes', recipeId));
          console.log('Receita deletada com sucesso');
          // Faça algo após deletar a receita, se necessário
        } catch (error) {
          console.error('Erro ao deletar a receita:', error);
          // Trate o erro adequadamente
        }
      }
    }
  },
  favoriteRecipes: {

  }
};
