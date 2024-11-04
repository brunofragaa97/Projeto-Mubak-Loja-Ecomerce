import React, { useState, useEffect } from "react";

function Carrossel() {
  const [imagemAtual, setImagemAtual] = useState("/imagens-referencia/1729888684.gif");
  const [indiceAtual, setIndiceAtual] = useState(0); 
  const [progresso, setProgresso] = useState(0); // Estado para armazenar o progresso

  const imagens = [
    "/imagens-referencia/1729888684.gif", 
    "/imagens-referencia/1730460826.jpg", 
    "/imagens-referencia/1730375902.jpg"
  ];

  // Função para passar para a próxima imagem
  function passarImagem() {
    const proximoIndex = (indiceAtual + 1) % imagens.length;
    setImagemAtual(imagens[proximoIndex]);
    setIndiceAtual(proximoIndex);
    setProgresso(0); // Reinicia o progresso ao mudar a imagem
  }

  // Função para voltar para a imagem anterior
  function voltarImagem() {
    const anteriorIndex = (indiceAtual - 1 + imagens.length) % imagens.length;
    setImagemAtual(imagens[anteriorIndex]);
    setIndiceAtual(anteriorIndex);
    setProgresso(0); // Reinicia o progresso ao mudar a imagem
  }

  useEffect(() => {
    const intervalo = setInterval(() => {
      passarImagem();
    }, 5000); // Troca a imagem a cada 5 segundos

    const progressoIntervalo = setInterval(() => {
      setProgresso(prev => {
        if (prev >= 100) {
          clearInterval(progressoIntervalo);
          return 0; // Reseta o progresso ao atingir 100%
        }
        return prev + (100 / 50); // Incrementa o progresso
      });
    }, 100); // Atualiza o progresso a cada 100ms

    return () => {
      clearInterval(intervalo);
      clearInterval(progressoIntervalo);
    };
  }, [indiceAtual]);

  // Função para selecionar uma imagem manualmente
  function selecionarImagem(index) {
    setImagemAtual(imagens[index]);
    setIndiceAtual(index);
    setProgresso(0); // Reinicia o progresso ao selecionar manualmente uma imagem
  }

  return (
    <div className="relative">
      <img
        src={imagemAtual}
        alt="Carrossel"
        className="w-full h-auto"
      />

      {/* Setas de navegação */}
      <div className="absolute left-5 top-1/2 transform -translate-y-1/2">
        <button 
          className="bg-gray-800 text-white rounded-full p-2 hover:bg-orange-600 hover:text-3xl"
          onClick={voltarImagem}>
          &#10094; {/* Seta esquerda */}
        </button>
      </div>
      <div className="absolute right-5 top-1/2 transform -translate-y-1/2">
        <button 
          className="bg-gray-800 text-white rounded-full p-2 hover:bg-orange-600 hover:text-3xl"
          onClick={passarImagem}>
          &#10095; {/* Seta direita */}
        </button>
      </div>
      
      {/* Botões de seleção como barra de carregamento */}
      <div className="flex absolute left-1/2 transform -translate-x-1/2 bottom-10 space-x-1">
        {imagens.map((imagem, index) => (
          <div className="p-1" key={`botao-${index}`}>
            <button
              className="relative w-10 h-2 bg-gray-800 rounded-full"
              onClick={() => selecionarImagem(index)}
            >
              {/* Barra de carregamento dentro do botão */}
              <div
                style={{
                  width: indiceAtual === index ? `${progresso}%` : '0%',
                  height: '100%',
                  backgroundColor: indiceAtual === index ? 'orange' : 'transparent',
                  transition: 'width 0.1s'
                }}
                className="rounded-full"
              />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Carrossel;
