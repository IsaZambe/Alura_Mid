const listaDeTeclas = document.querySelectorAll('.tecla')
const audioATocar = document.querySelectorAll('#som_tecla_')

let contador = 0

// CONDIÇÃO - ENQUANTO

while (contador < listaDeTeclas.length) {
    listaDeTeclas[contador].onClick = tocarSom()
    contador++
}

//FUNÇÃO - TOCAR SOM
function tocarSom(idElementAudio) {
    //document.querySelector(idElementAudio).play()
}