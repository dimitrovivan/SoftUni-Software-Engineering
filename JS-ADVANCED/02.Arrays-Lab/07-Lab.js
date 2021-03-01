function solve(matrix) {

     let biggestNumber = matrix
                        .map(row => Math.max(...row))
                        .reduce((acc,currentElement) => Math.max(acc,currentElement),Number.MIN_SAFE_INTEGER);

    console.log(biggestNumber);
}

solve(
    [
        [20, 50, 10],
        [8, 33, 145]
    ]
);