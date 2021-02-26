function findCircleArea(input) {

    let result = '';
    let typeOfParameter = typeof input;
    if (typeOfParameter != 'number') {
        result = `We can not calculate the circle area, because we receive a ${typeOfParameter}.`
    } else {
        result = (Math.pow(input,2) * Math.PI).toFixed(2);
    }

    console.log(result);
}

findCircleArea(5);
findCircleArea('name');