// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCuaEr130qC2mTtOCzPs4y6Q2SHLjkqC04",
  authDomain: "crwn-db-f9ec7.firebaseapp.com",
  projectId: "crwn-db-f9ec7",
  storageBucket: "crwn-db-f9ec7.appspot.com",
  messagingSenderId: "650192880258",
  appId: "1:650192880258:web:1e3b1c54b39142ef6a6a9b",
  measurementId: "G-WF3YVBPFRR"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters( { prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

