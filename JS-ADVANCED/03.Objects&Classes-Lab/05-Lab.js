function solve(input) {
      
    let inputData = input.map(row => row.split(' | '));

    let objArray = {};

    inputData.forEach(row => {
        let [town, product , price] = row;

        let currentObj = {product, price};

        if (!objArray[town]) {
            objArray[town] = [];
        }

        objArray[town].push(currentObj);
    });

    let result = '';

    for (const key in objArray) {
        result += `${key} -> `;
        objArray[key].forEach(obj => {
                let [productName, productPrice] = Object.values(obj);
                result += `${productPrice} (${town})`;
        })

        result += '\n';
    }

    console.log(result);

}

solve(
    ['Sample Town | Sample Product | 1000',
    'Sample Town | Orange | 2',
    'Sample Town | Peach | 1',
    'Sofia | Orange | 3',
    'Sofia | Peach | 2',
    'New York | Sample Product | 1000.1',
    'New York | Burger | 10']
    )