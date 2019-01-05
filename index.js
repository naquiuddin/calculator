var activeOperator = null;
var firstOperand = '0';
var secondOperand = '0';

var setFirstOperand = function(value) {
  firstOperand = value;
}

var setSecondOperand = function(value) {
  secondOperand = value;
}

var display = function(value) {
  document.querySelector('.display-row').innerText = value;
}

console.log(firstOperand); // First operand is 0;
display(firstOperand);

var getDisplay = function() {
  if(activeOperator != null) {
    return secondOperand === '0' ? '' : secondOperand;
  } else {
    return firstOperand === '0' ? '' : firstOperand;
  }
}

var operands = document.querySelectorAll('.operand');
var operators = document.querySelectorAll('.operator');
var operations = document.querySelectorAll('.operation');

var handleOperands = function(event) { // event.target.vaue = '1'
  var buttonVal = event.target.value; // buttonVal = '1';
  var existingDisplay = getDisplay(); // existingDisplay = '0'
  var newDisplay = existingDisplay+buttonVal; // newDisplay = '0'+'1' = '01'
  if(activeOperator!= null) {
    setSecondOperand(newDisplay); //secondOperand = ''
  } else {
    setFirstOperand(newDisplay); // firstOperand = '01'
  }
  display(newDisplay); // In the strip the display value = '01'
}

var handleOperators = function(event) {
  activeOperator  = event.target.value;
  setSecondOperand('0');
  display('0');
}

var calculate = function(firstOperand, operator, secondOperand) {
  switch(operator) {
    case 'plus': return Number(firstOperand) + Number(secondOperand);
    case 'minus': return Number(firstOperand) - Number(secondOperand);
    case 'multiply': return Number(firstOperand) * Number(secondOperand);
    case 'divide': return Number(firstOperand) / Number(secondOperand);
    default: return '0';
  }
}

var handleOperations = function(event) {
  // console.log("Click an operations ", event.target.value);
  var operationType = event.target.value;
  if(operationType === 'equals') {
    //Code for applying equals operations
    var result = calculate(firstOperand, activeOperator, secondOperand);
    console.log(result);
    firstOperand = result;
    activeOperator = null;
    secondOperand = '0';
    console.log("Doing equals");
  } else if(operationType === 'clear') {
    activeOperator = null;
    firstOperand = '0';
    secondOperand = '0';
    console.log("Doing clear");
  } else if(operationType === 'bsp') {
    
    console.log("Doing backspace");
  }
  display(firstOperand);
}

operands.forEach(function(button) {
  button.addEventListener('click', handleOperands);
});

operators.forEach(function(button) {
  button.addEventListener('click', handleOperators);
});

operations.forEach(function(button) {
  button.addEventListener('click', handleOperations);
});