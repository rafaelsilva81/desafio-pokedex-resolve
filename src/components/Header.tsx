import React from "react";
import { FaSearch } from "react-icons/fa";
import logo from "../assets/logo.svg";

const Header = () => {
  return (
    <header className="bg-primary p-4">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-2">
          <img src={logo} className="w-8" />
          <h1 className="text-white text-3xl font-semibold">Pokédex</h1>
        </div>
        <form className="flex items-center">
          <div className="bg-white py-2 px-3 flex gap-2 items-center rounded-lg focus:outline-none">
            <input
              type="text"
              placeholder="Search Pokemon"
              className="bg-none"
            />
            <button
              type="submit"
              className="flex gap-2 items-center text-primary"
            >
              <FaSearch />
            </button>
          </div>
        </form>
      </div>
    </header>
  );
};

export default Header;
