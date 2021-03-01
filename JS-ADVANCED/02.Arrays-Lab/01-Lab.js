function solve(inputArray) {
        
    let firstElement = Number(inputArray.shift());
    let lastElement = Number(inputArray.pop());

    let result = firstElement + lastElement;

    return result;

}

console.log(solve(['20', '30', '40']));