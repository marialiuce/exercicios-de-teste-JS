class Animal {
    fazerSom(){
        console.log("O animal faz um som");
    }
}

class Cachorro extends Animal {
    fazerSom(){
        console.log("O cachorro faz au au");
    }
}

class Gato extends Animal {
    fazerSom(){
        console.log("O gato faz miau");
    }
}

const animalGenerico = new Animal();

function fazerAnimalFazerSom(animal){
    animal.fazerSom();
}

fazerAnimalFazerSom(animalGenerico);
fazerAnimalFazerSom(new Cachorro());
fazerAnimalFazerSom(new Gato());



