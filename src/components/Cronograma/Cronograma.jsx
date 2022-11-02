import React from "react";
import NavBar from "../NavBar/NavBar";
import { Tabs } from "flowbite-react";
import { Link } from "react-router-dom";
import map from "../../assets/images/map.png";

import ber from "../../assets/escudos/balonEnLaRed.png";
import ber1 from "../../assets/pdf_documents/BALONENLARED.pdf";

import ccc from "../../assets/escudos/ccConchali.png";
import ccc1 from "../../assets/pdf_documents/COLO COLO CONCHALI.pdf";

import ccl from "../../assets/escudos/ccLarapinta.png";
import ccl1 from "../../assets/pdf_documents/COLO COLO LARAPINTA.pdf";

import ccp from "../../assets/escudos/ccPudahuel.png";
import ccp1 from "../../assets/pdf_documents/COLO COLO PUDAHUEL.pdf";

import cu from "../../assets/escudos/curicoUnido.png";
import cu1 from "../../assets/pdf_documents/CURICO UNIDO.pdf";

import ev from "../../assets/escudos/estrellaDeViluco.png";
import ev1 from "../../assets/pdf_documents/ESTRELLA DE VILUCO.pdf";

import ec from "../../assets/escudos/estrellasDeCodegua.png";
import ec1 from "../../assets/pdf_documents/ESTRELLAS DE CODEGUA.pdf";

import fess from "../../assets/escudos/FESS.png";
import fess1 from "../../assets/pdf_documents/FUTBOL FES.pdf";

import flu from "../../assets/escudos/fluminense.png";
import flu1 from "../../assets/pdf_documents/FLUMINENSE.pdf";

import fpt from "../../assets/escudos/fpt.png";
import fpt1 from "../../assets/pdf_documents/FUTBOL PARA TODOS.pdf";

import gp from "../../assets/escudos/grandesPasos.png";
import gp1 from "../../assets/pdf_documents/ACADEMIA GRANDES PASOS.pdf";

import hua from "../../assets/escudos/huachipatoConchali.png";
import hua1 from "../../assets/pdf_documents/HUACHIPATO CONCHALI.pdf";

import ja from "../../assets/escudos/juanitaAguirre.png";
import ja1 from "../../assets/pdf_documents/JUANITA AGUIRRE.pdf";

import tp from "../../assets/escudos/talentoPetorquino.png";
import tp1 from "../../assets/pdf_documents/TALENTO PETORQUINO.pdf";

import alm from "../../assets/escudos/almafuerte.png";
import alm1 from "../../assets/pdf_documents/ALMAFUERTE.xlsx";

