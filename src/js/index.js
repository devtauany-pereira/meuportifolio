/*
        objetivo 1 - quando o usuario clicar no botao de mostrar mais  deve abrir os projetos que estao escondidos no hrml
            passo 1: pegar o botao mostar mais no js pra poder ver quando o usuario clicar em cima dele

            passo 2: identificar o clique no botao

            passo 3: adicionar a classe "ativo" nos projetos escondidos
        
        objetivo 2 - esconder o botao de mostrar mais
            passo 1: pegar o botao e esconder ele

*/

// Objetivo 1 - quando o usuario clicar no botao de mostrar mais  deve abrir os projetos que estao escondidos no html


// Passo 1: pegar o botao mostar mais no js pra poder ver quando o usuario clicar em cima dele

const botaoMostrarProjetos = document.querySelector('.btn-mostrar-projetos');
const projetosInativos = document.querySelectorAll('.projeto:not(.ativo)');

// querySelectorAll procura em todos os elementos a classe projeto

botaoMostrarProjetos.addEventListener('click', () => {
    // passo 3: adicionar a classe "ativo" nos projetos escondidos
    mostrarMaisProjetos();  
    
    // objetivo 2 - esconder o botao de mostrar mais
    // passo 1: pegar o botao e esconder ele

    esconderBotao();
})

function esconderBotao() {
    botaoMostrarProjetos.Projetos.classList.add("remover");
}

function mostrarMaisProjetos() {
    projetosInativos.forEach(projetosInativo => {
        projetosInativo.classList.add('ativo');
    });
}


/* 

SUBINDO O PROJETO PARA O GITHUB
- 


*/