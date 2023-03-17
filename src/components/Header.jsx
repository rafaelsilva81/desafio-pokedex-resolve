import React from "react";
import { FaSearch } from "react-icons/fa";
import logo from "../assets/logo.svg";

const Header = () => {
  return (
    <header className="flex md:flex-row flex-col justify-between items-center bg-primary py-4 px-6 gap-3">
      <div className="flex items-center gap-2">
        <img src={logo} className="w-8" />
        <h1 className="text-white text-3xl font-semibold">Pokédex</h1>
      </div>

      <div className="text-white flex items-center gap-1">
        Developed by{" "}
        <a
          href="https://github.com/rafaelsilva81"
          target="_blank"
          rel="noreferrer"
          className="font-semibold hover:text-gray-800/80"
        >
          Rafael Silva
        </a>
      </div>
    </header>
  );
};

export default Header;
