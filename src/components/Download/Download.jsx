import React, { useEffect, useState } from "react";
import NavBar from "../NavBar/NavBar";
import { Link } from "react-router-dom";
import PWAPrompt from "react-ios-pwa-prompt";
import { usePWAInstall } from "react-use-pwa-install";

export default function Download() {
  const install = usePWAInstall();

  return (
    <div className="flex flex-col justify-between gap-5  w-full items-center">
      <NavBar />
      <PWAPrompt
        promptOnVisit={1}
        timesToShow={3}
        copyShareButtonLabel="1) Presiona el botón compartir."
        copyAddHomeButtonLabel="2) Presiona para descargar."
        copyClosePrompt="Mas Tarde"
        copyTitle="Descargar APP"
        copyBody="Agrega a Aconcagua Cup 2022 al menú principal."
        permanentlyHideOnDismiss={false}
      />
      <div>
        <h1>My app</h1>
        {!install ? (
         
         <Link to="/home"><button
            className="p-5 font-bold mt-96 bg-[#14ABD5] rounded-lg"
          
          >
            Esta aplicación ya esta descargada en su dispositivo{" "}
          </button>
          </Link>
        ) : (
          install && (
            <button
              className="w-24 font-bold h-24 mt-96 bg-[#14ABD5] rounded-lg shadow-lg"
              onClick={install}
            >
              Instalar Aplicación
            </button>
          )
        )}{" "}
      </div>
    </div>
  );
}
