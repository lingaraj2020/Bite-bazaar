// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth"

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDuGeHgAokCwBtCCPXI9gXBN0XQIH5ER-Y",
  authDomain: "food-hub-d63ce.firebaseapp.com",
  projectId: "food-hub-d63ce",
  storageBucket: "food-hub-d63ce.appspot.com",
  messagingSenderId: "148765591441",
  appId: "1:148765591441:web:e738f994d1b4bfba2dfc30",
  measurementId: "G-CZYS074L67"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();