import React from "react";
import ac from "../../assets/images/ac.png";
import { Navbar } from "flowbite-react";

export default function NavBar() {
  return (
    <Navbar
      class="flex bg-white items-center w-full fixed z-30"
      fluid={true}
      rounded={true}
    >
      <Navbar.Brand href="">
        <span className="flex items-center ml-2 self-center whitespace-nowrap text-xl font-semibold text-white">
          <img src={ac} className="h-20 rounded-full flex" alt="Logo" />
          <h1 className="text-black font-bold font-serif text-md text-sm ml-2 mr-5">
            {" "}
          </h1>
        </span>
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse>
        <Navbar.Link href="/home">
          <span className="text-black hover:text-orange-600">Inicio</span>
        </Navbar.Link>
        <Navbar.Link href="/">
          <span className="text-black hover:text-orange-600">
            Descargar App
          </span>
        </Navbar.Link>
        {/* <Navbar.Link href="/home">
          {" "}
          <span className="text-black hover:text-orange-600">Fechas</span>{" "}
        </Navbar.Link>
        <Navbar.Link href="/navbars">
          {" "}
          <span className="text-black hover:text-orange-600">
            FemAxSuela
          </span>{" "}
        </Navbar.Link>
        <Navbar.Link href="/navbars">
          {" "}
          <span className="text-black hover:text-orange-600">
            A1xSuela
          </span>{" "}
        </Navbar.Link>
        <Navbar.Link href="/navbars">
          {" "}
          <span className="text-black hover:text-orange-600">Nada</span>{" "}
        </Navbar.Link> */}
      </Navbar.Collapse>
    </Navbar>
  );
}
