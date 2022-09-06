// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"


const firebaseConfig = {
  apiKey: "AIzaSyDKRzvRSdq7Lng23ens5ZCCP03jZqgDYuc",
  authDomain: "shelter-mart-707eb.firebaseapp.com",
  projectId: "shelter-mart-707eb",
  storageBucket: "shelter-mart-707eb.appspot.com",
  messagingSenderId: "398717609887",
  appId: "1:398717609887:web:b911ef7eff21a24b417faa"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore() 