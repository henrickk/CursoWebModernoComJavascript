 function soBoaNoticia(nota) {
   if(nota >= 7) {
     console.log('Aprovado com ' + nota)
   } 
 }

soBoaNoticia(8.1)
soBoaNoticia(6.1)

function seForVedadeEuFalo(valor) {
  if(valor) {
    console.log('É verdade...' + valor)
  }
} 

seForVedadeEuFalo()
seForVedadeEuFalo(null)
seForVedadeEuFalo(undefined)
seForVedadeEuFalo(NaN)
seForVedadeEuFalo('')
seForVedadeEuFalo(0)
seForVedadeEuFalo(-1)
seForVedadeEuFalo(' ')
seForVedadeEuFalo('?')
seForVedadeEuFalo([])
seForVedadeEuFalo([1, 2])
seForVedadeEuFalo({})