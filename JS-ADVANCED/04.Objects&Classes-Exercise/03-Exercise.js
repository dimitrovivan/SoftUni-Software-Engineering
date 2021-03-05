function solve(input) {

    let juice = {};
    let bottles = {};

    input.forEach(row => {
        let [fruitName, fruitQuantity] = row.split(' => ');

        fruitQuantity = Number(fruitQuantity);

        if (juice[fruitName]) {
            fruitQuantity += juice[fruitName];
        }
        
        juice[fruitName] = fruitQuantity;

        let bottleCount = parseInt(juice[fruitName] / 1000);

        if (bottleCount >= 1) {
            
            bottles[fruitName] = bottles[fruitName] ? bottleCount + bottles[fruitName] : bottleCount;

            juice[fruitName] -= bottleCount * 1000;

        }
        
    })

    Object.keys(bottles).forEach(key => {
        console.log(`${key} => ${bottles[key]}`);
    })
}


solve(
    [
      'Kiwi => 234',
      'Pear => 2345',
      'Watermelon => 3456',
      'Kiwi => 4567',
      'Pear => 5678',
      'Watermelon => 6789'
    ]

)