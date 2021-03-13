function solve(...params) {

    let result = {};

    [...params].forEach(param => {

        let paramType = typeof param;
        
        if (!result[paramType]) {

            result[paramType] = {};

            result[paramType].count = 0;
            result[paramType].values = [];
        }

        result[paramType].count += 1;

        result[paramType].values.push(param);
    })

    Object.keys(result).forEach(key => {
        console.log(`${key}: ${result[key].values.join(', ')}`);
    });

    Object.keys(result).forEach(key => {
        console.log(`${key} = ${result[key].count}`);
    })
}

solve(42, 'cat', [], undefined);