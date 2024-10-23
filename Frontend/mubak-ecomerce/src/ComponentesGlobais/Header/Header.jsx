// Header.jsx
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "tailwindcss/tailwind.css";
import SearchBar from "./SearchBar"; // Ajuste o caminho conforme necessário
import HamburgerMenu from "./HamburguerMenu";
import logo from "/src/assets/logo-kabum-header.svg";

const Header = () => {
  return (
    <header className="bg-black w-full">
      <div className="flex ml-[3%] p-9">
        <HamburgerMenu />
        <img src={logo} className="w-44 h-auto ml-8"></img>
        <div className="ml-8">
          <SearchBar />
        </div>
      </div>
    </header>
  );
};

export default Header;
