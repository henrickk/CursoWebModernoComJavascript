//ex1
const soma = function (x, y) {
  return x + y
}

//ex2
const imprimirResultado = function (a, b, operacao = soma) {
  console.log(operacao(a, b))
}
imprimirResultado(3, 4)
imprimirResultado(3, 4, soma)
imprimirResultado(3, 4, function (x, y) {//ex3
  return x - y
})

//ex4
imprimirResultado(3, 4, (x, y) => x * y) 

//ex5
const pessoa = {
  falar: function () {
    console.log('Opa')
  }
}
pessoa.falar()
