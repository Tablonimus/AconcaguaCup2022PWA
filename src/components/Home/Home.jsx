import React from "react";
import Header from "../NavBar/Header";
import NavBar from "../NavBar/NavBar";
import { Link } from "react-router-dom";
import Cronograma from "../Cronograma/Cronograma";
import FootComp from "../Footer/FootComp";
import Carru from "../Carru/Carru";
import bell from "../../assets/images/bell.png";
import Carru2 from "../Carru/Carru2";
import PWAPrompt from "react-ios-pwa-prompt";
import ReactPlayer from "react-player";
import tiktok from "../../assets/images/tiktok.png";
import face from "../../assets/images/face.png";
import insta from "../../assets/images/insta.png";

// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

export default function Home() {
  //   const firebaseConfig = {
  //     apiKey: "AIzaSyC1lGJhal8qgTomc0rV-l6wvUZHux46x-g",
  //     authDomain: "aconcagua-cup-2022.firebaseapp.com",
  //     projectId: "aconcagua-cup-2022",
  //     storageBucket: "aconcagua-cup-2022.appspot.com",
  //     messagingSenderId: "333388205840",
  //     appId: "1:333388205840:web:99b0702ec49f8a99131f95",
  //     measurementId: "G-RLC7RHDQCY"
  //   };
  //   // Initialize Firebase
  // const app = initializeApp(firebaseConfig);
  // const analytics = getAnalytics(app);

  // // app()
  // // analytics()

  return (
    <div className="flex flex-col justify-between gap-5  w-full items-center">
      <NavBar />

      <div className="opacity-100 flex flex-row fixed bottom-5 right-5 lg:bottom-20 lg:right-24 z-30 items-center justify-center bg-[#F6D50E] w-14 h-14 rounded-full shadow-lg border ring ring-blue-500 border-[#14ABD5]">
        <Link to="/notification">
          <button className="rounded-full font-serif">
            <h1 className="text-4xl">🔔</h1>
            {/* <img src={bell} /> */}
          </button>
          <h1 className="absolute text-black top-2 left-5  font-bold text-xl">
            0
          </h1>
        </Link>
      </div>
      <Cronograma />
      <div className="w-full  rounded-lg flex flex-col lg:grid lg:grid-cols-2  justify-center items-center">
        <div className="w-full  bg-[#F6D50E] rounded-b-lg lg:rounded-none  py-2 h-96 flex flex-col">
          <Carru2 />
        </div>

        <div className="w-full bg-[#F6D50E] lg:px-1 py-2 h-96  flex flex-col">
          <Carru />
        </div>
      </div>
      <div className="flex flex-col gap-4 items-center">
        <a href="https://www.tiktok.com/@aconcaguacup">
          <div className="flex flex-row items-center gap-1 hover:bg-gray-200 rounded-full w-56 border p-2">
            <img
              src={tiktok}
              alt=""
              className="w-10 h-10 rounded-full shadow-lg object-cover"
            />
            <span className="font-bold text-xl">@aconcaguacup</span>
          </div>
        </a>
        <a href="https://www.facebook.com/aconcaguacup">
          <div className="flex flex-row items-center gap-1 hover:bg-gray-200 rounded-full w-56 border p-2">
            <img
              src={face}
              alt=""
              className="w-10 h-10 rounded-full shadow-lg object-cover"
            />
            <span className="font-bold text-xl">Aconcagua Cup</span>
          </div>
        </a>
        <a href="https://www.instagram.com/aconcaguacup/">
          <div className="flex flex-row items-center gap-1 hover:bg-gray-200 rounded-full w-56 border p-2">
            <img
              src={insta}
              alt=""
              className="w-10 h-10 rounded-full shadow-lg object-cover"
            />
            <span className="font-bold text-xl">aconcaguacup</span>
          </div>
        </a>
      </div>
      <div className="w-full">
        <Header />
        <FootComp />
      </div>
    </div>
  );
}
