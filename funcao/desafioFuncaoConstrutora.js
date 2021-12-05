/*    ///// transformando class em uma função construtora
        ///Modelo
class Pessoa {
  constructor(nome) {
    this.nome = nome
  }
  falar() {
    console.log(`Meu nome é ${this.nome}`)
  }
}
*/


            /*Exercício*/
//////////////////////////////////////
function Pessoa(nome) {
  this.nome = nome

  this.falar = function () {
    console.log(`Meu nome é ${this.nome}`)
  }
}

const p1 = new Pessoa('Henrick')
p1.falar()
console.log(p1.nome)