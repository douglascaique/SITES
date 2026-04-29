function toggleMenu() {
    var menu = document.querySelector('.menu');
    menu.classList.toggle('show');
}

document.addEventListener("DOMContentLoaded", function() {
    // Adiciona um atraso de 3 segundos antes de remover a classe 'loading'
    setTimeout(function() {
        document.body.classList.remove('loading');
    }, 2000); // 3000 milissegundos = 3 segundos
});

// Adiciona a classe 'loading' ao body quando a página começa a carregar
document.body.classList.add('loading');