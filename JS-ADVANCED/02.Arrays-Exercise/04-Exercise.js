function solve(inputArray) {
     
    let itterations = Number(inputArray.pop()) % inputArray.length;

    while(itterations > 0) {

        let currentNumber = inputArray.pop();
        inputArray.unshift(currentNumber);
        itterations--;
    }

    console.log(inputArray.join(' '));
}

solve(
    ['Banana', 
'Orange', 
'Coconut', 
'Apple', 
'15']


);