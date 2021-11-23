const escola = "Cod3r"

console.log(escola.charAt(4))//retorna o carater 5 da sting
console.log(escola.charAt(5))
console.log(escola.charCodeAt(3))//buscar o codigo de 'tal' caractere
console.log(escola.indexOf('3'))// indece do caractere

console.log(escola.substring(1))// passar chamada a patir de um ponto determinado
console.log(escola.substring(0, 3)) // passar chamada a patir de um ponto determinado e terminando em outro

console.log('Escola '.concat(escola).concat('!'))// sting concatenando com uma variável e concatenando com outra string
/*ou*/ console.log('Escola ' + escola + '!')

console.log(escola.replace(3, 'e'))

console.log('Ana,Maria,Pedro'.split(','))//split para quebrar em um array 