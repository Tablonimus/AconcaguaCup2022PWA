import React from "react";
import ac from "../../assets/images/ac.png";
import { Link } from "react-router-dom";
import { Navbar } from "flowbite-react";

export default function NavBar() {
  return (
    <Navbar
      class="flex bg-white items-center w-full fixed z-30"
      fluid={true}
      rounded={true}
    >
      <Navbar.Brand href="/home">
        <span className="flex items-center ml-2 self-center whitespace-nowrap text-xl font-semibold text-white">
          <img src={ac} className="h-20 rounded-full flex" alt="Logo" />
        </span>
      </Navbar.Brand>

      <Navbar.Toggle />
      <Navbar.Collapse>
        <Navbar.Link href="/home">
          <span className="text-black hover:text-orange-600">Inicio</span>
        </Navbar.Link>
        <Navbar.Link href="/notification">
          <span className="text-black hover:text-orange-600">
            Notificaciones
          </span>
        </Navbar.Link>
        <Navbar.Link href="/">
          <span className="text-black hover:text-orange-600">
            Descargar App
          </span>
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}
