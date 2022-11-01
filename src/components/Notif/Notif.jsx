import React from "react";
import NavBar from "../NavBar/NavBar";
import { Link } from "react-router-dom";
import PWAPrompt from "react-ios-pwa-prompt";
import { usePWAInstall } from "react-use-pwa-install";
import Push from "push.js";
import FootComp from "../Footer/FootComp";

import { getAuth, signInAnonymously } from "firebase/auth";
import { getToken, onMessage } from "firebase/messaging";
import { messaging } from "../../firebase";
import { ToastContainer, toast } from "react-toastify";

import { useEffect } from "react";

export default function Notif() {
  const loguearse = () => {
    signInAnonymously(getAuth()).then((usuario) => console.log(usuario));
  };

  const activateMessages = async () => {
    const token = await getToken(messaging, {
      vapidKey:
        "BF_yiFPJrWPiEClx5M83PzDpejdtnt8Zmaa4lzyMF2OMmt6B2Fv4Gq5j4hKkBsHIrxjmYEglRDy8fLYEyYqbVmY",
    }).catch((error) => console.log("Tuviste un error al generar el token"));

    if (token) console.log("el token", token);
    if (!token) console.log("el token no esta");
  };

  useEffect(() => {
    onMessage(messaging, (message) => {
      console.log("tu mensaje: ,", message);
      toast(message.notification.title);
    });
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      loguearse();
    }, 1000);
    return () => clearTimeout(timer);
  }, []);
  useEffect(() => {
    const timer = setTimeout(() => {
      activateMessages();
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  const install = usePWAInstall();

  async function handlerNotification(e) {
    e.preventDefault();

    Push.create("Bienvenido a Aconcagua Cup!", {
      body: "Las notificaciones fueron activadas correctamente!",
      icon: "./favicon.png",
      timeout: 4000,
      onClick: function () {
        window.focus();
        this.close();
      },
    });
  }

  return (
    <div className="flex flex-col justify-between h-screen w-full items-center">
      <NavBar />

      <div className="bg-gray-200 mt-24 justify-around items-center rounded-lg flex flex-col items-center w-3/4 h-1/2">

        <div className="rounded-lg ring p-5 m-2">
          <h5 className="font-bold">17:40 - Notificación para exequiel</h5>
        </div>
        <div className="rounded-lg ring p-5 m-2">
          <h5 className="font-bold">18:00 - Reunion con Ariel</h5>
        </div>
      </div>
      <button
        className="p-5 fixed bottom-20 font-bold bg-[#F6D50E] m-5 rounded-lg shadow-lg"
        onClick={(e) => handlerNotification(e)}
        // onClick={activateMessages}
      >
        🔔 ACTIVAR NOTIFICACIONES 🔔
      </button>
      <FootComp />
    </div>
  );
}
