import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
const firebaseConfig = {
    apiKey: "AIzaSyDyc76MXss7p4Fz68hXyk00J0OSulNCBx4",
    authDomain: "streamdeck-70913.firebaseapp.com",
    projectId: "streamdeck-70913",
    storageBucket: "streamdeck-70913.firebasestorage.app",
    messagingSenderId: "741974189306",
    appId: "1:741974189306:web:2bca1fc2ded8ad8e04d543"
  };

  const app = initializeApp(firebaseConfig);

  // Export Firebase Authentication and Google Provider
  const auth = getAuth(app);
  const provider = new GoogleAuthProvider();
  
  export { auth, provider, signInWithPopup };