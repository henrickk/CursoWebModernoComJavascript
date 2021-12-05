class Pessoa {
  constructor(nome) {
    this.nome = nome
  }
  falar() {
    console.log(`Meu nome é ${this.nome}`)
  }
}

const p1 = new Pessoa('Henrick')
p1.falar()



// Exemplo de função construtora
const criarPessoa = nome => {
  return {
    falar: () => console.log(`Meu nome é ${nome}`)
  }
}

const p2 = criarPessoa('Jhon')
p2.falar()