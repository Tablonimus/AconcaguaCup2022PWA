import React from "react";
import { Link } from "react-router-dom";
import { Carousel } from "flowbite-react";
// import h1 from "../../assets/images/h1.jpg";
// import h2 from "../../assets/images/h2.jpg";
// import h3 from "../../assets/images/h3.jpg";
import h1 from "../../assets/images/h1.jpg";

import h6 from "../../assets/images/h6.jpg";
import h8 from "../../assets/images/h8.jpg";
import h9 from "../../assets/images/h9.jpg";
import h11 from "../../assets/images/h11.jpg";
import h10 from "../../assets/images/h10.jpg";
import h12 from "../../assets/images/h12.jpg";

export default function Carru2() {
  return (
    <Carousel indicators={true} slide={true} slideInterval={4000}>
      <a
        href="https://www.facebook.com/media/set/?set=a.539082708233141&type=3"
        target="_blank"
        className="object-cover flex rounded-lg flex flex-col items-center"
      >
        <h1 className="text-md font-bold mt-10">
          10/11 - Jornada Deportiva - Día 1-Album 2 ▶
        </h1>
        <img src={h12} alt="..." className="object-cover rounded-lg h-96" />
      </a>
      <a
        href="https://www.facebook.com/media/set/?set=a.538752278266184&type=3"
        target="_blank"
        className="object-cover flex rounded-lg flex flex-col items-center"
      >
        <h1 className="text-md font-bold mt-10">
          10/11 - Jornada Deportiva - Día 1-Album 1 ▶
        </h1>
        <img src={h10} alt="..." className="object-cover rounded-lg h-96" />
      </a>
      <a
        href="https://www.facebook.com/media/set/?set=a.538028565005222&type=3"
        target="_blank"
        className="object-cover flex rounded-lg flex flex-col items-center"
      >
        <h1 className="text-md font-bold mt-10">
          09/11 - Visita al Malvinas | 2°Edición ▶
        </h1>
        <img src={h11} alt="..." className="object-cover rounded-lg h-96" />
      </a>
      <a
        href="https://www.instagram.com/p/CkjFnpMJNFA/"
        target="_blank"
        className="object-cover flex rounded-lg flex flex-col items-center"
      >
        <h1 className="text-md font-bold mt-10">
          06/11 - Despedida en "Aguas del Pizarro" ▶
        </h1>
        <img src={h9} alt="..." className="object-cover rounded-lg h-96" />
      </a>
      <a
        href="https://www.instagram.com/p/CkjFnpMJNFA/"
        target="_blank"
        className="object-cover flex rounded-lg flex flex-col items-center"
      >
        <h1 className="text-md font-bold mt-10">05/11 - Aconcagualandia ▶</h1>
        <img src={h8} alt="..." className="object-cover rounded-lg h-96" />
      </a>
      <a
        href="https://www.instagram.com/p/CkjFnpMJNFA/"
        target="_blank"
        className="object-cover flex rounded-lg flex flex-col items-center"
      >
        <h1 className="text-md font-bold mt-10">Lo que dejó la fecha uno ▶</h1>
        <img src={h6} alt="..." className="object-cover rounded-lg h-96" />
      </a>
      <a
        href="https://www.instagram.com/reel/CkgMcgMJXD4/?igshid=YmMyMTA2M2Y%3D"
        target="_blank"
        className="object-cover flex rounded-lg flex flex-col items-center"
      >
        <h1 className="text-md font-bold mt-10">
          Te mostramos como fue la ceremonia del Miercoles 02/11▶
        </h1>
        <img src={h1} alt="..." className="object-cover rounded-lg h-96" />
      </a>
    </Carousel>
  );
}
