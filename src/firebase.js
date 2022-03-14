import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDVul6nqUBiC-1ovcPY_s2B1w9VnISzeOc",
    authDomain: "ecommerce-f6a69.firebaseapp.com",
    projectId: "ecommerce-f6a69",
    storageBucket: "ecommerce-f6a69.appspot.com",
    messagingSenderId: "731266165823",
    appId: "1:731266165823:web:da1bc67e452cb1d7dd1c8a",
    measurementId: "G-1XRBRXX4LE"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();

  const auth = firebase.auth();

  export {auth, db};