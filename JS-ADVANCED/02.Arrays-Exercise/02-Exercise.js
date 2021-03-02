function solve(inputArray) {

    let step = Number(inputArray.pop());

    let result = [];

    inputArray.forEach((element, index) => {
        
        if (index % step == 0) {
            result.push(element);
        }
    });

    console.log(result.join('\n'));

}  

solve(['5', 
'20', 
'31', 
'4', 
'20', 
'2']
);