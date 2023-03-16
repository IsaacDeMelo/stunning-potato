window.addEventListener("keyup", keyupHandler, false);

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
                index = 5; 
            }
        break;
        case ESQUERDA:
            if (index < 5){ 
                index++
            } else {
                index = 0; 
            }
        break; 
    }
}
function leftClick(){
    if (index < 5){ 
        index++
    } else {
        index = 0; 
    }
}
function rightClick(){
    if (index > 0){
        index--
    } else {
        index = 5; 
    }
}
setInterval(() => {
    let robozao = document.getElementById("robo")
    robozao.setAttribute('src', `${cores[index]}`)
}, 1);
