function solve(firstOperand, secondOperand, operator) {

    let result;

    switch(operator) {
        case '+': result = firstOperand + secondOperand; break;
        case '-': result = firstOperand - secondOperand; break;
        case '*': result = firstOperand * secondOperand; break;
        case '/': result = firstOperand / secondOperand; break;
        case '%': result = firstOperand % secondOperand; break;
        case '**': result = firstOperand ** secondOperand; break;
        default: result = 'Wrong args';
    }

    console.log(result);

}

solve(3, 5.5, '*')