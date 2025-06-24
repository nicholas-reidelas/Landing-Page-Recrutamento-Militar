let lista = [
    {
        "titulo": "aeronautica",
        "link": "sites/formação_sargento_força_aerea.html",
        "imagem": "imagens/foto-forca-aerea.jpg",
        "texto": "Concurso de Formação de Sargentos da Força Aérea"
    },
    {
        "titulo": "exercito",
        "link": "sites/formação_brigadeiro_exercito.html",
        "imagem": "imagens/foto-brigadeiro.jpg",
        "texto": "Concurso de Formação de Brigadeiros do Exército"
    },
    {
        "titulo": "marinha",
        "link": "sites/formação_praça_marinha.html",
        "imagem": "imagens/foto-marinha.jpg",
        "texto": "Concurso de Formação de Praças da Marinha"
    }
]

function CriarCard(item) {

    if (document.getElementById("select-legal").value == item.titulo || document.getElementById("select-legal").value == "") {
        document.getElementById("lista-cards").innerHTML += `
    <li>
        <div class="fundo-bonito-forca-aerea">
            <img src="${item.imagem}" alt="foto-aerea" width="400px">
                <a href="${item.link}">${item.texto}
                </a>
        </div>
    </li>
    `
    }
}

function CarregarCards() {
    document.getElementById("lista-cards").innerHTML = ""
    lista.forEach(item => CriarCard(item))
}

