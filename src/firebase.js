// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"

import { getAuth,GoogleAuthProvider } from "firebase/auth";
const firebaseConfig = {
    apiKey: import.meta.env.VITE_REACT_APP_KEY,
    authDomain: import.meta.env.VITE_REACT_AUTHDOMAIN,
    projectId: import.meta.env.VITE_REACT_PROJECT_ID,
    storageBucket: import.meta.env.VITE_REACT_STORAGE_BUCKET,
    messagingSenderId: import.meta.env.VITE_REACT_SENDER_ID,
    appId: import.meta.env.VITE_REACT_APP_ID
  };
  

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db=getFirestore(app)

const auth=getAuth(app)
const provider=new GoogleAuthProvider()
export {app,provider,auth ,db}
