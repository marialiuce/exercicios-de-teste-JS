class FormaGeometrica {
    desenhar(){
        console.log("Desenhando forma geométrica");
    }
}

class Quadrado extends FormaGeometrica {
    desenhar(){
        console.log("Desenhando quadrado []");
    }
}

class Circulo extends FormaGeometrica {
    desenhar(){
        console.log("Desenhando círculo ()");
    }
}

const formaGenerica = new FormaGeometrica();

function desenharTodasAsFormas(formas){
    formas.forEach(forma => forma.desenhar());
}

desenharTodasAsFormas([formaGenerica, new Quadrado(), new Circulo()]);

