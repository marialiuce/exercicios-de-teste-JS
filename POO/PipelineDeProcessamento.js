class EtapaDoPipeline {
    constructor(){
        if (this.constructor === EtapaDoPipeline) {
            throw new Error("Classe abstrata não pode ser instanciada diretamente.");
        }
    }
    processar(dados) {
        throw new Error("Método 'processar' deve ser implementado na subclasse.");
    }
}

class EtapaDeFiltro extends EtapaDoPipeline {
    constructor(condicao) {
        super();
        this.condicao = condicao;
    }
    processar(dados) {
        return dados.filter(this.condicao);
    }
}

class EtapaDeMapeamento extends EtapaDoPipeline {
    constructor(funcaoMapeamento) {
        super();
        this.funcaoMapeamento = funcaoMapeamento;
    }
    processar(dados) {
        return dados.map(this.funcaoMapeamento);
    }
}

class EtapaDeOrdenacao extends EtapaDoPipeline {
    processar(dados) {
        return [...dados].sort(this.comparador);
    }
}

class Pipeline{
    constructor(etapas = []) {
        this.etapas = etapas;
    }

    adicionarEtapa(etapa) {
        this.etapas.push(etapa);
    }

    processar(dados) {
        return this.etapas.reduce((dadosProcessados, etapa) => {
            return etapa.processar(dadosProcessados);
        }, dados);
    }
}

const pipeline = new Pipeline([
    new EtapaDeFiltro(item => item.ativo),
    new EtapaDeMapeamento(item => ({ nome: item.nome, preco: item.preco * 1.1 })),
    new EtapaDeOrdenacao((a, b) => b.preco - a.preco)
]);

const dados = [
    { nome: "Produto A", preco: 100, ativo: true },
    { nome: "Produto B", preco: 50, ativo: false },
    { nome: "Produto C", preco: 200, ativo: true },
    { nome: "Produto D", preco: 150, ativo: true }
];

const dadosProcessados = pipeline.processar(dados);
console.log(dadosProcessados);