export default function Cronograma() {
  return (
    <div className="mt-24 flex items center">
      <Tabs.Group aria-label="Tabs with icons" style="underline">
        <Tabs.Item title="Generál" /*icon={map}*/>
          <div className="bg-white flex mb-3 flex-col items-center rounded-b-lg">
            {/*   <h5 className="font-bold text-black">Cronograma</h5> */}
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
                // active={true}
                title="Jue 03/11"
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
                title="Vie 04/11"
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
                title="Sab 05/11"
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
              <Tabs.Item /* active={true}  */ title="Dom 06/11">
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
                href={alm1}
                target="_blank"
                rel="alm"
                download="ALMAFUERTE.xlsx"
                className="flex flex-col border-x p-2 items-center"
              >
                <span className="flex items-center justify-center flex-col ">
                  <img
                    src={alm}
                    className="w-14 h-14 rounded-full shadow-lg"
                    alt=""
                  />
                </span>
                <h5 className="text-sm">Almafuerte</h5>
              </a>
              <a
                href={ber1}
                target="_blank"
                rel="ber"
                download="BALONENLARED.pdf"
                className="flex flex-col border-x p-2 items-center"
              >
                <span className="flex items-center justify-center flex-col ">
                  <img
                    src={ber}
                    className="w-14 h-14 rounded-full shadow-lg"
                    alt=""
                  />
                </span>
                <h5 className="text-sm">Balon en la Red</h5>
              </a>
              <a
                href={ccc1}
                target="_blank"
                rel="ber"
                download="COLO COLO CONCHALI.pdf"
                className="flex flex-col border-x p-2 items-center"
              >
                <span className="flex items-center justify-center flex-col ">
                  <img
                    src={ccc}
                    className="w-14 h-14 rounded-full shadow-lg"
                    alt=""
                  />
                </span>
                <h5 className="text-sm">CC Conchali</h5>
              </a>
              <a
                href={ccl1}
                target="_blank"
                rel="ber"
                download="COLO COLO LARAPINTA.pdf"
                className="flex flex-col border-x p-2 items-center"
              >
                <span className="flex items-center justify-center flex-col ">
                  <img
                    src={ccl}
                    className="w-14 h-14 rounded-full shadow-lg"
                    alt=""
                  />
                </span>
                <h5 className="text-sm">CC Larapinta</h5>
              </a>
              <a
                href={ccp1}
                target="_blank"
                rel="ber"
                download="COLO COLO PUDAHUEL.pdf"
                className="flex flex-col border-x p-2 items-center"
              >
                <span className="flex items-center justify-center flex-col ">
                  <img
                    src={ccp}
                    className="w-14 h-14 rounded-full shadow-lg"
                    alt=""
                  />
                </span>
                <h5 className="text-sm">CC Pudahuel</h5>
              </a>
              <a
                href={cu1}
                target="_blank"
                rel="ber"
                download="CURICO UNIDO.pdf"
                className="flex flex-col border-x p-2 items-center"
              >
                <span className="flex items-center justify-center flex-col ">
                  <img
                    src={cu}
                    className="w-14 h-14 rounded-full shadow-lg"
                    alt=""
                  />
                </span>
                <h5 className="text-sm">Curico Unido</h5>
              </a>
              <a
                href={ev1}
                target="_blank"
                rel="ber"
                download="ESTRELLA DE VILUCO.pdf"
                className="flex flex-col border-x p-2 items-center"
              >
                <span className="flex items-center justify-center flex-col ">
                  <img
                    src={ev}
                    className="w-14 h-14 rounded-full shadow-lg"
                    alt=""
                  />
                </span>
                <h5 className="text-sm">Nueva Estrella</h5>
              </a>
              <a
                href={ec1}
                target="_blank"
                rel="ber"
                download="ESTRELLAS DE CODEGUA.pdf"
                className="flex flex-col border-x p-2 items-center"
              >
                <span className="flex items-center justify-center flex-col ">
                  <img
                    src={ec}
                    className="w-14 h-14 rounded-full shadow-lg"
                    alt=""
                  />
                </span>
                <h5 className="text-sm">Estrellas</h5>
              </a>
              <a
                href={fess1}
                target="_blank"
                rel="ber"
                download="FUTBOL FES.pdf"
                className="flex flex-col border-x p-2 items-center"
              >
                <span className="flex items-center justify-center flex-col ">
                  <img
                    src={fess}
                    className="w-14 h-14 rounded-full shadow-lg"
                    alt=""
                  />
                </span>
                <h5 className="text-sm">FESS</h5>
              </a>
              <a
                href={flu1}
                target="_blank"
                rel="ber"
                download="FLUMINENSE.pdf"
                className="flex flex-col border-x p-2 items-center"
              >
                <span className="flex items-center justify-center flex-col ">
                  <img
                    src={flu}
                    className="w-14 h-14 rounded-full shadow-lg"
                    alt=""
                  />
                </span>
                <h5 className="text-sm">Fluminense</h5>
              </a>
              <a
                href={fpt1}
                target="_blank"
                rel="ber"
                download="FUTBOL PARA TODOS.pdf"
                className="flex flex-col border-x p-2 items-center"
              >
                <span className="flex items-center justify-center flex-col ">
                  <img
                    src={fpt}
                    className="w-14 h-14 rounded-full shadow-lg"
                    alt=""
                  />
                </span>
                <h5 className="text-sm">Fut. Para Todos</h5>
              </a>
              <a
                href={gp1}
                target="_blank"
                rel="ber"
                download="ACADEMIA GRANDES PASOS.pdf"
                className="flex flex-col border-x p-2 items-center"
              >
                <span className="flex items-center justify-center flex-col ">
                  <img
                    src={gp}
                    className="w-14 h-14 rounded-full shadow-lg"
                    alt=""
                  />
                </span>
                <h5 className="text-sm">Grandes Pasos</h5>
              </a>
              <a
                href={hua1}
                target="_blank"
                rel="ber"
                download="HUACHIPATO CONCHALI.pdf"
                className="flex flex-col border-x p-2 items-center"
              >
                <span className="flex items-center justify-center flex-col ">
                  <img
                    src={hua}
                    className="w-14 h-14 rounded-full shadow-lg"
                    alt=""
                  />
                </span>
                <h5 className="text-sm">Huachipato</h5>
              </a>
              <a
                href={ja1}
                target="_blank"
                rel="ber"
                download="JUANITA AGUIRRE.pdf"
                className="flex flex-col border-x p-2 items-center"
              >
                <span className="flex items-center justify-center flex-col ">
                  <img
                    src={ja}
                    className="w-14 h-14 rounded-full shadow-lg"
                    alt=""
                  />
                </span>
                <h5 className="text-sm">Juanita Aguirre</h5>
              </a>
              <a
                href={tp1}
                target="_blank"
                rel="ber"
                download="TALENTO PETORQUINO.pdf"
                className="flex flex-col border-x p-2 items-center"
              >
                <span className="flex items-center justify-center flex-col ">
                  <img
                    src={tp}
                    className="w-14 h-14 rounded-full shadow-lg"
                    alt=""
                  />
                </span>
                <h5 className="text-sm">Tal. Petorquino</h5>
              </a>
            </div>
          </div>
        </Tabs.Item>
        <Tabs.Item title="Partidos" /* icon={map} */></Tabs.Item>
      </Tabs.Group>
    </div>
  );
}
