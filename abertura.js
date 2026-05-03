// Função para esconder o preloader após o carregamento total
window.addEventListener("load", function() {
    var loader = document.getElementById("preloader");
    
    // Pequeno delay para garantir que a transição seja suave
    setTimeout(function() {
        loader.classList.add("loader-hidden");
    }, 500); 
});