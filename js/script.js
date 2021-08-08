// Other 
let inputBox = document.getElementById('inputNumber');
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

let currentNum1;
let currentNum2;
let symb;

init()

function init() {
    currentNum1 = '';
    currentNum2 = '';
    symb = '';
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
    inputBox.value = '';
    init();
}

plusBtn.addEventListener('click', () => {
    currentNum1 = inputBox.value;
    currentNum1 = parseInt(currentNum1);
    symb = '+';
    inputBox.value = '';
});

function plus(num1, num2) {
    console.log("plus");

    return num1 + num2;

}

minusBtn.addEventListener('click', () => {
    currentNum1 = inputBox.value;
    currentNum1 = parseInt(currentNum1);
    symb = '-';
    inputBox.value = '';
});

function minus(num1, num2) {
    console.log("minus");

    return num1 - num2;
}

timeBtn.addEventListener('click', () => {
    currentNum1 = inputBox.value;
    currentNum1 = parseInt(currentNum1);
    symb = '*';
    inputBox.value = '';
});

function multiple(num1, num2) {
    console.log("multiple");

    return num1 * num2;
}

divideBtn.addEventListener('click', () => {
    currentNum1 = inputBox.value;
    currentNum1 = parseInt(currentNum1);
    symb = '/';
    inputBox.value = '';
});

function divide(num1, num2) {
    console.log("divide");

    return num1 / num2;

}

equalsBtn.addEventListener('click', () => {
    currentNum2 = inputBox.value;
    currentNum2 = parseInt(currentNum2);


    console.log('symb => ', symb);

    if (symb == '+') {
        inputBox.value = plus(currentNum1, currentNum2);

    } else if (symb == '-') {

        inputBox.value = minus(currentNum1, currentNum2);

    } else if (symb == '*') {

        inputBox.value = multiple(currentNum1, currentNum2);

    } else if (symb == '/') {

        inputBox.value = divide(currentNum1, currentNum2);
    }

});