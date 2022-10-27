importScripts("https://www.gstatic.com/firebasejs/9.12.1/firebase-app-compat.js"); //agregar -compat.js si no anda
importScripts(
  "https://www.gstatic.com/firebasejs/9.12.1/firebase-messaging-compat.js"
); //agregar -compat.js si no anda

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
const app = firebase.initializeApp(firebaseConfig);

const messaging = firebase.messaging(app);

messaging.onBackgroundMessage((payload) => {
  console.log("recibiste un mensaje estando ausente");
  //previo a mostrar notificaciones
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: "/favicon.png",
  };

  return self.registration.showNotification(
    notificationTitle,
    notificationOptions
  );
});
