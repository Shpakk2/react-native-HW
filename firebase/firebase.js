// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";
import "firebase/compat/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB3hvbE45PikqCUjAx1qEKK_OSzesgl3Do",
  authDomain: "react-native-hw-3c288.firebaseapp.com",
  projectId: "react-native-hw-3c288",
  storageBucket: "react-native-hw-3c288.appspot.com",
  messagingSenderId: "1099491782221",
  appId: "1:1099491782221:web:9574d4488731af7d137604",
  measurementId: "G-L17LPMZN51"
};

// Initialize Firebase

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();
const storage = firebase.storage();

export { auth, db, storage };