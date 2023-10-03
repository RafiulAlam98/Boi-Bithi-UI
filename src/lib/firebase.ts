import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDg7q25DsISXMAOPFZWrjg2CjTgyWEpThg",
  authDomain: "book-catalogue-ab5b3.firebaseapp.com",
  projectId: "book-catalogue-ab5b3",
  storageBucket: "book-catalogue-ab5b3.appspot.com",
  messagingSenderId: "370587024210",
  appId: "1:370587024210:web:365161537ba4ff336b188b",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
