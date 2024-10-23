import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Importando o Bootstrap
import 'bootstrap-icons/font/bootstrap-icons.css'; // Importando os ícones

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <button
        className="navbar-toggler focus:outline-none text-white"
        type="button"
        onClick={toggleMenu}
        aria-controls="sidebar"
        aria-expanded={isOpen}
        aria-label="Toggle navigation"
      >
        <i className="bi bi-list text-4xl"></i> {/* Aumentando o ícone com Tailwind */}
      </button>

      {/* Painel Deslizante de Cima para Baixo */}
      <div
        className={`fixed top-0 left-0 h-screen w-64 bg-slate-950 transition-transform duration-300 transform ${
          isOpen ? 'translate-y-0' : '-translate-y-full'
        }`}
        id="sidebar"
      >
        <button
          className="absolute top-4 right-4 text-2xl focus:outline-none"
          onClick={toggleMenu}
        >
          &times;
        </button>
        <ul className="mt-16">
          <li className="p-4">
            <a className="text-gray-800 hover:underline" href="#home">Início</a>
          </li>
          <li className="p-4">
            <a className="text-gray-800 hover:underline" href="#sobre">Sobre</a>
          </li>
          <li className="p-4">
            <a className="text-gray-800 hover:underline" href="#servicos">Serviços</a>
          </li>
          <li className="p-4">
            <a className="text-gray-800 hover:underline" href="#contato">Contato</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default HamburgerMenu;
