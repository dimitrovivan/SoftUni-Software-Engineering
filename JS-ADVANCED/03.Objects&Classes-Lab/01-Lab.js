function solve(input) {

    let inputData = input.map(row => row.split('|').filter(element => element != '').map(currentEl => currentEl.trim()));

    let result = [];
    let properties = inputData.shift();

    let [firstProperty, secondProperty, thirdProperty] = properties;

    inputData.forEach(row => {

        let town = {
           [firstProperty]: row[0],
           [secondProperty]: row[1],
           [thirdProperty]: row[2],
        }

        result.push(town);
        
    });

    let stringifiedData = JSON.stringify(result);

    console.log(stringifiedData);

}

solve(
    [
     '| Town | Latitude | Longitude |',
     '| Sofia | 42.696552 | 23.32601 |',
     '| Beijing | 39.913818 | 116.363625 |'
    ]
)