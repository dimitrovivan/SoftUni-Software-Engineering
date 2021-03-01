function solve(inputArray) {

   let modifiedArray = [];
   
   inputArray.forEach(element => element >= 0 ? modifiedArray.push(element) : modifiedArray.unshift(element));

    console.log(modifiedArray.join('\n'));
}

solve([7, -2, 8, 9]);