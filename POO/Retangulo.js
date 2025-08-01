class Retangulo {
    constructor(altura, largura){
        this.altura = altura;
        this.largura = largura;
    }

    get area(){
        return this.altura * this.largura;
    }

    get perimetro(){
        return 2 * (this.altura + this.largura);
    }
}

const meuRetangulo = new Retangulo(5, 10);

console.log(`Área do retângulo: ${meuRetangulo.area}`);
console.log(`Perímetro do retângulo: ${meuRetangulo.perimetro}`);