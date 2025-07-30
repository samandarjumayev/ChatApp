// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDfdOFYgoOQAU0wja9x8z3a74JxfP6WMPk",
  authDomain: "chatapp-fe0fa.firebaseapp.com",
  projectId: "chatapp-fe0fa",
  storageBucket: "chatapp-fe0fa.firebasestorage.app",
  messagingSenderId: "301971592258",
  appId: "1:301971592258:web:06fdc1e42751d525e0c9db"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);