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
    button.addEventListener('click', () => currentResult.textContent += button.textContent) });

getOperator.forEach(operator => { 
    operator.addEventListener('click', () => currentResult.textContent += operator.textContent) });


function clearFunc() {
    [currentResult.textContent = ' ', pastResult.textContent = ' '];
}

function deleteFunc() {
    currentResult.textContent = currentResult.textContent.toString().slice(0,-1);
}

function pointFunc() {
    currentResult.textContent += '.';
}

function mathsFunc() {
    pastResult.textContent = operate();
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
    switch(operator) {
        case '+':
            add(a, b);
            break;
        case '-':
            subtract(a, b);
            break;
        case '÷':
            divide(a, b);
            break;
        case '*':
            multiply(a, b);
            break;
    }
}