
function calc() {

    const firstNumb = parseInt(document.getElementById("firstNumb").value);
    const secondNumb = parseInt(document.getElementById("secondNumb").value);
    const operator = document.getElementById("operators").value;

    switch(operator) {
        case '+':
        result = firstNumb + secondNumb;
        document.getElementById("result").value = firstNumb + secondNumb;
        break;

        case '-':
        result = firstNumb - secondNumb;
        document.getElementById("result").value = firstNumb - secondNumb;
        break;

        case '*':
        result = firstNumb * secondNumb;
        document.getElementById("result").value = firstNumb * secondNumb;
        break;
    }
} 