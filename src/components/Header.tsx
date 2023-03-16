import React from "react";
import { FaSearch } from "react-icons/fa";
import logo from "../assets/logo.svg";

const Header = () => {
  return (
    <header className="flex justify-between items-center bg-primary p-4 px-6">
      <div className="flex items-center gap-2">
        <img src={logo} className="w-8" />
        <h1 className="text-white text-3xl font-semibold">Pokédex</h1>
      </div>
      <form className="flex items-center">
        <div className="bg-white p-2 flex gap-2 items-center rounded-lg focus:outline-none">
          <input type="text" placeholder="Search Pokemon" className="bg-none" />
          <button
            type="submit"
            className="flex gap-2 items-center bg-primary p-2 text-white rounded-lg hover:text-gray-800/60"
          >
            <FaSearch />
          </button>
        </div>
      </form>
    </header>
  );
};

export default Header;
