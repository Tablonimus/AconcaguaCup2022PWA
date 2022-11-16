import React from "react";
import NavBar from "../NavBar/NavBar";
import { Tabs } from "flowbite-react";
import { Link } from "react-router-dom";
import map from "../../assets/images/map.png";

import aud from "../../assets/pdf3/audax.pdf";
import faud from "../../assets/pdf3/faud.png";

import bal from "../../assets/pdf3/balon.pdf";
import fbal from "../../assets/pdf3/fbal.png";

import cau from "../../assets/pdf3/caupolican.pdf";
import fcau from "../../assets/pdf3/fcau.png";

import com from "../../assets/pdf3/combarbala.pdf";
import fcom from "../../assets/pdf3/fcom.png";

import est from "../../assets/pdf3/estrella.pdf";
import fest from "../../assets/pdf3/fest.png";

import fie from "../../assets/pdf3/fierro.pdf";
import ffie from "../../assets/pdf3/ffie.png";

import hua from "../../assets/pdf3/huachipato.pdf";
import fhua from "../../assets/pdf3/fhua.png";

import kur from "../../assets/pdf3/kurripang.pdf";
import fkur from "../../assets/pdf3/fkur.png";

import man from "../../assets/pdf3/manuel.pdf";
import fman from "../../assets/pdf3/fman.png";

import ped from "../../assets/pdf3/pedegua.pdf";
import fped from "../../assets/pdf3/fped.png";

import pro from "../../assets/pdf3/proyectando.pdf";
import fpro from "../../assets/pdf3/fpro.png";

import uca from "../../assets/pdf3/ucatolica.pdf";
import fuca from "../../assets/pdf3/fuca.png";

import ucap from "../../assets/pdf3/ucatolicapuente.pdf";
import fucap from "../../assets/pdf3/fucap.png";

import wan from "../../assets/pdf3/wanderers.pdf";
import fwan from "../../assets/pdf3/fwan.png";

