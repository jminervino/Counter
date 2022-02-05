
let count = 0
const numberString = window.document.getElementById("number")

/**
 * Função para mudar as cores, usando estrutura de controle
 */
function changeColor(){ 
    if(count > 0){ 
        numberString.style.color = "green"
    } else if (count < 0){
        numberString.style.color = "red"
    } else {
        numberString.style.color = "black"
    }
}

function incrementNumber() {
    numberString.innerText = ++count //incrementa +1 ao contador
    changeColor()
}

function resetNumber() {
    count = 0 // reseta o contador
    numberString.innerText = 0
    changeColor()
}

function decrementNumber() {
    numberString.innerHTML = --count //decrementa -1 ao contador
    changeColor()
}