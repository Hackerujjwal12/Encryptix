let currentNumber = '0';
let previousNumber = '';
let operation = undefined;

function appendNumber(number) {
    if (currentNumber === '0' && number !== '.') {
        currentNumber = number;
    } else {
        currentNumber += number;
    }
    updateDisplay();
}

function updateDisplay() {
    document.getElementById('current-operand').innerText = currentNumber;
    document.getElementById('previous-operand').innerText = previousNumber + ' ' + (operation || '');
}

function clearDisplay() {
    currentNumber = '0';
    previousNumber = '';
    operation = undefined;
    updateDisplay();
}

function chooseOperation(op) {
    if (currentNumber === '') return;
    if (previousNumber !== '') {
        calculate();
    }
    operation = op;
    previousNumber = currentNumber;
    currentNumber = '0';
    updateDisplay();
}

function calculate() {
    let result;
    const prev = parseFloat(previousNumber);
    const current = parseFloat(currentNumber);
    if (isNaN(prev) || isNaN(current)) return;

    switch (operation) {
        case '+':
            result = prev + current;
            break;
        case '-':
            result = prev - current;
            break;
        case '*':
            result = prev * current;
            break;
        case '/':
            result = prev / current;
            break;
        default:
            return;
    }

    currentNumber = result.toString();
    operation = undefined;
    previousNumber = '';
    updateDisplay();
}
