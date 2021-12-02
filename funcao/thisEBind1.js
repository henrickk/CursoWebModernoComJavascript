const pessoa = {
  saudacao: 'Bom dia!',
  falar() {
    console.log(this.saudacao)
  }
}// retorna 'Bom dia!'

pessoa.falar()
const falar = pessoa.falar
falar() // conflito entre paradigmas: funcional e OO
//retorna undefined

const falarDePessoa = pessoa.falar.bind(pessoa)
falarDePessoa()//retorna 'Bom dia!'
