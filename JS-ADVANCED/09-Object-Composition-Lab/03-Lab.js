function solve(input) {

    let data = JSON.parse(input);

    let result = data.reduce((acc, x) => ({...acc, ...x}),{})

    return result;

}

solve(`[{"canFly": true},{"canMove":true, "doors": 4},{"capacity": 255},{"canFly":true, "canLand": true}]`)