//Contemos aqui diversos acessos rapidos que fica localizado a baixo do Header
import React from "react";

function SubHeader() {
  return (
    <div className="bg-orange-500 text-white text-center">
      <div className="ml-[9%] mr-[9%] p-2 ">
        <nav className="flex flex-wrap items-center">
          <strong className="">
            <a className="hover:underline" href="">
              DEPARTAMENTOS
            </a>
            <span className="border-1 m-2  border-white"></span>
            <a className="hover:underline" href="">
              CUPONSMONTE SEU PC
            </a>
            <span className="border-1 m-2 border-white"></span>
            <a className="hover:underline" href="">
              OFERTAS DO DIA
            </a>
            <span className="border-l m-2 border-white"></span>
            <a className="hover:underline" href="">
              KBM! GAMING
            </a>
            <span className="border-l m-2 border-white"></span>
            <a className="hover:underline" href="">
              LOJAS OFICIAS
            </a>
            <span className="border-l m-2 border-white"></span>
            <a className="hover:underline" href="">
              HARDWARE
            </a>
            <span className="border-l m-2 border-white"></span>
            <a className="hover:underline" href="">
              COMPUTADORES
            </a>
            <span className="border-l m-2 border-white"></span>
            <a className="hover:underline" href="">
              PERIFÉRICOS
            </a>
            <span className="border-l m-2 border-white"></span>
            <a className="hover:underline" href="">
              FRETE GRATIS
            </a>
            
          </strong>
        </nav>
      </div>
    </div>
  );
}

export default SubHeader;
