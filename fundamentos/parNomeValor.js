// par nome/valor
const saudacao = 'Opa' //contexto léxico 1

function exec() {
  const saudacao = 'Falaaa' // constexto léxico 2
  return saudacao
}

// Objetos são gurpos aninhados de pares nome/valor
const cliente = {
  nome: 'Pedro',
  idade: 32,
  peso: 90,
  emdereco:{
    logradouro:'Rua Muito Legal',
    numero: 123
  }
}
console.log(saudacao)
console.log(exec())
console.log(cliente)