function IMCcalculator(){
    var input = document.querySelector("#name");
    var input2 = document.querySelector("#altura");
    var input3 = document.querySelector("#peso");
    var Split = input.value.split("");
    if (Split.every(isNaN)){
        var IMC = input3.value / (input2.value * input2.value);
        if (isNaN(IMC)){
            document.getElementById("txt1").innerHTML = `Olá, ${input.value}\nSeu IMC ainda não foi informado`
            document.getElementById("name").value = "";
        } else {
            document.getElementById("txt1").innerHTML = `Olá, ${input.value}\nSeu IMC é ${IMC.toFixed(2)}`
            document.querySelector("#name").value = "";
        }
    } else {
        alert("Não digite numeros no campo de nome")
    }
}

