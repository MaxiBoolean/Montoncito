import { initializeApp } from "firebase/app";

import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBbvnrfUBsUFfkHfo-WHz-siHN8UpUXueU",
  authDomain: "montoncito-crilzo.firebaseapp.com",
  projectId: "montoncito-crilzo",
  storageBucket: "montoncito-crilzo.appspot.com",
  messagingSenderId: "896985417440",
  appId: "1:896985417440:web:25d7b51ad6c4dea6cbf285",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
