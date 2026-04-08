
const links = document.querySelectorAll('.menu a')
const secoes = document.querySelectorAll('.secao')
const titulo = document.getElementById('titulo')
const subtitulo = document.getElementById('subtitulo')

links.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault()

        const id = link.getAttribute('data-section')

        secoes.forEach(secao => {
            secao.classList.remove('ativa')
        })

        document.getElementById(id).classList.add('ativa')

        links.forEach(l => l.classList.remove('ativo'))
        link.classList.add('ativo')

        if (id === 'portfolio') {
            titulo.textContent = 'Meu Trabalho'
            subtitulo.textContent = 'IMpresso e Digital'
        } else {
            titulo.textContent = 'Luís R. Silva'
            subtitulo.textContent = 'Designer Gráfico & Web'
        }
    })
})
