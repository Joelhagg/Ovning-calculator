let btnDiv = document.getElementById("btnDiv");

let button = document.createElement("button");
button.innerText = "Räkna ut";
btnDiv.append(button);

let calc = () => {
  let firstInput = parseInt(document.getElementById("firstInput").value);
  let secondInput = parseInt(document.getElementById("secondInput").value);
  let operators = document.getElementById("operators").value;

  switch (operators) {
    case "+":
      result = firstInput + secondInput;
      document.getElementById("result").value = firstInput + secondInput;
      break;

    case "-":
      result = firstInput - secondInput;
      document.getElementById("result").value = firstInput - secondInput;
      break;

    case "*":
      result = firstInput * secondInput;
      document.getElementById("result").value = firstInput * secondInput;
      break;
  }
};

button.addEventListener("click", calc);

let reloadButton = document.getElementById("reloadBtn");

let reload = () => {
  location.reload();
};

reloadButton.addEventListener("click", reload);
