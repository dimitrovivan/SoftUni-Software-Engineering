function solve(inputArray) {

    let delimeter = inputArray.pop();

    let result = inputArray.join(delimeter);

    console.log(result);

}

solve(['How about no?', 
'I',
'will', 
'not', 
'do', 
'it!', 
'_']
);