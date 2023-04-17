const valorCampoA = document.getElementById('campoA')
const valorCampoB = document.getElementById('campoB')
const sucesso = 'uhul'
const fail = 'fail'

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