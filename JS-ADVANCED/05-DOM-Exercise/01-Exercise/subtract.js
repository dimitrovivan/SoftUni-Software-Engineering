function subtract() {
    
    let firstNumber = Number(document.querySelector('#firstNumber').value);
    let secondNumber = Number(document.querySelector('#secondNumber').value);
    
    let result = firstNumber - secondNumber;

    let resultContainer = document.querySelector('#result');

    resultContainer.innerHTML = result;
}