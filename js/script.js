function calc(nilai) {
    var valRN = document.getElementById("hidden").innerHTML;
    if (document.getElementById("hidden_operator").innerHTML == "none") {
        document.getElementById("hidden").innerHTML = document.getElementById("hidden").innerHTML+nilai;
        document.getElementById("show").innerHTML = document.getElementById("hidden").innerHTML;
    } else {
        document.getElementById("hidden_2nd").innerHTML = document.getElementById("hidden_2nd").innerHTML+nilai;
        document.getElementById("show").innerHTML = document.getElementById("hidden_2nd").innerHTML;
    }
}

function calculate() {
    var valRN = document.getElementById("hidden").innerHTML;
    var valRN2nd = document.getElementById("hidden_2nd").innerHTML;
    if (document.getElementById("hidden_operator").innerHTML == "1") {
        document.getElementById("hidden").innerHTML = parseFloat(valRN, 10)+parseFloat(valRN2nd, 10);
    } else if (document.getElementById("hidden_operator").innerHTML == "2") {
        document.getElementById("hidden").innerHTML = parseFloat(valRN, 10)-parseFloat(valRN2nd, 10);
    } else if (document.getElementById("hidden_operator").innerHTML == "3") {
        document.getElementById("hidden").innerHTML = parseFloat(valRN, 10)*parseFloat(valRN2nd, 10);
    } else if (document.getElementById("hidden_operator").innerHTML == "4") {
        document.getElementById("hidden").innerHTML = parseFloat(valRN, 10)/parseFloat(valRN2nd, 10);
    }
    document.getElementById("show").innerHTML = document.getElementById("hidden").innerHTML;
    document.getElementById("hidden_operator").innerHTML = "none";
}


function setOperator(val) {
    if (document.getElementById("hidden_2nd").innerHTML != "") {
        calculate();
    }
    document.getElementById("hidden").innerHTML = document.getElementById("show").innerHTML;
    document.getElementById("hidden_2nd").innerHTML = "";
    document.getElementById("hidden_operator").innerHTML = val;
    document.getElementById("show").innerHTML = "";
}

function clearCalc() {
    document.getElementById("hidden_operator").innerHTML = "none"
    document.getElementById("hidden").innerHTML = "";
    document.getElementById("show").innerHTML = "";
    document.getElementById("hidden_2nd").innerHTML = "";
}
