//Fução sem retorno
function imprimirSoma(a, b) {
  console.log(a + b)
}

imprimirSoma(2, 3)// retorna o resultado da função
imprimirSoma(2)//NaN
imprimirSoma(2, 10, 4, 5, 6, 7, 8)//Atribui independente se tiver parametros ou não


//Função com retorno
function soma(a, b = 0) {
  return a + b
}

console.log(soma(2, 3))
console.log(soma(2))
console.log(soma())