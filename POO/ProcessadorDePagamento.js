class MetodoDePagamento {
    constructor() { 
        if (this.constructor === MetodoDePagamento) {
            throw new Error("Classe abstrata não pode ser instanciada diretamente.");
        }
    }

    processar(valor) {
        throw new Error("Método 'processar' deve ser implementado na subclasse.");
    }
}

class CartaoDeCredito extends MetodoDePagamento {
    constructor(taxaPercentual) {
        super();
        this.taxaPercentual = taxaPercentual;
    }

    processar(valor) { 
        const taxa = valor * (this.taxaPercentual / 100);
        const valorFinal = valor + taxa;
        console.log(`Processando R$${valor.toFixed(2)} no cartão. Taxa de ${this.taxaPercentual}% aplicada. Total: R$${valorFinal.toFixed(2)}`);
    }
}

class PayPal extends MetodoDePagamento {
    processar(valor) {
        console.log(`Redirecionando para o PayPal para pagamento de R$${valor.toFixed(2)}`);
    }
}

class BoletoBancario extends MetodoDePagamento {
    processar(valor) {
        console.log(`Boleto de R$${valor.toFixed(2)} gerado com vencimento em 3 dias.`);
    }
}

function finalizarCompra(valor, metodoDePagamento) {
    console.log(`--- Finalizando compra de R$${valor.toFixed(2)} ---`);
    metodoDePagamento.processar(valor);
}

const valorDaCompra = 150.75;
const metodoCartao = new CartaoDeCredito(2.5);
const metodoPaypal = new PayPal();
const metodoBoleto = new BoletoBancario();

finalizarCompra(valorDaCompra, metodoCartao);
finalizarCompra(valorDaCompra, metodoPaypal);
finalizarCompra(250.00, metodoBoleto); 