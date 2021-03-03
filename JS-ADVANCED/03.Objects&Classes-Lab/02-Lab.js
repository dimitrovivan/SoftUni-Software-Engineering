function solve(input) {

    let obj = {};
    
    for (let index = 0; index < input.length; index+=2) {

        let people = Number(input[index+1]);

        if (obj[input[index]]) {
            people += obj[input[index]];
        }

        obj[input[index]] = people;
    }

    console.log(JSON.stringify(obj));

}

solve(['Sofia','20','Varna','3','Sofia','5','Varna','4']);