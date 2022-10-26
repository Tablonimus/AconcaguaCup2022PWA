import React from "react";
import header from "../../assets/images/header.png";
import { Navbar } from "flowbite-react";

export default function Header() {
  return (
    <div className="  w-full bg-white rounded-t flex items-center justify-center">
      <img src={header} className="px-2 flex w-96" alt="Logo" />
    </div>
  );
}
