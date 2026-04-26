const links = document.querySelectorAll('.menu a');
const secoes = document.querySelectorAll('.secao');
const titulo = document.getElementById('titulo');
const subtitulo = document.getElementById('subtitulo');

// Função centralizada para trocar as seções
function ativarSecao(id) {
    const secaoAlvo = document.getElementById(id);
    
    // 1. Verifica se a seção existe antes de tentar mexer nela
    if (!secaoAlvo) {
        console.warn(`A seção com id "${id}" não foi encontrada.`);
        return;
    }

    // 2. Esconde todas as seções
    secoes.forEach(secao => secao.classList.remove('ativa'));

    // 3. Mostra a seção clicada
    secaoAlvo.classList.add('ativa');

    // 4. Atualiza a classe 'ativo' no menu
    links.forEach(l => {
        l.classList.remove('ativo');
        if (l.getAttribute('data-section') === id) {
            l.classList.add('ativo');
        }
    });

    // 5. Altera os textos do Hero (Nome e Cargo)
    if (id === 'portfolio') {
        titulo.textContent = 'Meu Trabalho';
        subtitulo.textContent = 'Impresso e Digital';
    } else {
        titulo.textContent = 'Luís R. Silva';
        subtitulo.textContent = 'Designer Gráfico & Web';
    }
}

// Evento de clique para os links
links.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const id = link.getAttribute('data-section');
        
        // Atualiza a URL (opcional, mas bom para SEO)
        history.pushState(null, null, `#${id}`);
        
        ativarSecao(id);
    });
});

// Garante que se o usuário der F5, a página carregue na seção certa
window.addEventListener('load', () => {
    const hash = window.location.hash.replace('#', '');
    if (hash) {
        ativarSecao(hash);
    } else {
        // Se não tiver nada na URL, ativa a seção 'sobre' por padrão
        ativarSecao('sobre');
    }
});