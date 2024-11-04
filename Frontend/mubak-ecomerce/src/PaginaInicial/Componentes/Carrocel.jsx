import React, { useState, useEffect } from "react"; // Importa React e os hooks useState e useEffect
import gifImage from '/src/assets/1729888684.gif';
import jpgImage1 from '/src/assets/1730460826.jpg';
import jpgImage2 from '/src/assets/1730375902.jpg';
// Início do componente Carrossel
function Carrossel() {
  // Inicializa a variável imagemAtual com a imagem padrão
  const [imagemAtual, setImagemAtual] = useState(gifImage);
  
  // Inicializa a variável indiceAtual como 0 para a primeira imagem
  const [indiceAtual, setIndiceAtual] = useState(0); 
  
  // Inicializa a variável progresso como 0 para o controle da barra de progresso
  const [progresso, setProgresso] = useState(0); 

  // Cria uma lista de imagens para o carrossel
  const imagens = [
   gifImage,
   jpgImage1,
   jpgImage2
  ];

  // Função para passar para a próxima imagem
  function passarImagem() {
    // Calcula o índice da próxima imagem
    const proximoIndex = (indiceAtual + 1) % imagens.length; // Se chegar ao final, volta para o início
    // Atualiza a imagem atual e o índice atual
    setImagemAtual(imagens[proximoIndex]);
    setIndiceAtual(proximoIndex);
    // Reinicia o progresso ao mudar a imagem
    setProgresso(0);
  }

  // Função para voltar para a imagem anterior
  function voltarImagem() {
    // Calcula o índice da imagem anterior
    const anteriorIndex = (indiceAtual - 1 + imagens.length) % imagens.length; // Garante que não seja negativo
    // Atualiza a imagem atual e o índice atual
    setImagemAtual(imagens[anteriorIndex]);
    setIndiceAtual(anteriorIndex);
    // Reinicia o progresso ao mudar a imagem
    setProgresso(0);
  }


  // Hook que executa efeitos colaterais
  useEffect(() => {
    // Cria um intervalo para trocar a imagem a cada 5 segundos
    const intervalo = setInterval(() => {
      passarImagem(); // Chama a função para passar para a próxima imagem
    }, 7000); // Tempo de 5 segundos

    // Cria um intervalo para atualizar o progresso da barra
    const progressoIntervalo = setInterval(() => {
      setProgresso(prev => {
        // Verifica se o progresso já chegou a 100
        if (prev >= 100) {
          clearInterval(progressoIntervalo); // Limpa o intervalo
          return 0; // Reseta o progresso
        }
        // Incrementa o progresso
        return prev + (100 / 70); // Aumenta 2% a cada 100ms
      });
    }, 100); // Atualiza a cada 100ms

    // Função de limpeza para quando o componente for desmontado
    return () => {
      clearInterval(intervalo); // Limpa o intervalo de troca de imagem
      clearInterval(progressoIntervalo); // Limpa o intervalo de progresso
    };
  }, [indiceAtual]); // O efeito depende do índice atual da imagem

  // Função para selecionar uma imagem manualmente
  function selecionarImagem(index) {
    // Atualiza a imagem atual e o índice com a imagem escolhida
    setImagemAtual(imagens[index]);
    setIndiceAtual(index);
    // Reinicia o progresso ao selecionar manualmente uma imagem
    setProgresso(0);
  }

  // Início do retorno do componente
  return (
    <div className="relative"> {/* Contêiner relativo para os elementos do carrossel */}
      <img
        src={imagemAtual} // Define a imagem atual a ser exibida
        alt="Carrossel" // Texto alternativo para acessibilidade
        className="w-full h-auto" // Define a largura e altura da imagem
      />

      {/* Setas de navegação */}
      <div className="absolute left-5 top-1/2 transform -translate-y-1/2"> {/* Posiciona a seta esquerda */}
        <button 
          className="bg-gray-800 text-white rounded-full p-2 hover:bg-orange-600 hover:text-3xl" // Estilo do botão
          onClick={voltarImagem}> {/* Chama a função para voltar a imagem */}
          &#10094; {/* Seta esquerda */}
        </button>
      </div>
      <div className="absolute right-5 top-1/2 transform -translate-y-1/2"> {/* Posiciona a seta direita */}
        <button 
          className="bg-gray-800 text-white rounded-full p-2 hover:bg-orange-600 hover:text-3xl transition-opacity" // Estilo do botão
          onClick={passarImagem}> {/* Chama a função para passar a imagem */}
          &#10095; {/* Seta direita */}
        </button>
      </div>
      
      {/* Botões de seleção como barra de carregamento */}
      <div className="flex absolute left-1/2 top-[90%] transform -translate-x-1/2 bottom-10 space-x-1"> {/* Posiciona os botões de seleção */}
        {imagens.map((imagem, index) => ( // Para cada imagem na lista
          <div className="p-1" key={`botao-${index}`}> {/* Cria um contêiner para o botão */}
            <button
              className="relative w-14 h-3 bg-gray-800 rounded-full" // Estilo do botão de seleção
              onClick={() => selecionarImagem(index)} // Chama a função de seleção ao clicar
            >
              {/* Barra de carregamento dentro do botão */}
              <div
                style={{
                  width: indiceAtual === index ? `${progresso}%` : '0%', // Define a largura da barra de progresso
                  height: '100%', // Altura total do botão
                  backgroundColor: indiceAtual === index ? 'orange' : 'transparent', // Cor da barra de progresso
                  // Adiciona uma transição suave na largura
                }}
                className="rounded-full" // Estilo da barra de carregamento
              />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

// Exporta o componente para ser usado em outras partes da aplicação
export default Carrossel; 
