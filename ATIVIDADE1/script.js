function splitName(){
    var input = document.querySelector("#name");
    var Split = input.value.split(" ");
    var SplitChar = Split[0].split("");
    var SplitSecondChar = Split[1].split("")

    if (SplitChar.every(isNaN) && SplitSecondChar.every(isNaN)){
        document.getElementById("txt1").innerHTML = Split[0];
        document.getElementById("txt2").innerHTML = Split[1];
    } else {
        alert("Não digite numeros no Nome Completo.")
    }
}

