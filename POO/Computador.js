class Computador{
    constructor(marca, memoriaRam, processador){
        this.marca = marca;
        this.memoriaRam = memoriaRam;
        this.processador = processador;
    }

    exibirEspecificacoes(){
        console.log(`Marca: ${this.marca}`);
        console.log(`Memória RAM: ${this.memoriaRam} GB`);
        console.log(`Processador: ${this.processador}`);
}
}

const computador1 = new Computador('Dell', 16, 'Intel Core i7');
computador1.exibirEspecificacoes();