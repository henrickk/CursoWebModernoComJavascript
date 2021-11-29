function trataeErroELancar(erro) {
  //throw new Error('O Tal do erro bla, bla, bla...')
  //throw 10
  //throw true
  //throw 'Mensagem'
  throw {
    nome: erro.name,
    msg: erro.menssagem,
    date: new Date
  }
}

function imprimirNomeGritado(obj) {
  try {
    console.log(obj.name.toUpperCase() + '!!!')
  } catch (e) {
    trataeErroELancar(e)
  } finally {
    console.log('Final')
  }
}

const obj = { nome: 'Henrick' }
imprimirNomeGritado(obj)
