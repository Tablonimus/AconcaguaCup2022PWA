import React from "react";
import { Link } from "react-router-dom";
import { Carousel } from "flowbite-react";

import h2 from "../../assets/images/h2.jpg";
import h3 from "../../assets/images/h3.jpg";
import h4 from "../../assets/images/h4.jpg";
import h5 from "../../assets/images/h5.jpg";

import h7 from "../../assets/images/h7.jpg";

export default function Carru() {
  return (
    <Carousel>
      <a
        href="https://www.facebook.com/media/set/?set=a.534783745329704&type=3"
        target="_blank"
        className="object-cover flex rounded-lg flex flex-col items-center"
      >
        <h1 className="text-md font-bold mt-10">05/11 - Finales ▶</h1>
        <img src={h5} alt="..." className="object-cover rounded-lg h-96" />
      </a>
      <a
        href="https://www.facebook.com/media/set/?set=a.534785245329554&type=3"
        target="_blank"
        className="object-cover flex rounded-lg flex flex-col items-center"
      >
        <h1 className="text-md font-bold mt-10">
          04/11 - Visita a "Fabrica Chocolezza"▶
        </h1>
        <img src={h2} alt="..." className="object-cover rounded-lg h-96" />
      </a>
      <a
        href="https://www.facebook.com/media/set/?set=a.534428192031926&type=3"
        target="_blank"
        className="object-cover flex rounded-lg flex flex-col items-center"
      >
        <h1 className="text-md font-bold mt-10">
          03/11 - Album de fotos de la primera fecha!▶
        </h1>
        <img src={h3} alt="..." className="object-cover rounded-lg h-96" />
      </a>
      <a
        href="https://www.facebook.com/media/set?vanity=aconcaguacup&set=a.533033215504757"
        target="_blank"
        className="object-cover flex rounded-lg flex flex-col items-center"
      >
        <h1 className="text-md font-bold mt-10">
          02/11 - Visitá el album de fotos de la primera jornada!▶
        </h1>
        <img src={h7} alt="..." className="object-cover rounded-lg h-96" />
      </a>
      <a
        href="https://www.instagram.com/p/CkgVi9NrfcW/?igshid=YmMyMTA2M2Y%3D"
        target="_blank"
        className="object-cover flex rounded-lg flex flex-col items-center"
      >
        <h1 className="text-md font-bold mt-10">
          Mirá las fotos de Instagram! ▶
        </h1>
        <img src={h4} alt="..." className="object-cover rounded-lg h-96" />
      </a>
    </Carousel>
  );
}
