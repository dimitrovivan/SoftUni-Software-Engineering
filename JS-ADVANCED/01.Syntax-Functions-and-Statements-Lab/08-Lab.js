function agregateElements(inputArray) {

    function concat(inputArray) {
       let concatString = '';
        for (let index = 0; index < inputArray.length; index++) {
            concatString += inputArray[index];
        }

        return concatString;
    }

    function sum(inputArray) {
        let sum = 0;

         for (let index = 0; index < inputArray.length; index++) {
             sum += inputArray[index];
         }

         return sum;
    }

    function inverseSum(inputArray) {
        let inverseSum = 0;

         for (let index = 0; index < inputArray.length; index++) {
            inverseSum += 1 / inputArray[index];
         }

         return inverseSum;
    }

    console.log(sum(inputArray) +'\n' + inverseSum(inputArray) +'\n' + concat(inputArray));
}

agregateElements([1, 2, 3]);