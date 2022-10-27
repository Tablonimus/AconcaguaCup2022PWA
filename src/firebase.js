// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getMessaging } from "firebase/messaging";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCitulbO-Gxas-WCAa54GiYf6InDx4-2BE",
  authDomain: "aconcagua-cup.firebaseapp.com",
  projectId: "aconcagua-cup",
  storageBucket: "aconcagua-cup.appspot.com",
  messagingSenderId: "550092202775",
  appId: "1:550092202775:web:329dbf31b47e18f7674d52",
  measurementId: "G-QS5ST4WPVP",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const messaging = getMessaging(app);
