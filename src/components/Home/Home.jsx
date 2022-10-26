import React from "react";
import Header from "../NavBar/Header";
import NavBar from "../NavBar/NavBar";

import Cronograma from "../Cronograma/Cronograma";

import FootComp from "../Footer/FootComp";
import Carru from "../Carru/Carru";
import Carru2 from "../Carru/Carru2";

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
      <Cronograma />
      <div className="w-full  rounded-lg   flex flex-col lg:grid lg:grid-cols-2  justify-center items-center">
        <div className="w-full  bg-[#F6D50E] rounded-b-lg lg:rounded-none  py-2 h-96 flex flex-col">
          <Carru2 />
        </div>

        <div className="w-full bg-[#F6D50E] lg:px-1 py-2 h-96  flex flex-col">
          <Carru />
        </div>
      </div>
      <div className="w-full">
        <Header />
        <FootComp />
      </div>
    </div>
  );
}
