function getRadioValue(id) {
    var radio = document.getElementsByName(id);

    for (i = 0; i < radio.length; i++) {
        if (radio[i].checked) {
            return radio[i].value;
        }
    }
}

function generateOutput() {
    var n1 = document.getElementById("n1").value;
    var n2 = document.getElementById("n2").value;
    var operator = getRadioValue("operation");
    var output = document.getElementById("display");

    output.innerHTML = n1 + " " + operator + " " + n2;
}