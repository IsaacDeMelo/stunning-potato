window.addEventListener("keyup", keyupHandler, false);
var contadorAdiciona = Array.from(document.getElementsByClassName("controle-ajuste"))
var contadorReduz = Array.from(document.getElementsByClassName("controle-ajuste-"))

contadorAdiciona.forEach(element => {
    element.addEventListener('click', function adiciona(){
        if (element.nextElementSibling.value == "00"){
            element.nextElementSibling.value = "00"
        } else {
            if (element.nextElementSibling.value == 10){
                element.nextElementSibling.value = "00"
            } else {
                element.nextElementSibling.value -= 10;
            }
        }
    })
})

contadorReduz.forEach(element => {
    element.addEventListener('click', function reduz() {
        if (element.previousElementSibling.value == "00") {
            element.previousElementSibling.value = 10;
        } else {
            if (element.previousElementSibling.value < 100) {
                element.previousElementSibling.value = Number(element.previousElementSibling.value) + 10;
            } else {
                element.previousElementSibling.value = 100;
            }
        }
    })
})

var DIREITA = 39, ESQUERDA = 37; 

var cores = [
    'img/robotron-azul.png', 
    'img/robotron-amarelo.png', 
    'img/robotron-branco.png', 
    'img/robotron-preto.png', 
    'img/robotron-rosa.png', 
    'img/robotron-vermelho.png']

var index = 0; 

function keyupHandler(e){
    
    switch (e.keyCode){
        case DIREITA:
            if (index > 0){
                index--
            } else {
                index = cores.length - 1; 
            }
        break;
        case ESQUERDA:
            if (index < cores.length - 1){ 
                index++
            } else {
                index = 0; 
            }
        break; 
    }
}
function upgradeBraço(){
    
}
function downgradeBraço(){

}
function leftClick(){
    console.log(index)
    if (index < cores.length - 1){ 
        index++
    } else {
        index = 0; 
    }
}
function rightClick(){
    console.log(index)
    if (index > 0){
        index--
    } else {
        index = cores.length - 1; 
    }
}
setInterval(() => {
    let robozao = document.getElementById("robo")
    robozao.setAttribute('src', `${cores[index]}`)
    
}, 1);
