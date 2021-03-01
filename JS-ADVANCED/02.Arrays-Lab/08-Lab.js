function solve(matrix) {

    let mainDiagonalSum = 0;
    let secondaryDiagonalSum = 0;

        for (let y = 0; y < matrix.length; y++) {
            
            mainDiagonalSum += matrix[y][y];
            let index = matrix.length - 1 - y;
            secondaryDiagonalSum += matrix[index][y];
        }

    console.log(mainDiagonalSum + ' ' + secondaryDiagonalSum);
}

solve(
    [
       [3, 5, 17],
       [-1, 7, 14],
       [1, -8, 89]

    ]
);