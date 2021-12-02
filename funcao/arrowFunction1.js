let dobro = function (a) {
  return 2 * a
}
console.log(dobro(Math.PI))

dobro = (a) => {
  return 2 * a
}
console.log(dobro(Math.PI))

dobro = a => 2 * a //return implícito
console.log(dobro(Math.PI))


let ola = function () {
  return 'Olá'
}

// Função refatorada 
ola = () => 'Olá'
ola = _ => 'Olá' //ainda possui um parametro

console.log(ola())