import React from "react";
import NavBar from "../NavBar/NavBar";
import { Link } from "react-router-dom";
import PWAPrompt from "react-ios-pwa-prompt";
import { usePWAInstall } from "react-use-pwa-install";
import Push from "push.js";
import FootComp from "../Footer/FootComp";

export default function Download() {
  const install = usePWAInstall();

  function handlerNotification(e) {
    e.preventDefault();

    Push.create("Las notificaciones fueron activadas con éxito");
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
      <div className="bg-[#14ABD5] justify-center mt-24 rounded-lg flex flex-col items-center">
        <button
          className="p-5 font-bold bg-[#F6D50E] m-5 rounded-lg shadow-lg"
          onClick={(e) => handlerNotification(e)}
        >
          🔔 ACTIVAR NOTIFICACIONES 🔔
        </button>
        {!install || install === false ? (
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
