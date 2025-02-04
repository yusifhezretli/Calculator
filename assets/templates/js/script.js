let display = document.getElementById('display');
// İstifadəçinin hazırda daxil etdiyi nömrə
let currentInput = '';
// operatora daxil olduqdan sonra nömrə
let previousInput = '';
// operatorlar
let operator = '';


// silme funkisası
function clearDisplay() {
    display.innerText = '0';
    currentInput = '';
    previousInput = '';
    operator = '';
}

function appendNumber(number) {
    // İkiqat nöqtələrin qarşısını alır
    if (currentInput.includes('.') && number === '.') return;

    currentInput += number;
    //  elementinin icini guncelleyir
    display.innerText = currentInput;
}

function appendOperator(op) {
    // Bu sətir previousInput dəyişəninin boş olub olmadığını yoxlayır.
    if (previousInput !== '') {
        calculate();
    }
    operator = op;
    previousInput = currentInput;
    currentInput = '';
}

function calculate() {
    let result;
    const prev = parseFloat(previousInput);
    const current = parseFloat(currentInput);

    switch (operator) {
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

    currentInput = result;
    operator = '';
    previousInput = '';
    display.innerText = result;
}