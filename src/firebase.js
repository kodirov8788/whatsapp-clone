import firebase from "firebase"

const firebaseConfig = {
    apiKey: "AIzaSyBNxOFdfAMfOMKtEMRrOWOj13p6mb20wWk",
    authDomain: "what-s-app-clone-30baf.firebaseapp.com",
    projectId: "what-s-app-clone-30baf",
    storageBucket: "what-s-app-clone-30baf.appspot.com",
    messagingSenderId: "897978862286",
    appId: "1:897978862286:web:bf0529e9b588cf6c6ade9f",
    measurementId: "G-NGYH6JPPVF"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();
  
  export {auth, provider};
  export default db;