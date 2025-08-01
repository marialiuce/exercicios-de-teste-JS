class Exportador{
    constructor(){
        if(this.constructor === Exportador){
            throw new Error("Classe abstrata não pode ser instanciada diretamente.");
        }
    }

    exportar(dados){
        throw new Error("Método 'exportar' deve ser implementado na subclasse.");
    }
}

class CSV extends Exportador{
    exportar(dados){
        const linhas = dados.map(obj => Object.values(obj).join(","));
        return linhas.join("\n");
    }
}

class JSON extends Exportador{
    exportar(dados){
        return JSON.stringify(dados, null, 2);
    }
}

class XML extends Exportador{
    exportar(dados){
        const xml = dados.map(obj => {
            const tags = Object.entries(obj).map(([chave, valor]) => `<${chave}>${valor}</${chave}>`);
            return `<item>${tags.join("")}</item>`;
        });
        return `<dados>${xml.join("")}</dados>`;
    }
}


function exportarDados(dados, exportador) {
    const dadosExportados = exportador.exportar(dados);
    console.log(dadosExportados);
}


const dados = [
    { nome: "Alice", idade: 30, cidade: "São Paulo" },
    { nome: "Bob", idade: 25, cidade: "Rio de Janeiro" },
    { nome: "Carol", idade: 35, cidade: "Belo Horizonte" }
];

const exportadorCSV = new CSV();
const exportadorJSON = new JSON();
const exportadorXML = new XML();

exportarDados(dados, exportadorCSV);
exportarDados(dados, exportadorJSON);
exportarDados(dados, exportadorXML);

