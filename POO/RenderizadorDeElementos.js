class ElementoDePagina {
    constructor() {
        if (this.constructor === ElementoDePagina) {
            throw new Error("A classe abstrata 'ElementoDePagina' não pode ser instanciada diretamente.");
        }
    }

    renderizar() {
        throw new Error("Método 'renderizar' deve ser implementado por subclasses.");
    }
}

class Paragrafo extends ElementoDePagina {
    constructor(texto) {
        super();
        this.texto = texto;
    }

    renderizar() {
        return `<p>${this.texto}</p>`;
    }
}

class Imagem extends ElementoDePagina {
    constructor(src, alt) {
        super();
        this.src = src;
        this.alt = alt;
    }

    renderizar() {
        return `<img src="${this.src}" alt="${this.alt}">`;
    }
}

class Link extends ElementoDePagina {
    constructor(href, texto) {
        super();
        this.href = href;
        this.texto = texto;
    }

    renderizar() {
        return `<a href="${this.href}">${this.texto}</a>`;
    }
}

function renderizarElementos(elementos) {
    let htmlFinal = "";
    elementos.forEach(elemento => {
        htmlFinal += elemento.renderizar() + "\n";
    });
    return htmlFinal;
}

const elementos = [
    new Paragrafo("Este é um parágrafo."),
    new Imagem("imagem.jpg", "Uma imagem de um gato"),
    new Link("https://www.google.com", "Visite o Google")
];

console.log("--- PÁGINA RENDERIZADA ---");
const paginaHTML = renderizarElementos(elementos);
console.log(paginaHTML);

try {
    const elementoGenerico = new ElementoDePagina(); 
} catch (error) {
    console.log("\n--- TESTE DE ERRO ---");
    console.error(error.message);
}