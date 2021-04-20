import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyARqrfhJs31-6CD507y6Cpns9bz2Bia6lM",
  authDomain: "whatsapp-clone-359d7.firebaseapp.com",
  projectId: "whatsapp-clone-359d7",
  storageBucket: "whatsapp-clone-359d7.appspot.com",
  messagingSenderId: "503283276316",
  appId: "1:503283276316:web:488afcaf895434170c1dd9",
  measurementId: "G-9QQ4MNM0TJ",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
