// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyCcEirtCgisZhw6x4cB9kw-iU174F4Yens",
  authDomain: "gift-list-10c6a.firebaseapp.com",
  projectId: "gift-list-10c6a",
  storageBucket: "gift-list-10c6a.appspot.com",
  messagingSenderId: "417413378830",
  appId: "1:417413378830:web:c9b7449094b19558ee5d5f",
  measurementId: "G-Q8DF85Q0BV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firebaseDb = getDatabase(app);

export { firebaseDb };