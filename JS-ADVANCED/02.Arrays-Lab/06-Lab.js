function solve(inputArray) {

    let resultArray = [];
    
    inputArray.sort((a,b) => b - a);

    resultArray.push(inputArray.pop());
    resultArray.push(inputArray.pop());

    console.log(resultArray.join(' '));
}

solve([30, 15, 50, 5]);