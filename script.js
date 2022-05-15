let firstNum = 0;
let secondNum = 0;
let operatorSymbol = ' ';

const getNumber = document.querySelectorAll('[number]');
const getOperator = document.querySelectorAll('[operator]');
const currentResult = document.querySelector('.active-results');
const pastResult = document.querySelector('.past-results');
const clearBtn = document.getElementById('clear-btn');
const deleteBtn = document.getElementById('delete-btn');
const pointBtn = document.getElementById('point-btn');
const equalBtn = document.getElementById('equal-btn');

clearBtn.addEventListener('click', clearFunc);
deleteBtn.addEventListener('click', deleteFunc);
pointBtn.addEventListener('click', pointFunc);
equalBtn.addEventListener('click', mathsFunc);

getNumber.forEach(button => { 
    button.addEventListener('click', () => [currentResult.textContent += button.textContent, checkNum(button.textContent, button.textContent)]) });
getOperator.forEach(operator => { 
    operator.addEventListener('click', () => [currentResult.textContent += operator.textContent, operatorSymbol = operator.textContent, pastResult.textContent = currentResult.textContent]) });

function clearFunc() {
    firstNum = 0;
    secondNum = 0;
    operatorSymbol = ' ';
    [currentResult.textContent = '', pastResult.textContent = ''];
}

function deleteFunc() {
    currentResult.textContent = currentResult.textContent.toString().slice(0,-1);
}

function pointFunc() {
    currentResult.textContent += '.';
}

function mathsFunc() {
    pastResult.textContent = currentResult.textContent;
    currentResult.textContent = operate(operatorSymbol, firstNum, secondNum);
    firstNum = currentResult.textContent;
    secondNum = 0;
}

function checkNum(a, b) {
    if(operatorSymbol == ' ' ) {
        firstNum += a;
    } else {
        secondNum += b;
    }
}

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

function operate(operator, a, b) {
    a = +firstNum;
    b = +secondNum;
    switch(operator) {
        case '+':
            return add(a, b);
        case '-':
            return subtract(a, b);
        case '÷':
            return divide(a, b);
        case '×':
            return multiply(a, b);
    }
}