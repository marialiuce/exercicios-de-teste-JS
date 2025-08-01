class Arma{
    constructor(danoBase){
        this.danoBase = danoBase;
    }
    atacar(){
        console.log(`Atacando com dano base de ${this.danoBase}`);
    }
}

class Espada extends Arma{
    constructor(danoBase, bonusDeForca){
        super(danoBase);
        this.bonusDeForca = bonusDeForca;
    }
    atacar(){
        const danoTotal = this.danoBase + this.bonusDeForca;
        console.log(`Atacando com dano base de ${this.danoBase} e bônus de força de ${this.bonusDeForca}, totalizando ${danoTotal}`);
    }
}

class Arco extends Arma{
    constructor(danoBase,distancia){
        super(danoBase);
        this.distancia = distancia;
    }
    atacar() {
        let danoCalculado = this.danoBase;
        if (this.distancia <= 10) {
            console.log("Ataque a curta distância! Dano dobrado!");
            danoCalculado = this.danoBase * 2;
        }else{
        console.log(`Arco ataca a uma distância de ${this.distancia}, causando ${danoCalculado} de dano.`);
        }
    }
}

function realizarAtaque(arma){
    console.log(`--- Testando ${arma.constructor.name} ---`);
    arma.atacar();
}

realizarAtaque(new Arma(2));
realizarAtaque(new Espada(10, 5));
realizarAtaque(new Arco(7, 25)); 
realizarAtaque(new Arco(7, 8)); 



