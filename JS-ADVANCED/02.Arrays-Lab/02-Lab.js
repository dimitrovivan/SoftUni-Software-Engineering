function solve(inputArray) {

    let evenElements = inputArray
                    .filter((x,i) => i % 2 == 0)
                    .join(' ');

    return evenElements;
}

console.log(solve(['20', '30', '40']));