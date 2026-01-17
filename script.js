const calculator = {
    add: (a, b) => a + b,
    subtract: (a, b) => a - b,
    multiply: (a, b) => a * b,
    divide: (a, b) => (b !== 0 ? a/b : 'error: divided by zero')

};

const startCalculator = () => {
    const num1 = parseFloat(prompt("enter first number"));

    const action = prompt('choose action: +, -, *, /');

    const num2 = parseFloat(prompt("type second number: "));

    if (isNaN(num1) || isNaN(num2)){
        alert('please enter only numbers' );
        return;
    }


    let result;

    switch(action){
        case '+':
            result = calculator.add(num1, num2);
            break;
        case '-':
            result = calculator.subtract(num1, num2);
            break;
        case '*':
            result = calculator.multiply(num1, num2);
            break;
        case '/':
        result = calculator.divide(num1, num2);
            break; 
        default:
            alert('unknown operation');
            return;              
    }

    alert(`result: ${num1} ${action} ${num2} = ${result}`);
    
}

document.getElementById('startBtn').addEventListener('click', startCalculator);


