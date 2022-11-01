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

export default function Download() {
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
      icon: "./acbg.png",
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
      <PWAPrompt
        promptOnVisit={1}
        timesToShow={3}
        copyShareButtonLabel="1) Presiona el botón compartir en la esquina superior derecha ↑."
        copyAddHomeButtonLabel="2) Presiona para descargar."
        copyClosePrompt="Mas Tarde"
        copyTitle="Descargar APP"
        copyBody="Agrega a Aconcagua Cup 2022 al menú principal."
        permanentlyHideOnDismiss={false}
      />

      {/* <button className="mt-24 w-20 h-20 bg-red-200" onClick={loguearse}>
        Loguearse
      </button>
      <button className="mt-24 w-20 h-20 bg-red-200" onClick={activateMessages}>
        Generar Token
      </button> */}
      <div className="bg-[#14ABD5] justify-between mt-24 rounded-lg flex flex-col items-center">
        <button
          className="p-5 font-bold bg-[#F6D50E] m-5 rounded-lg shadow-lg"
          onClick={(e) => handlerNotification(e)}
          // onClick={activateMessages}
        >
          🔔 ACTIVAR NOTIFICACIONES 🔔
        </button>
        {!install ? (
          <div className="flex flex-col items-center rounded-lg bg-gray-300 w-96 h-56 m-5 p-5 border justify-center opacity-80 shadow-lg">
            <h1 className="text-black font-bold items-center justify-center">
              {" "}
              Esta aplicación ya esta descargada en su dispositivo.
            </h1>

            <Link to="/home">
              <button className="p-5 font-bold bg-[#14ABD5] rounded-lg shadow-lg">
                Ir al Inicio
              </button>
            </Link>
          </div>
        ) : (
          install && (
            <div className="flex flex-col items-center rounded-lg bg-gray-300 w-96 h-56 m-5 p-5 border justify-center opacity-80 shadow-lg">
              <h1 className="text-black font-bold items-center justify-center">
                {" "}
                Bienvenido a Aconcagua Cup!.
              </h1>
              <button
                className="p-5 font-bold bg-[#14ABD5] rounded-lg shadow-lg"
                onClick={install}
              >
                Instalar Aplicación
              </button>
            </div>
          )
        )}{" "}
      </div>
      <FootComp />
    </div>
  );
}
