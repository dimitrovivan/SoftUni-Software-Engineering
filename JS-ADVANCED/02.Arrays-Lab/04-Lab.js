function solve(sequenceLength, numbersToSum) {

    let result = [1];

    for (let index = 0; index < sequenceLength - 1; index++) {

        let currentSum = result.slice(-numbersToSum).reduce((acc,x) => acc + x ,0);

        result.push(currentSum);
    }

    console.log(result.join(' '));
}

solve(6,3);