import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider,FacebookAuthProvider} from 'firebase/auth'
import { getFirestore } from 'firebase/firestore';
const firebaseConfig = {
  apiKey: "AIzaSyAtuD41vJd45H8tk9YqdvmwzqQegIaeVUc",
  authDomain: "thuctapapi.firebaseapp.com",
  projectId: "thuctapapi",
  storageBucket: "thuctapapi.appspot.com",
  messagingSenderId: "880936347136",
  appId: "1:880936347136:web:9c3960864b59fe8e6c9ae5",
  measurementId: "G-GER57F1LEG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)
export const db = getFirestore(app)
export const provider = new GoogleAuthProvider();
export const fbprovider = new FacebookAuthProvider();