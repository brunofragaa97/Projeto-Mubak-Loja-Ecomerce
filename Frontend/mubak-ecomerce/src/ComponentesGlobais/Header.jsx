// Header.jsx
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "tailwindcss/tailwind.css";
import SearchBar from "./componentes-header/SearchBar"; // Ajuste o caminho conforme necessário
import HamburgerMenu from "./componentes-header/HamburguerMenu";
import logo from "/src/assets/logo-kabum-header.svg";

const Header = () => {
  return (
    <header className="bg-gray-950 w-full">
      <div className="flex ml-[3%] p-[2%]">
        <HamburgerMenu />
        <img src={logo} className="w-40 h-auto ml-8"></img>
        <div className="ml-8 mt-2">
          <SearchBar />
        </div>
      </div>
    </header>
  );
};

export default Header;
