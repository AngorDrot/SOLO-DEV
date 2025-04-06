/* 
  O que precisamos fazer? - quando clicar no botão do personagem na lista temos que marcar o botão como selecionado e mostrar o personagem correspondente

    OBJETIVO 1 - quando clicar no botão do personagem na lista, marcar o botao como selecionado 
        passo 1 - pegar os botões no JS pra poder verificar quando o usuário clicar em cima de um deles
        passo 2 - adicionar a classe "selecionado" no botão que o usuário clicou
        passo 3 - verificar se já existe um botão selecionado, se sim, devemos remover a seleção dele 

    OBJETIVO 2 - quando clicar no botão do personagem mostrar as informações do personagem
        passo 1 - pegar os personagens no JS pra poder mostrar ou esconder ele
        passo 2 - adicionar a classe "selecionado" no personagem que o usuário selecionou
        passo 3 - verificar se já exista um personagem selecionado, se sim, devemos remover a seleção dele 
*/

const botoes = document.querySelectorAll('.botao');
const personagens = document.querySelectorAll(".personagem");

botoes.forEach((botao, indice) => {
    botao.addEventListener("click", () => {
        const botaoSelecionado = document.querySelector(".botao.selecionado");
        botaoSelecionado.classList.remove("selecionado");
        botao.classList.add("selecionado");

        const personagemSelecionado = document.querySelector(".personagem.selecionado");
        personagemSelecionado.classList.remove("selecionado");
        personagens[indice].classList.add("selecionado");
    });
});


window.addEventListener("DOMContentLoaded", () => {
    const audio = document.getElementById("musica-fundo");
    const btnMusica = document.getElementById("btn-musica");
    const controleVolume = document.getElementById("controle-volume");

    // Volume inicial
    audio.volume = 0.7;

    // Atualiza ícone do botão
    const updateIcon = () => {
        btnMusica.textContent = audio.paused ? "🔇" : "🎵";
    };

    // Clique no botão de música
    btnMusica.addEventListener("click", () => {
        audio.paused ? audio.play() : audio.pause();
        updateIcon();
    });

    // Controle de volume
    controleVolume.addEventListener("input", () => {
        audio.volume = controleVolume.value;
    });

    updateIcon();
});
