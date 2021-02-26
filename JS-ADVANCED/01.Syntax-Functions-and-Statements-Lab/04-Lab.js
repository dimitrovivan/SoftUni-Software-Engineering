function largestNumber (firstNumber, secondNumber, thirdNumber) {

    let result = firstNumber;

    if (result < secondNumber && secondNumber >= thirdNumber) {
        result = secondNumber
    } else if (result < thirdNumber && thirdNumber >= secondNumber) {
        result = thirdNumber;
    }


    console.log(`The largest number is ${result}.`);
}

largestNumber(5,7,3);