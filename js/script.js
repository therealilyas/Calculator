// Other 
let inputBox = document.createElement('input');
let pointBtn = document.getElementById('pointBtn');
let clearBtn = document.getElementById('clearBtn');
//Ariphmetic
let equalsBtn = document.getElementById('equalsBtn');
let plusBtn = document.getElementById('plusBtn');
let minusBtn = document.getElementById('minusBtn');
let timeBtn = document.getElementById('timeBtn');
let divideBtn = document.getElementById('divideBtn');
//Numbers
let nineBtn = document.getElementById('nineBtn');
let eightBtn = document.getElementById('eightBtn');
let sevenBtn = document.getElementById('sevenBtn');
let sixBtn = document.getElementById('sixBtn');
let fiveBtn = document.getElementById('fiveBtn');
let fourBtn = document.getElementById('fourBtn');
let threeBtn = document.getElementById('threeBtn');
let twoBtn = document.getElementById('twoBtn');
let oneBtn = document.getElementById('oneBtn');
let zeroBtn = document.getElementById('zeroBtn');

let inputSection = document.getElementById('inputSection');
let numbersHeader
let symbolsHeader;



let currentNum1;
let currentNum2;
let symb;
init()

function init() {
    currentNum1 = '';
    currentNum2 = '';
    symb = '';

    numbersHeader = document.createElement('span');
    symbolsHeader = document.createElement('span');

    inputSection.appendChild(numbersHeader);
    inputSection.appendChild(symbolsHeader);
    inputSection.appendChild(inputBox);

    numbersHeader.innerText = '';
    symbolsHeader.innerText = '';

}

// Buttons
nineBtn.addEventListener('click', () => { nine() });
eightBtn.addEventListener('click', () => { eight() });
sevenBtn.addEventListener('click', () => { seven() });
sixBtn.addEventListener('click', () => { six() });
fiveBtn.addEventListener('click', () => { five() });
fourBtn.addEventListener('click', () => { four() });
threeBtn.addEventListener('click', () => { three() });
twoBtn.addEventListener('click', () => { two() });
oneBtn.addEventListener('click', () => { one() });
zeroBtn.addEventListener('click', () => { zero() });


pointBtn.addEventListener('click', () => { dot() });

function dot() {
    dotBtn = '.';
    inputBox.value += dotBtn;
}


function zero() {
    inputBox.value += 0;
}

function one() {
    inputBox.value += 1;
}

function two() {
    inputBox.value += 2;
}

function three() {
    inputBox.value += 3;
}

function four() {
    inputBox.value += 4;
}

function five() {
    inputBox.value += 5;
}

function six() {
    inputBox.value += 6;
}

function seven() {
    inputBox.value += 7;
}

function eight() {
    inputBox.value += 8;
}

function nine() {
    inputBox.value += 9;
}

// Other

clearBtn.addEventListener('click', () => { clear() });

function clear() {
    numbersHeader.innerText = '';
    symbolsHeader.innerText = '';
    inputBox.value = '';

}

plusBtn.addEventListener('click', () => {
    symb = '+';
    firstNum(symb);
});

function plus(num1, num2) {
    return num1 + num2;
}

minusBtn.addEventListener('click', () => {
    symb = '-';
    firstNum(symb);
});

function minus(num1, num2) {
    return num1 - num2;
}

timeBtn.addEventListener('click', () => {
    symb = '*';
    firstNum(symb);
});

function multiple(num1, num2) {
    return num1 * num2;
}

divideBtn.addEventListener('click', () => {
    symb = '/';
    firstNum(symb);
});

function divide(num1, num2) {
    return num1 / num2;
}

equalsBtn.addEventListener('click', () => {
    resultDisplay();
    if (symb == '+') {
        numbersHeader.innerText = plus(currentNum1, currentNum2);
    } else if (symb == '-') {
        numbersHeader.innerText = minus(currentNum1, currentNum2);
    } else if (symb == '*') {
        numbersHeader.innerText = multiple(currentNum1, currentNum2);
    } else if (symb == '/') {
        numbersHeader.innerText = divide(currentNum1, currentNum2);
    }

});

function firstNum(symbol) {
    currentNum1 = inputBox.value;
    currentNum1 = parseFloat(currentNum1);
    numbersHeader.innerText = currentNum1;
    symbolsHeader.innerText = symbol;
    inputBox.value = '';
}

function resultDisplay() {

    currentNum2 = inputBox.value;
    currentNum2 = parseFloat(currentNum2);
    numbersHeader.style.fontSize = '50px';
    symbolsHeader.remove()
    inputBox.remove()
}