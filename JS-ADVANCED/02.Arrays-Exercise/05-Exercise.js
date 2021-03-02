function solve(inputArray) {

    let result = [];
    
    inputArray.reduce((acc,x) => {
         
        if (x >= acc) {
            acc = x;
            result.push(x);
        }

        return acc;

    },Number.MIN_SAFE_INTEGER)

    console.log(result.join('\n'));
}

solve([1, 
    3, 
    8, 
    4, 
    10, 
    12, 
    3, 
    2, 
    24]
    );