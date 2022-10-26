// Import the functions you need from the SDKs you need
// import firebase from "firebase";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getMessaging } from "firebase/messaging"; //
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC1lGJhal8qgTomc0rV-l6wvUZHux46x-g",
  authDomain: "aconcagua-cup-2022.firebaseapp.com",
  projectId: "aconcagua-cup-2022",
  storageBucket: "aconcagua-cup-2022.appspot.com",
  messagingSenderId: "333388205840",
  appId: "1:333388205840:web:99b0702ec49f8a99131f95",
  measurementId: "G-RLC7RHDQCY",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);

// Initialize Firebase Cloud Messaging and get a reference to the service
const messaging = getMessaging(app);
// Add the public key generated from the console here.
messaging.getToken({
  vapidKey:
    "BPGOHol8olZDPHqQy3NNlI43ij0QCA5Ev0su-aSHjmcWnw8iySmUKy3rWg9Z8dLR7BF0IB41v6yVnr4jOXV3l10",
});
