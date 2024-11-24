import React from "react";
import logout from "/icons/logout.svg";
import help from "/icons/Help.svg";
import LogoutButton from "./LogoutButton";

const Footer = () => {
  return (
    <div className="w-full bg-medium-soft-green-transparency text-text-color-general py-2 flex justify-between items-center font-hanken drop-shadow-primary-shadow px-2 fixed bottom-0 pl-4 pr-8 mt-10">
      <LogoutButton />
      <p className="flex flex-row text-medium-soft-green font-bold underline mr-3">
        <img src={help} alt="Icono" className="w-5 h-5 mr-2" />
        Ayuda</p>
    </div>
  );
};

export default Footer;
