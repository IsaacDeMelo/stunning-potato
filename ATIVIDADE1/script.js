function splitName(){
    var input = document.querySelector("#name");
    var Split = input.value.trim().split(" ");
    var trueSplit = Split.filter(element => {
        return element != '';
    })
    console.log(trueSplit)
    var SplitChar = Split[0].split("");
    var SplitSecondChar = Split[1].split("");

    if (SplitChar.every(isNaN) && SplitSecondChar.every(isNaN)){
        document.getElementById("txt1").innerHTML = trueSplit[0];
        document.getElementById("txt2").innerHTML = trueSplit[1];
        document.getElementById("name").value = "";
    } else {
        alert("Não digite numeros no Nome Completo.");
    }
}