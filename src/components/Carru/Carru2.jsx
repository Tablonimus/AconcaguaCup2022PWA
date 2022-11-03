import React from "react";
import { Link } from "react-router-dom";
import { Carousel } from "flowbite-react";
// import h1 from "../../assets/images/h1.jpg";
// import h2 from "../../assets/images/h2.jpg";
// import h3 from "../../assets/images/h3.jpg";
import h1 from "../../assets/images/h1.jpg";
import h5 from "../../assets/images/h5.jpg";
import h6 from "../../assets/images/h6.jpg";
import h7 from "../../assets/images/h7.jpg";

export default function Carru2() {
  return (
    <Carousel indicators={false} slide={false}>
      {/* <img src={h4} alt="..." className="object-cover rounded-lg h-96" /> */}
      {/* <img src={h5} alt="..." className="object-cover rounded-lg h-96" /> */}
      {/* <img src={h6} alt="..." className="object-cover rounded-lg h-96" /> */}
      <a
        href="https://www.instagram.com/reel/CkgMcgMJXD4/?igshid=YmMyMTA2M2Y%3D"
        target="_blank"
        className="object-cover flex rounded-lg flex flex-col items-center"
      >
        <h1 className="text-md font-bold mt-10">
         Te mostramos como fue la ceremonia del Miercoles▶
        </h1>
        <img src={h1} alt="..." className="object-cover rounded-lg h-96" />
      </a>
    </Carousel>
  );
}
