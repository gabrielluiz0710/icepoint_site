// Seleciona o header
const header = document.getElementById('header');

// Define a posição inicial do scroll
let lastScrollTop = 0;
let delta = 5; // Quantidade mínima de rolagem necessária para mostrar ou ocultar o header
let navbarHeight = header.offsetHeight; // Altura do header

// Função para verificar a direção do scroll e ajustar a visibilidade do header
window.addEventListener('scroll', function() {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (Math.abs(lastScrollTop - scrollTop) <= delta) {
        // Não há movimento suficiente para alterar a visibilidade do header
        return;
    }

    if (scrollTop > lastScrollTop && scrollTop > navbarHeight) {
        // Scroll para baixo e a rolagem é maior que a altura do header
        header.style.top = `-${navbarHeight}px`; // Oculta o header
    } else {
        // Scroll para cima ou a rolagem é menor ou igual à altura do header
        header.style.top = "0"; // Exibe o header
    }

    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // Garante que lastScrollTop não seja um número negativo
});
