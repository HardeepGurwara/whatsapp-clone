// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyAunbVdYbm3Ye7s0qLqFtVTW3PkjxFN40E",
  authDomain: "whatsapp-clone-44aa5.firebaseapp.com",
  databaseURL: "https://whatsapp-clone-44aa5.firebaseio.com",
  projectId: "whatsapp-clone-44aa5",
  storageBucket: "whatsapp-clone-44aa5.appspot.com",
  messagingSenderId: "975672177154",
  appId: "1:975672177154:web:11f68a50e50c2641c12d1b",
  measurementId: "G-JM08695M20",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
