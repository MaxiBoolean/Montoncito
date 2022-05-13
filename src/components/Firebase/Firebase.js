// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBbvnrfUBsUFfkHfo-WHz-siHN8UpUXueU",
  authDomain: "montoncito-crilzo.firebaseapp.com",
  projectId: "montoncito-crilzo",
  storageBucket: "montoncito-crilzo.appspot.com",
  messagingSenderId: "896985417440",
  appId: "1:896985417440:web:25d7b51ad6c4dea6cbf285",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
