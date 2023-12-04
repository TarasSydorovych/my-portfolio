import { initializeApp } from "firebase/app";

import { GoogleAuthProvider, FacebookAuthProvider } from "firebase/auth";
import { getAuth } from "firebase/auth";
import { OAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
export const firebaseConfig = {
  apiKey: "AIzaSyAWSngYiBJ45sNkPGiDIulp7yyytJt0l_g",
  authDomain: "webui-f781c.firebaseapp.com",
  projectId: "webui-f781c",
  storageBucket: "webui-f781c.appspot.com",
  messagingSenderId: "432355498798",
  appId: "1:432355498798:web:d04149dc3c40af8456f8bf",
  measurementId: "G-SQ8YPTQE4X",
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const facebookProvider = new FacebookAuthProvider();
export const appleProvider = new OAuthProvider("apple.com");
export const googleAuthProvider = new GoogleAuthProvider();
export const auth = getAuth(app);
