import React from "react";
import Header from "../NavBar/Header";
import NavBar from "../NavBar/NavBar";
import header from "../../assets/images/header.png";
import { Link } from "react-router-dom";
import { Tabs } from "flowbite-react";
import Cronograma from "../Cronograma/Cronograma";
import { Carousel } from "flowbite-react";
import FootComp from "../Footer/FootComp";
import Carru from "../Carru/Carru";
import Carru2 from "../Carru/Carru2";
import h1 from "../../assets/images/h1.jpg";
import h2 from "../../assets/images/h2.jpg";
import h3 from "../../assets/images/h3.jpg";
import h4 from "../../assets/images/h4.jpg";
import h5 from "../../assets/images/h5.jpg";
import h6 from "../../assets/images/h6.jpg";
import h7 from "../../assets/images/h7.jpg";
// import Push from "push.js";

export default function Home() {
  // function handlerNotification(e) {
  //   e.preventDefault();
  //   console.log("click");
  //   Push.create("Hello World!");
  // }
  return (
    <div className="flex flex-col justify-between gap-5  w-full items-center">
      <NavBar />
      <Cronograma />
      <div className="w-full  rounded-lg   flex flex-col lg:grid lg:grid-cols-2  justify-center items-center">
        <div className="w-full  bg-[#F6D50E] rounded-b-lg lg:rounded-none  py-2 h-96 flex flex-col">
          {/* <button
            className="w-56 h-56 rounded-lg bg-red-200"
            onClick={(e) => handlerNotification(e)}
          >
            SUSCRIBITE A LAS NOTIFICACIONES
          </button> */}
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
