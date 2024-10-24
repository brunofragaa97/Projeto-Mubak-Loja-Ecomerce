import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css"; // Importando o Bootstrap
import "bootstrap-icons/font/bootstrap-icons.css"; // Importando os ícones
import "./styles.css"; // Importa seu CSS customizado

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      {/* Botão do menu hambúrguer */}
      <button
        className="navbar-toggler focus:outline-none text-white"
        type="button"
        onClick={toggleMenu}
        aria-controls="sidebar"
        aria-expanded={isOpen}
        aria-label="Toggle navigation"
      >
        <i className="bi bi-list text-5xl"></i>
      </button>

      {/* Painel Deslizante de Cima para Baixo */}
      <div
        className={`fixed top-0 left-0 h-screen w-[23%] bg-black transition-transform 
          duration-300 transform 
          ${isOpen ? "translate-y-0" : "-translate-y-full"}`}
        id="sidebar"
      >
        {/* Botão de fechar o menu */}
        <button
          className="absolute top-4 right-4 text-2xl focus:outline-none text-white"
          onClick={toggleMenu}
        >
          &times;
        </button>

        {/* Conteúdo do menu */}
        <div className="m-3 text-white justify-items-center">
          <i className="text-gray-300 bi bi-person-circle text-4xl"></i>
          <strong className="ml-4 text-2xl">Olá. Acesse sua conta</strong>
        </div>

        {/* Container com rolagem única */}
        <div className="m-4 overflow-y-auto max-h-[70vh] scrollbar-thumb-gray-500 scrollbar-thumb-gray-600 scrollbar-track-gray-900">
          {/* Primeira lista */}
          <ul className="text-white">
            <li className="mt-3">
              <i className="bi bi-house-door-fill"></i>
              <a className="ml-3 hover:underline" href="#home">
                Minha conta
              </a>
            </li>
            <li className="mt-3">
              <i className="bi bi-person-fill"></i>
              <a className="ml-3 hover:underline" href="#sobre">
                Meus Dados
              </a>
            </li>
            <li className="mt-3">
              <i className="bi bi-basket3-fill"></i>
              <a className="ml-3 hover:underline" href="#servicos">
                Meus pedidos
              </a>
            </li>
            <li className="mt-3">
              <i className="bi bi-wallet-fill"></i>
              <a className="ml-3 hover:underline" href="#contato">
                Carteira
              </a>
            </li>
            <li className="mt-3">
              <i className="bi bi-hand-thumbs-up-fill"></i>
              <a className="ml-3 hover:underline" href="#sobre">
                Avaliações
              </a>
            </li>
            <li className="mt-3">
              <i className="bi bi-headset"></i>
              <a className="ml-3 hover:underline" href="#sobre">
                Atendimento ao cliente
              </a>
            </li>
            <li className="mt-3">
              <i className="bi bi-envelope-paper-fill"></i>
              <a className="ml-3 hover:underline" href="#sobre">
                Protocolos
              </a>
            </li>
            <li className="mt-3">
              <i className="bi bi-heart-fill"></i>
              <a className="ml-3 hover:underline" href="#sobre">
                Favoritos
              </a>
            </li>
            <li className="mt-3">
              <i className="bi bi-gift-fill"></i>
              <a className="ml-3 hover:underline" href="#sobre">
                Sorteio
              </a>
            </li>
            <li className="mt-3">
              <i className="bi bi-bell-fill"></i>
              <a className="ml-3 hover:underline" href="#sobre">
                Central de notificações
              </a>
            </li>
          </ul>

          {/* Separador dentro do container */}
          <div className="border-gray-600 border-t my-4"></div>

          {/* Segunda lista */}
          <ul className="text-white">
            <li className="mt-3">
              <i className="bi bi-house-door-fill"></i>
              <a className="ml-3 hover:underline" href="#home">
                Minha conta
              </a>
            </li>
            <li className="mt-3">
              <i className="bi bi-person-fill"></i>
              <a className="ml-3 hover:underline" href="#sobre">
                Meus Dados
              </a>
            </li>
            <li className="mt-3">
              <i className="bi bi-basket3-fill"></i>
              <a className="ml-3 hover:underline" href="#servicos">
                Meus pedidos
              </a>
            </li>
            <li className="mt-3">
              <i className="bi bi-wallet-fill"></i>
              <a className="ml-3 hover:underline" href="#contato">
                Carteira
              </a>
            </li>
            <li className="mt-3">
              <i className="bi bi-hand-thumbs-up-fill"></i>
              <a className="ml-3 hover:underline" href="#sobre">
                Avaliações
              </a>
            </li>
            <li className="mt-3">
              <i className="bi bi-headset"></i>
              <a className="ml-3 hover:underline" href="#sobre">
                Atendimento ao cliente
              </a>
            </li>
            <li className="mt-3">
              <i className="bi bi-envelope-paper-fill"></i>
              <a className="ml-3 hover:underline" href="#sobre">
                Protocolos
              </a>
            </li>
            <li className="mt-3">
              <i className="bi bi-heart-fill"></i>
              <a className="ml-3 hover:underline" href="#sobre">
                Favoritos
              </a>
            </li>
            <li className="mt-3">
              <i className="bi bi-gift-fill"></i>
              <a className="ml-3 hover:underline" href="#sobre">
                Sorteio
              </a>
            </li>
            <li className="mt-3">
              <i className="bi bi-bell-fill"></i>
              <a className="ml-3 hover:underline" href="#sobre">
                Central de notificações
              </a>
            </li>
          </ul>
          {/* Separador dentro do container */}
          <div className="border-gray-600 border-t my-4"></div>

          {/* Segunda lista */}
          <ul className="text-white">
            <li className="mt-3">
              <i className="bi bi-house-door-fill"></i>
              <a className="ml-3 hover:underline" href="#home">
                Minha conta
              </a>
            </li>
            <li className="mt-3">
              <i className="bi bi-person-fill"></i>
              <a className="ml-3 hover:underline" href="#sobre">
                Meus Dados
              </a>
            </li>
            <li className="mt-3">
              <i className="bi bi-basket3-fill"></i>
              <a className="ml-3 hover:underline" href="#servicos">
                Meus pedidos
              </a>
            </li>
            <li className="mt-3">
              <i className="bi bi-wallet-fill"></i>
              <a className="ml-3 hover:underline" href="#contato">
                Carteira
              </a>
            </li>
            <li className="mt-3">
              <i className="bi bi-hand-thumbs-up-fill"></i>
              <a className="ml-3 hover:underline" href="#sobre">
                Avaliações
              </a>
            </li>
            <li className="mt-3">
              <i className="bi bi-headset"></i>
              <a className="ml-3 hover:underline" href="#sobre">
                Atendimento ao cliente
              </a>
            </li>
            <li className="mt-3">
              <i className="bi bi-envelope-paper-fill"></i>
              <a className="ml-3 hover:underline" href="#sobre">
                Protocolos
              </a>
            </li>
            <li className="mt-3">
              <i className="bi bi-heart-fill"></i>
              <a className="ml-3 hover:underline" href="#sobre">
                Favoritos
              </a>
            </li>
            <li className="mt-3">
              <i className="bi bi-gift-fill"></i>
              <a className="ml-3 hover:underline" href="#sobre">
                Sorteio
              </a>
            </li>
            <li className="mt-3">
              <i className="bi bi-bell-fill"></i>
              <a className="ml-3 hover:underline" href="#sobre">
                Central de notificações
              </a>
            </li>
          </ul>
          {/* Separador dentro do container */}
          <div className="border-gray-600 border-t my-4"></div>

          {/* Segunda lista */}
          <ul className="text-white">
            <li className="mt-3">
              <i className="bi bi-house-door-fill"></i>
              <a className="ml-3 hover:underline" href="#home">
                Minha conta
              </a>
            </li>
            <li className="mt-3">
              <i className="bi bi-person-fill"></i>
              <a className="ml-3 hover:underline" href="#sobre">
                Meus Dados
              </a>
            </li>
            <li className="mt-3">
              <i className="bi bi-basket3-fill"></i>
              <a className="ml-3 hover:underline" href="#servicos">
                Meus pedidos
              </a>
            </li>
            <li className="mt-3">
              <i className="bi bi-wallet-fill"></i>
              <a className="ml-3 hover:underline" href="#contato">
                Carteira
              </a>
            </li>
            <li className="mt-3">
              <i className="bi bi-hand-thumbs-up-fill"></i>
              <a className="ml-3 hover:underline" href="#sobre">
                Avaliações
              </a>
            </li>
            <li className="mt-3">
              <i className="bi bi-headset"></i>
              <a className="ml-3 hover:underline" href="#sobre">
                Atendimento ao cliente
              </a>
            </li>
            <li className="mt-3">
              <i className="bi bi-envelope-paper-fill"></i>
              <a className="ml-3 hover:underline" href="#sobre">
                Protocolos
              </a>
            </li>
            <li className="mt-3">
              <i className="bi bi-heart-fill"></i>
              <a className="ml-3 hover:underline" href="#sobre">
                Favoritos
              </a>
            </li>
            <li className="mt-3">
              <i className="bi bi-gift-fill"></i>
              <a className="ml-3 hover:underline" href="#sobre">
                Sorteio
              </a>
            </li>
            <li className="mt-3">
              <i className="bi bi-bell-fill"></i>
              <a className="ml-3 hover:underline" href="#sobre">
                Central de notificações
              </a>
            </li>
          </ul>
          {/* Separador dentro do container */}
          <div className="border-gray-600 border-t my-4"></div>

          {/* Segunda lista */}
          <ul className="text-white">
            <li className="mt-3">
              <i className="bi bi-house-door-fill"></i>
              <a className="ml-3 hover:underline" href="#home">
                Minha conta
              </a>
            </li>
            <li className="mt-3">
              <i className="bi bi-person-fill"></i>
              <a className="ml-3 hover:underline" href="#sobre">
                Meus Dados
              </a>
            </li>
            <li className="mt-3">
              <i className="bi bi-basket3-fill"></i>
              <a className="ml-3 hover:underline" href="#servicos">
                Meus pedidos
              </a>
            </li>
            <li className="mt-3">
              <i className="bi bi-wallet-fill"></i>
              <a className="ml-3 hover:underline" href="#contato">
                Carteira
              </a>
            </li>
            <li className="mt-3">
              <i className="bi bi-hand-thumbs-up-fill"></i>
              <a className="ml-3 hover:underline" href="#sobre">
                Avaliações
              </a>
            </li>
            <li className="mt-3">
              <i className="bi bi-headset"></i>
              <a className="ml-3 hover:underline" href="#sobre">
                Atendimento ao cliente
              </a>
            </li>
            <li className="mt-3">
              <i className="bi bi-envelope-paper-fill"></i>
              <a className="ml-3 hover:underline" href="#sobre">
                Protocolos
              </a>
            </li>
            <li className="mt-3">
              <i className="bi bi-heart-fill"></i>
              <a className="ml-3 hover:underline" href="#sobre">
                Favoritos
              </a>
            </li>
            <li className="mt-3">
              <i className="bi bi-gift-fill"></i>
              <a className="ml-3 hover:underline" href="#sobre">
                Sorteio
              </a>
            </li>
            <li className="mt-3">
              <i className="bi bi-bell-fill"></i>
              <a className="ml-3 hover:underline" href="#sobre">
                Central de notificações
              </a>
            </li>
          </ul>
        </div>

        {/* Botões dentro do menu (visíveis apenas quando o menu está aberto) */}
        {isOpen && (
          <div className="m-4">
            <button className="rounded-md bg-orange-600 text-white text-3xl py-2 w-full">
              ENTRE
            </button>
            <button className="rounded-md mt-2 text-white text-3xl py-2 w-full">
              CADASTRE-SE
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default HamburgerMenu;
