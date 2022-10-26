import React, { useEffect, useState } from "react";

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
    <div className="bg-red-500 h-screen w-screen">DIV DE LA VERDAD</div>
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
