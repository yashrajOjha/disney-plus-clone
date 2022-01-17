import firebase from "firebase";

// import { initializeApp, getApp, getApps } from 'firebase/app'
// import { getFirestore } from 'firebase/firestore'
// import { getStorage } from 'firebase/storage'
// import { getAuth, GoogleAuthProvider } from 'firebase/auth'

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
const storage = firebase.storage();

export { auth, provider, storage };
export default db;

// const firebaseApp = !getApps().length ? initializeApp(firebaseConfig) : getApp()
// const db = getFirestore();
// const auth = getAuth();
// const provider = new GoogleAuthProvider();
// const storage= getStorage();


// export {auth, provider, storage};
// export default db;