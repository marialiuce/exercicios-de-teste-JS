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

const pcGamer = new Computador('Razer', 32, 'AMD Ryzen 9');
const pcTrabalho = new Computador('HP', 16, 'Intel Core i5');
pcGamer.exibirEspecificacoes();
pcTrabalho.exibirEspecificacoes();
