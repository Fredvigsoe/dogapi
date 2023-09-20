// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCdFOiaoiihLxxfWDUC1qSC1E9wW_3aWXM",
  authDomain: "dogapi-d7071.firebaseapp.com",
  projectId: "dogapi-d7071",
  storageBucket: "dogapi-d7071.appspot.com",
  messagingSenderId: "926867967680",
  appId: "1:926867967680:web:bc77c3be95a454a62e6725"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
