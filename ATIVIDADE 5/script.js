let checkbox = Array.from(document.getElementsByClassName("check"))
let mood = document.getElementById("mood");
let onLight = true;
let contador = 0;
var dateValido = false;
var DDDValido = false;
var emailValido = false;
var QTDerros = 0; 
mood.addEventListener('click', changeMood, false)
console.log(checkbox);

document.forms['form'].onsubmit = function(){
    validaçãoDDD();
    validaçãoDate();
    validaçãoEmail();
    Executor();
}


// VALIDAÇÃO DO DDD FEITO DA PIOR FORMA KKK
// PENSEI EM TRANSFORMAR O DDD EM UM SELECT, MAS PARA SEGUIR O PADRÃO FIZ DESTA FORMA. (PODERIA TER FEITO EM FORMA DE ARRAY TAMBÉM)

function validaçãoDDD(){
    let DDD = document.getElementById('DDD').value; 
    console.log(DDD);
    if (DDD == 61 || DDD == 62 || DDD == 64 || DDD == 65 || DDD == 66 || DDD == 67 || DDD == 71 || DDD == 73 || DDD == 74 || DDD == 75 || DDD == 77 || DDD == 82 || DDD == 85 || DDD == 88 || DDD == 98 || DDD == 99 || DDD == 83 || DDD == 81 || DDD == 87 || DDD == 86 || DDD == 89 || DDD == 84 || DDD == 79 || DDD == 68 || DDD == 96 || DDD == 92 || DDD == 97 || DDD == 91 || DDD == 93 || DDD == 94 || DDD == 69 || DDD == 95 || DDD == 63 || DDD == 27 || DDD == 28 || DDD == 31 || DDD == 32 || DDD == 33 || DDD == 34 || DDD == 35 || DDD == 37 || DDD == 38 || DDD == 21 || DDD == 22 || DDD == 24 || DDD == 11 || DDD == 12 || DDD == 13 || DDD == 14 || DDD == 15 || DDD == 16 || DDD == 17 || DDD == 18 || DDD == 19 || DDD == 41 || DDD == 42 || DDD == 43 || DDD == 44 || DDD == 45 || DDD == 46 || DDD == 51 || DDD == 53 || DDD == 54 || DDD == 55 || DDD == 47 || DDD == 48 || DDD == 49){
        console.log('DDD validado');
        DDDValido = true; 

    } else {
        
        DDDValido = false;
    }
}

// ÁREA DE VALIDAÇÃO DA DATA FEITA DE FORMA MATEMATICA

function validaçãoDate(){
    let day = document.getElementById('dia').value;
    let month = document.getElementById('mês').value; 
    let year = document.getElementById('ano').value; 
    
    if (year > 1960 && year < 2023){
        if (day > 0 && day <= 30 && (month == 4 ||month == 6 ||month == 9 ||month == 11)){
            console.log('data validada');
            dateValido = true;
        } else if (day > 0 && day <= 31 && (month == 1 ||month == 3 ||month == 5 ||month == 7 ||month == 8 ||month == 10 ||month == 12)){
            console.log('data validada');
            dateValido = true;
        } else if (day > 0 && day <= 28 && (month == 2)){
            console.log('data validada');
            dateValido = true;
        } else if (day > 0 && day == 29 && (month == 2)){
            if ((year % 4) == 0){
                console.log('data validada');
                dateValido = true;
            }
        }
        else {
            console.log('Ocorreu um erro\nSua data de nascimento está inválida ou não existe.');
            dateValido = false; 
        }
    } else {
        console.log('Ocorreu um erro\nSua data de nascimento está inválida ou não existe.');
        dateValido = false; 
    }
}

function validaçãoEmail() {
    let email = document.getElementById("email").split("");

    if (email.includes(".")) {
        emailValido = true;
    }
}

// ÁREA DE VALIDAÇÃO DAS CHECKBOX. CADA VEZ QUE UMA CHECKBOX NÃO MARCADA É MARCADA, ADICIONA 1 VALOR AO CONTADOR
// AO CHEGAR NO NUMERO 3, O CONTADOR NÃO PODERÁ SUBIR, E CASO ALGUMA CHECKBOX TENTAR SER MARCADA, A FUNÇÃO RETORNA PARA FALSE
// CASO UMA DAS 3 MARCADAS FOR DESMARCADA, O CONTADOR IRÁ VOLTAR PARA 2, PERMITINDO COM QUE OUTRA SEJA MARCADA NO LUGAR DA ANTERIOR.

