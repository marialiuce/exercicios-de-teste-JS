class ContaBancaria {
    constructor(SaldoInicial){
        this.saldo = SaldoInicial;
    }

    depositar(valor) {
        this.saldo += valor;
        console.log(`Depósito de R$ ${valor} realizado. Saldo atual: R$ ${this.saldo}`);
        return this;
    }

    sacar(valor){
        if(valor > this.saldo){
        console.log(`Saldo insuficiente para sacar R$ ${valor}. Saldo atual: R$ ${this.saldo}`);
        return;
    }
        this.saldo -= valor;
        console.log(`Saque de R$ ${valor} realizado.`);
        return this;
    }

    consultarSaldo(){
        console.log(`Saldo atual: R$ ${this.saldo}`);
    }
}

const minhaConta = new ContaBancaria(1000);
minhaConta.depositar(500);
minhaConta.sacar(200);
minhaConta.consultarSaldo();
     