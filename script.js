function getRadioValue(id) {
    var radio = document.getElementsByName(id);

    for (i = 0; i < radio.length; i++) {
        if (radio[i].checked) {
            return radio[i].value;
        }
    }
}

function getResult(n1, n2, operator) {
    switch(operator) {
        case "+":
            return n1 + n2;
        case "-":
            return n1 - n2;
        case "*":
            return n1 * n2;
        case "/":
            return n1 / n2;
        case "//":
            return Math.floor(n1 / n2);
        case "%":
            return n1 % n2;
        case "^":
            return Math.pow(n1, n2);
        case "==":
            return n1 == n2;
        case "===":
            return n1 === n2;
        case "!=":
            return n1 != n2;
        case "!==":
            return n1 !== n2;
        case "<":
            return n1 < n2;
        case "<=":
            return n1 <= n2;
        case ">":
            return n1 > n2;
        case ">=":
            return n1 >= n2;
    }
}

function generateOutput() {
    var n1 = Number(document.getElementById("n1").value);
    var n2 = Number(document.getElementById("n2").value);

    var operator = getRadioValue("operation");

    var outputE = document.getElementById("e");
    var outputR = document.getElementById("r");

    var e = n1 + " " + operator + " " + n2;
    var r = getResult(n1, n2, operator);

    outputE.innerHTML = e;
    outputR.innerHTML = r;
}

function applySettings() {
    var theme = getRadioValue("theme");

    switch(theme) {
        case "white":
            document.body.style.backgroundColor = "#FFFFFF";
            document.body.style.color = "#000000";
            break;
        case "black":
            document.body.style.backgroundColor = "#000000";
            document.body.style.color = "#FFFFFF";
            break;
    }
}