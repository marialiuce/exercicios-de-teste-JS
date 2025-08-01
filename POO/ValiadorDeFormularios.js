class RegraDeValidacao {
    constructor() {
        if (this.constructor === RegraDeValidacao) {
            throw new Error("Classe abstrata não pode ser instanciada diretamente.");
        }
    }
    validar(valor){
        throw new Error("Método 'validar' deve ser implementado na subclasse.");
    }
    getMensagemErro() {
        throw new Error("Método 'getMensagemErro' deve ser implementado na subclasse.");
    }
}

class RegraObrigatoria extends RegraDeValidacao {
    validar(valor) {
        // Se o valor for nulo, undefined ou uma string vazia, retorna false.
        // Se for uma string, verifica se não é vazia ou só contém espaços.
        if (!valor || typeof valor !== 'string' || valor.trim() === '') {
            return false;
        }
        return true;
    }
    getMensagemErro() {
        return "Este campo é obrigatório.";
    }
}

class RegraTamanhoMinimo extends RegraDeValidacao {
    constructor(tamanhoMinimo) {
        super();
        this.tamanhoMinimo = tamanhoMinimo;
    }
    validar(valor) {
        // Esta regra só se aplica se o valor for uma string.
        // Se não for, não é responsabilidade dela validar, então retornamos true.
        if (typeof valor !== 'string') return true; 
        return valor.length >= this.tamanhoMinimo;
    }
    getMensagemErro() {
        return `Este campo deve ter no mínimo ${this.tamanhoMinimo} caracteres.`;
    }
}

class RegraEmail extends RegraDeValidacao {
    validar(valor) {
        if (typeof valor !== 'string' || valor.trim() === '') return true;
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(valor);
    }
    getMensagemErro() {
        return "Por favor, insira um email válido.";
    }
}


class ValidadorDeCampo{ 
    constructor(regras){
        this.regras = regras;
    }
    validar(valor) {
        const erros = [];
        for (const regra of this.regras) {
            if (!regra.validar(valor)) {
                erros.push(regra.getMensagemErro());
            }
        }
        return erros;
    }
}

class ValidadorDeFormularios { 
    constructor() {
        this.campos = {};
    }

    adicionarCampo(nome, validador) {
        this.campos[nome] = validador;
    }

    validarFormulario(dados) {
        const errosDoFormulario = {};
        for (const nomeDoCampo in this.campos) {
            const validador = this.campos[nomeDoCampo];
            const valorDoCampo = dados[nomeDoCampo];
            const mensagensDeErro = validador.validar(valorDoCampo);
            if (mensagensDeErro.length > 0) {
                errosDoFormulario[nomeDoCampo] = mensagensDeErro;
            }
        }
        return errosDoFormulario;
    }
}

const validadorDeFormulario = new ValidadorDeFormularios();
validadorDeFormulario.adicionarCampo("nome", new ValidadorDeCampo([new RegraObrigatoria(), new RegraTamanhoMinimo(3)]));
validadorDeFormulario.adicionarCampo("email", new ValidadorDeCampo([new RegraObrigatoria(), new RegraEmail()]));
validadorDeFormulario.adicionarCampo("senha", new ValidadorDeCampo([new RegraObrigatoria(), new RegraTamanhoMinimo(6)]));
validadorDeFormulario.adicionarCampo("bio", new ValidadorDeCampo([new RegraTamanhoMinimo(10)]));

const dadosInvalidos = {
    nome: "Jo",
    email: "joao@exemplo.com",
    senha: "123"
};

const erros1 = validadorDeFormulario.validarFormulario(dadosInvalidos);
console.log("Teste com dados inválidos:", erros1);


const dadosComCampoFaltando = {
    email: "emailinvalido",
    senha: "senhaforte123"
};

const erros2 = validadorDeFormulario.validarFormulario(dadosComCampoFaltando);
console.log("Teste com campo faltando:", erros2);




