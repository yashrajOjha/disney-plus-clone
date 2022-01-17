// Import the functions you need from the SDKs you need
import firebase from "firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB7SB8exCrmApUj9Ih8R6spSSOYTGC6PUM",
  authDomain: "disney-plus-database.firebaseapp.com",
  projectId: "disney-plus-database",
  storageBucket: "disney-plus-database.appspot.com",
  messagingSenderId: "297816909768",
  appId: "1:297816909768:web:410ece7a350602a788c2fd",
  measurementId: "G-M95WMP19JX"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage= firebase.storage();


export {auth, provider, storage};
export default db;