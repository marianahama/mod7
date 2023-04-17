const valorCampoA = document.getElementById('campoA')
const valorCampoB = document.getElementById('campoB')
const sucesso = 'B é maior que A, uhul!'
const fail = 'fail, B é menor que A'

let form = document.getElementById('valores')

form.addEventListener('submit', function(e) {
  console.log('evento: ', e)
  validavalor(valorCampoA.value, valorCampoB.value)
})

function validavalor(campoA, campoB) {
  let valorcerto = campoB - campoA
  if(valorcerto >= 1) return alert(sucesso)
  else return alert(fail)
}