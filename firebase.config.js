// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyBjjWcfY3cJCbsT2Wz4X9ssR3Q2TwJFNtM",
//   authDomain: "app-receitas-eeb07.firebaseapp.com",
//   projectId: "app-receitas-eeb07",
//   storageBucket: "app-receitas-eeb07.appspot.com",
//   messagingSenderId: "218372002302",
//   appId: "1:218372002302:web:d90cdca554af13cc84b0af",
//   measurementId: "G-8S6ECJJ18E"
// };
const firebaseConfig = {
  apiKey: "AIzaSyDfBNYAWvhKlpz9WxABBqW_z2ch8jZsEnU",
  authDomain: "receitas-93bb5.firebaseapp.com",
  projectId: "receitas-93bb5",
  storageBucket: "receitas-93bb5.appspot.com",
  messagingSenderId: "869306952623",
  appId: "1:869306952623:web:14eb49598d534d3c0add5a",
  measurementId: "G-HSHNXEK645"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
const analytics = getAnalytics(app);