checkbox.forEach(element => {
    element.addEventListener('click', function confere(){
        if (contador < 3){
            if (element.checked == true){
                contador++
            } else {
                contador--
            }
        } else if (contador == 3) {
            if (element.checked == true){
                element.checked = false; 
            } else {
                element.checked = false;
                contador--;
            }
            
        }
    })
})  

// AQUI É BASICAMENTE O DETECTOR DE ERROS, FEITO DE FORMA IMPROVISADA, E NADA CONCRETA.

function Executor(){
    setTimeout(() => {       
            if (DDDValido == false && dateValido == false && emailValido == false){
                alert('Existem 3 erros no formulário\nO DDD está invalido, o email não possui ponto final, e a Data está incorreta ou inexistente.\nRefaça o formulário')
            } else if (DDDValido == true && dateValido == false && emailValido == false){
                alert('Existe 2 erros no formulário\nA Data está incorreta ou inexistente e o email não possui ponto final.\nRefaça o formulário')
            } else if (DDDValido == false && dateValido == true && emailValido == false){
                alert('Existe 2 erros no formulário\nO DDD está invalido e o email não possui ponto final.\nRefaça o formulário')
            } else if (DDDValido == false && dateValido == false && emailValido == true){
                alert('Existe 2 erros no formulário\nO DDD está invalido e a data está incorreta ou inexistente.\nRefaça o formulário')
            } else if (DDDValido == true && dateValido == true && emailValido == false){
                alert('Existe 1 erro no formulário\nO email não possui ponto final.\nRefaça o formulário')
            } else if (DDDValido == false && dateValido == true && emailValido == true){
                alert('Existe 1 erro no formulário\nO DDD está invalido.\nRefaça o formulário')
            } else if (DDDValido == true && dateValido == false && emailValido == true){
                alert('Existe 1 erro no formulário\nA Data está incorreta ou inexistente.\nRefaça o formulário')
            } else {
                alert('Envio concluido com sucesso')
            }
    }, 0);
}
function Limpar(){
    
    let inputs = Array.from(document.querySelectorAll('input'));
    console.log(inputs);
    inputs.forEach(element => { 
        element.value = "";
        element.checked = false;
        contador = 0;
    })
    document.getElementById('submit').value = "Enviar Formulario"

}
function changeMood(){
    if (onLight == true){
        onLight = false;
        document.body.style.backgroundColor = "rgba(0, 0, 0, 0.911)"
        document.body.style.color = "white";
        document.getElementById('newbody').style.backgroundColor = "rgba(0, 0, 0, 0.911)"
        document.getElementById('newbody').style.border = "1px solid white"
        document.getElementById('Dados').style.backgroundColor = "rgba(0, 0, 0, 0.911)"
        document.getElementById('Dados').style.border = "1px solid white"
        document.getElementById('informações').style.backgroundColor = "rgba(0, 0, 0, 0.911)"
        document.getElementById('informações').style.border = "1px solid white"
        document.getElementById('submit').style.backgroundColor = "rgba(0, 0, 0, 0.911)";
        document.getElementById('submit').style.border = "1px solid white"
        document.getElementById('submit').style.color = "white"
        document.getElementById('clear').style.backgroundColor = "rgba(0, 0, 0, 0.911)";
        document.getElementById('clear').style.border = "1px solid white"
        document.getElementById('clear').style.color = "white"

        mood.src = "icons8-verão-50.png"
    } else if (onLight == false){
        onLight = true;
        document.body.style.backgroundColor = "white"
        document.body.style.color = "black";
        document.getElementById('newbody').style.backgroundColor = "rgba(242, 238, 245, 0.708)"
        document.getElementById('newbody').style.border = "1px solid black"
        document.getElementById('Dados').style.backgroundColor = "rgba(242, 238, 245, 0.708)"
        document.getElementById('Dados').style.border = "1px solid black"
        document.getElementById('informações').style.backgroundColor = "rgba(242, 238, 245, 0.708)"
        document.getElementById('informações').style.border = "1px solid black"
        document.getElementById('submit').style.backgroundColor = "rgba(242, 238, 245, 0.708)";
        document.getElementById('submit').style.border = "1px solid black"
        document.getElementById('submit').style.color = "black"
        document.getElementById('clear').style.backgroundColor = "rgba(242, 238, 245, 0.708)";
        document.getElementById('clear').style.border = "1px solid black"
        document.getElementById('clear').style.color = "black"
        mood.src = "https://cdn-icons-png.flaticon.com/512/61/61412.png"
    }
    console.log(onLight);
}
