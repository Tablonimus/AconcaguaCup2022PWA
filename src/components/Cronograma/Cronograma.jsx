import React from "react";
import NavBar from "../NavBar/NavBar";
import { Tabs } from "flowbite-react";
import { Link } from "react-router-dom";
import map from "../../assets/images/map.png";

import alg from "../../assets/pdf2/ALGARROBO F.C.pdf";
import falg from "../../assets/pdf2/alg.png";

import arg from "../../assets/pdf2/ARGENTINO JUNIOR.pdf";
import farg from "../../assets/pdf2/arg.png";

import ccl from "../../assets/pdf2/C.C LARAPINTA.pdf";
import fccl from "../../assets/pdf2/ccl.png";

import gab from "../../assets/pdf2/F.C.D. GABRIELA.pdf";
import fgab from "../../assets/pdf2/gab.png";

import reg from "../../assets/pdf2/H, 4TA REGION.pdf";
import mai from "../../assets/pdf2/H.MAIPU.pdf";
import freg from "../../assets/pdf2/reg.png";

import leo from "../../assets/pdf2/LEONCITOS DE YUMBEL.pdf";
import fleo from "../../assets/pdf2/leo.png";

import psg from "../../assets/pdf2/PSG-QUILICURA.pdf";
import fpsg from "../../assets/pdf2/psg.jpg";

import ale from "../../assets/pdf2/U DE C. VILLA ALEMANA.pdf";
import fale from "../../assets/pdf2/ale.png";

import chi from "../../assets/pdf2/U DE CHILE.pdf";
import fchi from "../../assets/pdf2/chi.png";

export default function Cronograma() {
  return (
    <div className="mt-24 flex items center">
      <Tabs.Group aria-label="Tabs with icons" style="underline">
        <Tabs.Item  title="General" /*icon={map}*/>
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
                active={true}
                title="Jue 10/11"
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
                active={true}
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
              <Tabs.Item  title="Dom 13/11">
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
        <Tabs.Item active={true} title="Descargar Cronograma" /*icon={map}*/>
          <div className="flex flex-col items-center">
            <h5 className="mb-2">Descarga los horarios de tu equipo</h5>
            <div className="grid grid-cols-4 items-center gap-y-1">
              <a
                href={alg}
                target="_blank"
                rel="alm"
                download="ALGARROBO F.C.pdf"
                className="flex flex-col border-x p-2 items-center"
              >
                <span className="flex items-center justify-center flex-col ">
                  <img
                    src={falg}
                    className="w-14 h-14 rounded-full shadow-lg"
                    alt=""
                  />
                </span>
                <h5 className="text-sm">Algarrobo F.C</h5>
              </a>
              <a
                href={arg}
                target="_blank"
                rel="alm"
                download="ARGENTINOS JUNIORS.pdf"
                className="flex flex-col border-x p-2 items-center"
              >
                <span className="flex items-center justify-center flex-col ">
                  <img
                    src={farg}
                    className="w-14 h-14 rounded-full shadow-lg"
                    alt=""
                  />
                </span>
                <h5 className="text-sm">Argentinos Jr.</h5>
              </a>
              <a
                href={ccl}
                target="_blank"
                rel="alm"
                download="C.C LARAPINTA.pdf"
                className="flex flex-col border-x p-2 items-center"
              >
                <span className="flex items-center justify-center flex-col ">
                  <img
                    src={fccl}
                    className="w-14 h-14 rounded-full shadow-lg"
                    alt=""
                  />
                </span>
                <h5 className="text-sm">C.C Larapinta</h5>
              </a>
              <a
                href={gab}
                target="_blank"
                rel="alm"
                download="F.C.D. GABRIELA.pdf"
                className="flex flex-col border-x p-2 items-center"
              >
                <span className="flex items-center justify-center flex-col ">
                  <img
                    src={fgab}
                    className="w-14 h-14 rounded-full shadow-lg"
                    alt=""
                  />
                </span>
                <h5 className="text-sm">Dep. Gabriela</h5>
              </a>
              <a
                href={reg}
                target="_blank"
                rel="alm"
                download="H, 4TA REGION.pdf"
                className="flex flex-col border-x p-2 items-center"
              >
                <span className="flex items-center justify-center flex-col ">
                  <img
                    src={freg}
                    className="w-14 h-14 rounded-full shadow-lg"
                    alt=""
                  />
                </span>
                <h5 className="text-sm">Huachipato 4°Reg</h5>
              </a>
              <a
                href={mai}
                target="_blank"
                rel="alm"
                download="H.MAIPU.pdf"
                className="flex flex-col border-x p-2 items-center"
              >
                <span className="flex items-center justify-center flex-col ">
                  <img
                    src={freg}
                    className="w-14 h-14 rounded-full shadow-lg"
                    alt=""
                  />
                </span>
                <h5 className="text-sm">Huachipato Maipu</h5>
              </a>
              <a
                href={leo}
                target="_blank"
                rel="alm"
                download="LEONCITOS DE YUMBEL.pdf"
                className="flex flex-col border-x p-2 items-center"
              >
                <span className="flex items-center justify-center flex-col ">
                  <img
                    src={fleo}
                    className="w-14 h-14 rounded-full shadow-lg"
                    alt=""
                  />
                </span>
                <h5 className="text-sm">Leoncitos</h5>
              </a>
              <a
                href={psg}
                target="_blank"
                rel="alm"
                download="PSG-QUILICURA.pdf"
                className="flex flex-col border-x p-2 items-center"
              >
                <span className="flex items-center justify-center flex-col ">
                  <img
                    src={fpsg}
                    className="w-14 h-14 rounded-full shadow-lg"
                    alt=""
                  />
                </span>
                <h5 className="text-sm">PSG</h5>
              </a>
              <a
                href={ale}
                target="_blank"
                rel="alm"
                download="U DE C. VILLA ALEMANA.pdf"
                className="flex flex-col border-x p-2 items-center"
              >
                <span className="flex items-center justify-center flex-col ">
                  <img
                    src={fale}
                    className="w-14 h-14 rounded-full shadow-lg"
                    alt=""
                  />
                </span>
                <h5 className="text-sm">U - Villa Alemana</h5>
              </a>
              <a
                href={chi}
                target="_blank"
                rel="alm"
                download="U DE CHILE.pdf"
                className="flex flex-col border-x p-2 items-center"
              >
                <span className="flex items-center justify-center flex-col ">
                  <img
                    src={fchi}
                    className="w-14 h-14 rounded-full shadow-lg"
                    alt=""
                  />
                </span>
                <h5 className="text-sm">U de Chile</h5>
              </a>
            </div>
          </div>
        </Tabs.Item>
      </Tabs.Group>
    </div>
  );
}
