function solve(inputArray) {

    inputArray.sort((a,b) => a.length - b.length == 0 ? a.localeCompare(b) : a.length - b.length)
     
    console.log(inputArray.join('\n'));
}

solve(['test', 
'Deny', 
'omen', 
'Default']


);