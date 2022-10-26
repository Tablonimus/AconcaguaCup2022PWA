import React, { useEffect, useState } from "react";
import NavBar from "../NavBar/NavBar";
import PWAPrompt from "react-ios-pwa-prompt";

export default function Download() {
  // const [supportsPWA, setSupportsPWA] = useState(false);
  // const [promptInstall, setPromptInstall] = useState(null);

  // useEffect(() => {
  //   const handler = (e) => {
  //     e.preventDefault();
  //     console.log("we are being triggered :D");
  //     setSupportsPWA(true);
  //     setPromptInstall(e);
  //   };
  //   window.addEventListener("beforeinstallprompt", handler);

  //   return () => window.removeEventListener("transitionend", handler);
  // }, []);

  // const onClick = (evt) => {
  //   evt.preventDefault();
  //   if (!promptInstall) {
  //     return;
  //   }
  //   promptInstall.prompt();
  // };
  // if (!supportsPWA) {
  //   return null;
  // }
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
    </div>
    // <button
    //   className="w-96 h-96"
    //   id="setup_button"
    //   aria-label="Install app"
    //   title="Install app"
    //   onClick={onClick}
    // >
    //   Install
    // </button>
  );
}
