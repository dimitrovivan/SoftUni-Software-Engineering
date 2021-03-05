function solve(input) {
    
    let products = {};

    input.forEach(row => {

        let [productName, productPrice] = row.split(' : ');

        if (!products[productName[0]]) {
             
            products[productName[0]] = {};
        }
             
        products[productName[0]][productName] = productPrice;

    })

    let sortedKeys = Object.keys(products).sort((a,b) => a.localeCompare(b));

    Object.values(products).forEach((value, index) => {
               
        console.log(sortedKeys[index]);
          
        Object.keys(products[sortedKeys[index]])
        .sort((a,b) => a.localeCompare(b))
        .forEach(key => console.log(`  ${key}: ${products[sortedKeys[index]][key]}`))
        })
}

solve(
    [
    'Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10'
]
    
);