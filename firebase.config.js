import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAnalytics } from 'firebase/analytics'
import { getMessaging } from 'firebase/messaging/sw';

const firebaseConfig = {
  apiKey: "AIzaSyDm3Zl3eFWzhYwcZR4WQfn22fMX4fMYaYU",
  authDomain: "appreceitas-3daf2.firebaseapp.com",
  databaseURL: "https://appreceitas-3daf2-default-rtdb.firebaseio.com",
  projectId: "appreceitas-3daf2",
  storageBucket: "appreceitas-3daf2.appspot.com",
  messagingSenderId: "821625533576",
  appId: "1:821625533576:web:f807658e7d61b45fa11b3d",
  measurementId: "G-FEGL9G9FXQ",
  serviceWorkerRegistration: {
    updateUnregistration: true,
    url: '/firebase-messaging-sw.js',
  },
};
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const messaging = getMessaging(app);
const analytics = getAnalytics(app);
export { db, messaging, analytics };