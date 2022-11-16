let trailingResult = 0;
    let operationOptions = ['add', 'subtract', 'multiply', 'divide'];
    let workingOperation = "";

    function updateDisplay(input) {
      let display = document.getElementById("display");
      let secondaryDisplay = document.getElementById("secondary-display");

      if (display.innerHTML === "0" && operationOptions.indexOf(input) === -1) {
        if (input === 'decimal') {
          display.innerHTML = "0.";
        } else if (input === 'negative-value') {
          if (display.innerHTML.indexOf("-1") === -1) {
            display.innerHTML = "-" + display.innerHTML
          } else if (display.innerHTML.indexOf("-1" > -1)) {
            display.innerHTML = display.innerHTML.slice(1, display.innerHTML.length);
          }
        } else {
          display.innerHTML = input;
        }
      } else if (operationOptions.indexOf(input) >= 0) {
        if (trailingResult === display.innerHTML) {
          workingOperation = input;
        } else if (workingOperation === "") {
          workingOperation = input;
          trailingResult = display.innerHTML;
          secondaryDisplay.innerHTML = trailingResult; 
          display.innerHTML = 0;
        } else {
          trailingResult = calculator(trailingResult, display.innerHTML, workingOperation);
          secondaryDisplay.innerHTML = trailingResult;
          display.innerHTML = 0;
          workingOperation = input;
        }
      } else if (input === 'equals') {
        secondaryDisplay.innerHTML = "";
        display.innerHTML = calculator(trailingResult, display.innerHTML, workingOperation);
        trailingResult = 0;
        workingOperation = "";
        secondaryDisplay.innerHTML = trailingResult;
      } else if (input === 'decimal') {
        if (display.innerHTML.indexOf(".") === -1) {
          display.innerHTML += ".";
        }
      } else if (input === 'negative-value') {
        if (display.innerHTML.indexOf("-1") === -1) {
          display.innerHTML = "-" + display.innerHTML
        } else if (display.innerHTML.indexOf("-1" > -1)) {
          display.innerHTML = display.innerHTML.slice(1, display.innerHTML.length);
        }
      } else {
        display.innerHTML += input;
      }
    }

    function clearDisplay() {
      let display = document.getElementById("display");
      let secondaryDisplay = document.getElementById("secondary-display");
      trailingResult = 0;
      display.innerHTML = 0;
      secondaryDisplay.innerHTML = 0;
    }

    function calculator(firstNumber, secondNumber, operation) {
      let result;
      firstNumber = parseFloat(firstNumber);
      secondNumber = parseFloat(secondNumber);

      switch(operation) {
        case 'add':
          result = firstNumber + secondNumber;
          break;
        case 'subtract':
        result = firstNumber - secondNumber;
          break;
        case 'multiply':
        result = firstNumber * secondNumber;
          break;
        case 'divide':
        result = firstNumber / secondNumber;
          break;
        default: 
      }
      return result.toString();
    }