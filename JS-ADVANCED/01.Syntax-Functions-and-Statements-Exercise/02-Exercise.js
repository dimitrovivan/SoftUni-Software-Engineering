function greatestCommonDivisor(firstNumber, secondNumber) {
        while(secondNumber) {
          let t = secondNumber;
          secondNumber = firstNumber % secondNumber;
          firstNumber = t;
        }
        return firstNumber;
}

console.log(greatestCommonDivisor(4,13));