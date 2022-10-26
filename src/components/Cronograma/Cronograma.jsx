import React from "react";
import NavBar from "../NavBar/NavBar";
import { Tabs } from "flowbite-react";
import { Link } from "react-router-dom";
import map from "../../assets/images/map.png";

export default function Cronograma() {
  return (
    <div className="bg-white flex mb-3 mt-24 flex-col w-full  items-center rounded-b-lg">
      <h5 className="font-bold text-black">Cronogramacronograma</h5>
      <Tabs.Group aria-label="Tabs with icons" style="underline">
        <Tabs.Item
          title="Mie 02/11"
          /*  icon={HiUserCircle} */
        >
          <div className="flex flex-col items-center">
            {/* Hace Click en el evento para conocer la ubicación */}
            <div className="flex flex-col items-center border-y border-[#14ABD5]">
              <h5 className="font-bold">08:30hs a 11:00hs</h5>
              <h5>
                Entrega de Acreditaciones en "Estadio Malvinas Argentinas"
              </h5>
              <a
                target="_blank"
                href="https://www.google.com/maps/place/Estadio+Malvinas+Argentinas/@-32.8896642,-68.8800956,15z/data=!4m2!3m1!1s0x0:0x684a90ae779e7723?sa=X&ved=2ahUKEwiCmd2Uo_X6AhWhQ7gEHS7oCt8Q_BJ6BAhHEAU"
              >
                <div className="flex items-center mb-2 ">
                  <img src={map} alt="" className="w-5 rounded-full" />
                  <h5 className=" text-sm font-semibold border-b border-[#14ABD5]">
                    "Ver en el mapa"
                  </h5>
                </div>
              </a>
            </div>
            <div className="flex flex-col items-center border-y border-[#14ABD5]">
              <h5 className="font-bold">08:30hs a 11:00hs:</h5>
              <h5>20:00hs a 22:00hs: Acto inaugural en "Banco Rugby Club"</h5>
              <a
                target="_blank"
                href="https://www.google.com/maps/place/Banco+Rugby+Club/@-32.8892743,-68.7501503,15z/data=!4m5!3m4!1s0x0:0x9f2dad5ed9be76e7!8m2!3d-32.8892743!4d-68.7501503"
              >
                <div className="flex items-center mb-2">
                  <img src={map} alt="" className="w-5" />
                  <h5 className=" text-sm font-semibold border-b border-[#14ABD5]">
                    "Ver en el mapa"
                  </h5>
                </div>
              </a>
            </div>
          </div>
        </Tabs.Item>
        <Tabs.Item
          // active={true}
          title="Jue 03/11"
          /*  icon={MdDashboard} */
        >
          <div className="flex flex-col items-center">
            {/* Hace Click en el evento para conocer la ubicación */}
            <div className="flex flex-col items-center border-y border-[#14ABD5]">
              <h5 className="font-bold">15:00hs a 20:00hs</h5>
              <h5>Jornada Deportiva en "Banco Rugby Club"</h5>
              <a
                target="_blank"
                href="https://www.google.com/maps/place/Banco+Rugby+Club/@-32.8892743,-68.7501503,15z/data=!4m5!3m4!1s0x0:0x9f2dad5ed9be76e7!8m2!3d-32.8892743!4d-68.7501503"
              >
                <div className="flex items-center mb-2 ">
                  <img src={map} alt="" className="w-5 rounded-full" />
                  <h5 className=" text-sm font-semibold border-b border-[#14ABD5]">
                    "Ver en el mapa"
                  </h5>
                </div>
              </a>
            </div>
          </div>
        </Tabs.Item>
        <Tabs.Item
          title="Vie 04/11"
          /*   icon={HiAdjustments} */
        >
          <div className="flex flex-col items-center">
            {/* Hace Click en el evento para conocer la ubicación */}
            <div className="flex flex-col items-center border-y border-[#14ABD5]">
              <h5 className="font-bold">09:00hs a 12:00hs</h5>
              <h5>Guía por "Fábrica Chocolezza"</h5>
              <a
                target="_blank"
                href="https://www.google.com/maps/place/Chocolezza+SRL/@-32.8667857,-68.8298676,3a,77.3y/data=!3m8!1e2!3m6!1sAF1QipNcDNVUPseTlOMgwV936XhfJpMr4vrdG5aEZfbK!2e10!3e12!6shttps:%2F%2Flh5.googleusercontent.com%2Fp%2FAF1QipNcDNVUPseTlOMgwV936XhfJpMr4vrdG5aEZfbK%3Dw153-h86-k-no!7i1280!8i719!4m9!1m2!2m1!1sChocolezza!3m5!1s0x967e08c36dc2907b:0x5d3d520d819e84df!8m2!3d-32.8669044!4d-68.8298682!15sCgpDaG9jb2xlenphWgwiCmNob2NvbGV6emGSARFjaG9jb2xhdGVfZmFjdG9yeeABAA"
              >
                <div className="flex items-center mb-2 ">
                  <img src={map} alt="" className="w-5 rounded-full" />
                  <h5 className=" text-sm font-semibold border-b border-[#14ABD5]">
                    "Ver en el mapa"
                  </h5>
                </div>
              </a>
            </div>
          </div>
        </Tabs.Item>
        <Tabs.Item
          title="Sab 05/11"
          /*  icon={HiClipboardList} */
        >
          <div className="flex flex-col items-center">
            {/* Hace Click en el evento para conocer la ubicación */}
            <div className="flex flex-col items-center border-y border-[#14ABD5]">
              <h5 className="font-bold">09:00hs a 14:00hs</h5>
              <h5>Finales y premiación en "Banco Rugby Club"</h5>
              <a
                target="_blank"
                href="https://www.google.com/maps/place/Banco+Rugby+Club/@-32.8892743,-68.7501503,15z/data=!4m5!3m4!1s0x0:0x9f2dad5ed9be76e7!8m2!3d-32.8892743!4d-68.7501503"
              >
                <div className="flex items-center mb-2 ">
                  <img src={map} alt="" className="w-5 rounded-full" />
                  <h5 className=" text-sm font-semibold border-b border-[#14ABD5]">
                    "Ver en el mapa"
                  </h5>
                </div>
              </a>
            </div>
            <div className="flex flex-col items-center border-y border-[#14ABD5]">
              <h5 className="font-bold">20:00hs a 22:00hs:</h5>
              <h5> Aconcagualandia en "Canchas Mathus"</h5>
              <a
                target="_blank"
                href="https://www.google.com/maps/place/Banco+Rugby+Club/@-32.8892743,-68.7501503,15z/data=!4m5!3m4!1s0x0:0x9f2dad5ed9be76e7!8m2!3d-32.8892743!4d-68.7501503"
              >
                <div className="flex items-center mb-2">
                  <img src={map} alt="" className="w-5" />
                  <h5 className=" text-sm font-semibold border-b border-[#14ABD5]">
                    "Ver en el mapa"{/* PONER UBICACIÓN CORRECTA */}
                  </h5>
                </div>
              </a>
            </div>
          </div>
        </Tabs.Item>
        <Tabs.Item /* active={true}  */ title="Dom 06/11">
          <div className="flex flex-col items-center">
            {/* Hace Click en el evento para conocer la ubicación */}
            <div className="flex flex-col items-center border-y border-[#14ABD5]">
              <h5 className="font-bold">09:00hs a 14:00hs</h5>
              <h5>Cierre en "Aguas del Pizarro"</h5>
              <a
                target="_blank"
                href="https://www.google.com/maps/place/Estadio+Malvinas+Argentinas/@-32.8896642,-68.8800956,15z/data=!4m2!3m1!1s0x0:0x684a90ae779e7723?sa=X&ved=2ahUKEwiCmd2Uo_X6AhWhQ7gEHS7oCt8Q_BJ6BAhHEAU"
              >
                <div className="flex items-center mb-2 ">
                  <img src={map} alt="" className="w-5 rounded-full" />
                  <h5 className=" text-sm font-semibold border-b border-[#14ABD5]">
                    "Ver en el mapa"
                  </h5>
                </div>
              </a>
            </div>
          </div>
        </Tabs.Item>
      </Tabs.Group>
    </div>
  );
}
