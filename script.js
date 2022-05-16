let firstNum = '';
let secondNum = '';
let operatorSymbol = '';

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
equalBtn.addEventListener('click', equalFunc);

getNumber.forEach(button => { 
    button.addEventListener('click', () => [ 
        checkNum(button.textContent, button.textContent)
    ]) });
getOperator.forEach(operator => { 
    operator.addEventListener('click', () => [
         backToBackMaths(operator.textContent),
    ]) });

function backToBackMaths(operation) {
    
    if(operatorSymbol != '')
    {
        equalFunc();
    }
    firstNum = currentResult.textContent;
    operatorSymbol = operation;

    if(secondNum !== '0') pastResult.textContent = `${firstNum} ${operation}`;
}

function clearFunc() {
    firstNum = '';
    secondNum = '';
    operatorSymbol = '';
    [currentResult.textContent = '', pastResult.textContent = ''];
}

function deleteFunc() {
    currentResult.textContent = currentResult.textContent.toString().slice(0,-1);
}

function pointFunc() {
    currentResult.textContent += '.';
}

function equalFunc() {
    if(operatorSymbol === '÷' && secondNum === '0') {
        currentResult.textContent = 'WHAT ARE YOU TRYING TO DO THERE?';
        pastResult.textContent = '';
        return;
    }
    currentResult.textContent = Math.round(operate(operatorSymbol, firstNum, secondNum));
    pastResult.textContent = `${firstNum} ${operatorSymbol} ${secondNum} =`;
    firstNum = currentResult.textContent;
    secondNum = '';
}

function checkNum(a, b) {
    if(operatorSymbol == '' ) {
        firstNum += a;
        currentResult.textContent = firstNum;
    } else {
        secondNum += b;
        firstNum.textContent = currentResult.textContent;
        currentResult.textContent = secondNum;
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