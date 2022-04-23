// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCTXteNK20Mt7PFZ_sLBersG-WfzNeu134",
  authDomain: "authentication-adea4.firebaseapp.com",
  projectId: "authentication-adea4",
  storageBucket: "authentication-adea4.appspot.com",
  messagingSenderId: "942999226971",
  appId: "1:942999226971:web:2f273dc8a8dfa3e7768d7e",
  measurementId: "G-31LGE3WWB3"
};

// Initialize Firebase
export const app = initializeApp
(firebaseConfig);
export const db = getFirestore(app)
const analytics = getAnalytics(app);