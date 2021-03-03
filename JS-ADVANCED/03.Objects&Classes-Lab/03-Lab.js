function solve(input) {

    let obj = {};

    inputData = input.map(row => row.split(' <-> '));
    
    inputData.forEach(row => {

        let [town, population] = row;

        if (obj[town]) {
            population = Number(population) + obj[town];
        }

        obj[town] = Number(population);
    })

    for (const key in obj) {
        console.log(`${key} : ${obj[key]}`);
    }
}

solve(
[
'Sofia <-> 1200000',
'Montana <-> 20000',
'New York <-> 10000000',
'Washington <-> 2345000',
'Las Vegas <-> 1000000'
]
)