export default function Cronograma() {
  return (
    <div className="mt-24 flex items center">
      <Tabs.Group aria-label="Tabs with icons" style="underline">
        <Tabs.Item title="General" /*icon={map}*/>
          <div className="bg-white flex mb-3 flex-col items-center rounded-b-lg">
            {/*   <h5 className="font-bold text-black">Cronograma</h5> */}
            <Tabs.Group aria-label="Tabs with icons" style="underline">
              <Tabs.Item
                title="Mie 09/11"
                /* active={true}  */
                /*  icon={HiUserCircle} */
              >
                <div className="flex flex-col items-center">
                  {/* Hace Click en el evento para conocer la ubicación */}
                  <div className="flex flex-col items-center border-y border-[#14ABD5]">
                    <h5 className="font-bold">08:30hs a 11:00hs</h5>
                    <h5>
                      Entrega de Acreditaciones y Visita en "Estadio Malvinas
                      Argentinas"
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
                    <h5 className="font-bold"> 19:00hs</h5>
                    <h5>Desfile y Ceremonia inaugural en "Banco Rugby Club"</h5>
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
                title="Jue 10/11"
                active={true}
                /*  icon={MdDashboard} */
              >
                <div className="flex flex-col items-center">
                  {/* Hace Click en el evento para conocer la ubicación */}
                  <div className="flex flex-col items-center border-y border-[#14ABD5]">
                    <h5 className="font-bold">15:00hs</h5>
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
                title="Vie 11/11"
                /*   icon={HiAdjustments} */
              >
                <div className="flex flex-col items-center">
                  {/* Hace Click en el evento para conocer la ubicación */}
                  <div className="flex flex-col items-center border-y border-[#14ABD5]">
                    <h5 className="font-bold">Por la Mañana</h5>
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
                  <div className="flex flex-col items-center border-y border-[#14ABD5]">
                    <h5 className="font-bold">15:00hs</h5>
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
                title="Sab 12/11"
                /*  icon={HiClipboardList} */
              >
                <div className="flex flex-col items-center">
                  {/* Hace Click en el evento para conocer la ubicación */}
                  <div className="flex flex-col items-center border-y border-[#14ABD5]">
                    <h5 className="font-bold">08:30hs a 14:00hs</h5>
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
                    <h5 className="font-bold">20:00hs a 00:30hs</h5>
                    <h5> Aconcagualandia en "Canchas Mathus"</h5>
                    <a
                      target="_blank"
                      href="https://maps.app.goo.gl/b3qTZN2HRJfVY7eT9?g_st=iw"
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
              <Tabs.Item active={true} title="Dom 13/11">
                <div className="flex flex-col items-center">
                  {/* Hace Click en el evento para conocer la ubicación */}
                  <div className="flex flex-col items-center border-y border-[#14ABD5]">
                    <h5 className="font-bold">09:00hs</h5>
                    <h5>Cierre en "Aguas del Pizarro"</h5>
                    <a
                      target="_blank"
                      href="https://www.google.com/maps/place/Aguas+del+Pizarro+Cacheuta/@-33.0313849,-69.1113062,17.25z/data=!4m5!3m4!1s0x967e085c1da53d77:0x850a00ae94bf098e!8m2!3d-33.0314206!4d-69.1091626?hl=es-CL"
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
        </Tabs.Item>
        <Tabs.Item title="Descargar Cronograma" active={true} /*icon={map}*/>
          <div className="flex flex-col items-center">
            <h5 className="mb-2">Descarga los horarios de tu equipo</h5>
            <div className="grid grid-cols-4 items-center gap-y-1">
              <a
                href={aud}
                target="_blank"
                rel="aud"
                download="AUDAX.pdf"
                className="flex flex-col border-x p-2 items-center"
              >
                <span className="flex items-center justify-center flex-col ">
                  <img
                    src={faud}
                    className="w-14 h-14 rounded-full shadow-lg"
                    alt=""
                  />
                </span>
                <h5 className="text-sm">Audax</h5>
              </a>
              <a
                href={bal}
                target="_blank"
                rel="aud"
                download="balon.pdf"
                className="flex flex-col border-x p-2 items-center"
              >
                <span className="flex items-center justify-center flex-col ">
                  <img
                    src={fbal}
                    className="w-14 h-14 rounded-full shadow-lg"
                    alt=""
                  />
                </span>
                <h5 className="text-sm">Balon en la red</h5>
              </a>
              <a
                href={cau}
                target="_blank"
                rel="aud"
                download="caupolican.pdf"
                className="flex flex-col border-x p-2 items-center"
              >
                <span className="flex items-center justify-center flex-col ">
                  <img
                    src={fcau}
                    className="w-14 h-14 rounded-full shadow-lg"
                    alt=""
                  />
                </span>
                <h5 className="text-sm">Caupolican</h5>
              </a>
              <a
                href={com}
                target="_blank"
                rel="aud"
                download="combarbala.pdf"
                className="flex flex-col border-x p-2 items-center"
              >
                <span className="flex items-center justify-center flex-col ">
                  <img
                    src={fcom}
                    className="w-14 h-14 rounded-full shadow-lg"
                    alt=""
                  />
                </span>
                <h5 className="text-sm">Combarbala</h5>
              </a>
              <a
                href={est}
                target="_blank"
                rel="aud"
                download="estrella.pdf"
                className="flex flex-col border-x p-2 items-center"
              >
                <span className="flex items-center justify-center flex-col ">
                  <img
                    src={fest}
                    className="w-14 h-14 rounded-full shadow-lg"
                    alt=""
                  />
                </span>
                <h5 className="text-sm">Estrella Solitaria</h5>
              </a>
              <a
                href={fie}
                target="_blank"
                rel="aud"
                download="fierro.pdf"
                className="flex flex-col border-x p-2 items-center"
              >
                <span className="flex items-center justify-center flex-col ">
                  <img
                    src={ffie}
                    className="w-14 h-14 rounded-full shadow-lg"
                    alt=""
                  />
                </span>
                <h5 className="text-sm">Gonzalo Fierro</h5>
              </a>
              <a
                href={hua}
                target="_blank"
                rel="aud"
                download="huachipato.pdf"
                className="flex flex-col border-x p-2 items-center"
              >
                <span className="flex items-center justify-center flex-col ">
                  <img
                    src={fhua}
                    className="w-14 h-14 rounded-full shadow-lg"
                    alt=""
                  />
                </span>
                <h5 className="text-sm">Huachipato Talca</h5>
              </a>
              <a
                href={kur}
                target="_blank"
                rel="aud"
                download="kurripang.pdf"
                className="flex flex-col border-x p-2 items-center"
              >
                <span className="flex items-center justify-center flex-col ">
                  <img
                    src={fkur}
                    className="w-14 h-14 rounded-full shadow-lg"
                    alt=""
                  />
                </span>
                <h5 className="text-sm">Kurripang</h5>
              </a>
              <a
                href={man}
                target="_blank"
                rel="aud"
                download="manuel.pdf"
                className="flex flex-col border-x p-2 items-center"
              >
                <span className="flex items-center justify-center flex-col ">
                  <img
                    src={fman}
                    className="w-14 h-14 rounded-full shadow-lg"
                    alt=""
                  />
                </span>
                <h5 className="text-sm">Manuel Rodriguez</h5>
              </a>
              <a
                href={ped}
                target="_blank"
                rel="aud"
                download="pedegua.pdf"
                className="flex flex-col border-x p-2 items-center"
              >
                <span className="flex items-center justify-center flex-col ">
                  <img
                    src={fped}
                    className="w-14 h-14 rounded-full shadow-lg"
                    alt=""
                  />
                </span>
                <h5 className="text-sm">Pedegua</h5>
              </a>
              <a
                href={pro}
                target="_blank"
                rel="proyectando.pdf"
                className="flex flex-col border-x p-2 items-center"
              >
                <span className="flex items-center justify-center flex-col ">
                  <img
                    src={fpro}
                    className="w-14 h-14 rounded-full shadow-lg"
                    alt=""
                  />
                </span>
                <h5 className="text-sm">Proyectando Campeones</h5>
              </a>
              <a
                href={uca}
                target="_blank"
                rel="ucatolica.pdf"
                className="flex flex-col border-x p-2 items-center"
              >
                <span className="flex items-center justify-center flex-col ">
                  <img
                    src={fuca}
                    className="w-14 h-14 rounded-full shadow-lg"
                    alt=""
                  />
                </span>
                <h5 className="text-sm">U. Catolica La Granja</h5>
              </a>
              <a
                href={ucap}
                target="_blank"
                rel="ucatolicapuente.pdf"
                className="flex flex-col border-x p-2 items-center"
              >
                <span className="flex items-center justify-center flex-col ">
                  <img
                    src={fucap}
                    className="w-14 h-14 rounded-full shadow-lg"
                    alt=""
                  />
                </span>
                <h5 className="text-sm">U. Catolica Pte. Alto</h5>
              </a>
              <a
                href={wan}
                target="_blank"
                rel="wanderers.pdf"
                className="flex flex-col border-x p-2 items-center"
              >
                <span className="flex items-center justify-center flex-col ">
                  <img
                    src={fwan}
                    className="w-14 h-14 rounded-full shadow-lg"
                    alt=""
                  />
                </span>
                <h5 className="text-sm">Wanderers</h5>
              </a>
            </div>
          </div>
        </Tabs.Item>
      </Tabs.Group>
    </div>
  );
}
