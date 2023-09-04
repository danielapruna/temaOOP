// Ex. 1

class Masina {
  constructor(marca, model, culoare, kilometraj) {
    this.marca = marca;
    this.model = model;
    this.culoare = culoare;
    this.kilometraj = kilometraj;
  }
  
  get proprietati() {
    return `Masina[marca = ${this.marca} , model = ${this.model} , culoare = ${this.culoare} , kilometraj = ${this.kilometraj}]`;
  }
}

function main() {
  const masina1 = new Masina("Volvo", "XC-60", "Negru", "234 000");
  const masina2 = new Masina("Mazda", "CX-5", "Verde", "111 000");
  const masina3 = new Masina("Dacia", "Biggster", "Albastru", "20 000");

  console.log(masina1.proprietati);
  console.log(masina2.proprietati);
  console.log(masina3.proprietati);
}

main();

//Ex. 2

class MasinaDeCurse extends Masina {
  constructor(marca , model , culoare , kilometraj) {
    super(marca , model , culoare , kilometraj)
  }


  participaLaCampionat(pozitiaInCampionat) {
    if (pozitiaInCampionat > 0) {
      console.log(`Am castigat locul ${pozitiaInCampionat}`);
    } else {
      console.log("Nu am castigat nici un premiu");
    }
  }
}

function anotherFunction() {
  const masinaCastigatoare = new MasinaDeCurse("Toyota", "Turbo", "Rosu", "100 000");
  const masinaNecastigatoare = new MasinaDeCurse("Toyota", "Turbo", "Galben", "120 000");

masinaCastigatoare.participaLaCampionat(2);
masinaNecastigatoare.participaLaCampionat(-1);

  // console.log(masinaCastigatoare.proprietati);
  // console.log(masinaNecastigatoare.proprietati);

}

anotherFunction();
