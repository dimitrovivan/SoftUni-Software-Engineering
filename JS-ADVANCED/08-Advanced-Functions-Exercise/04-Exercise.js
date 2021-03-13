function solution() {

    let recipes = {
        apple: {
            carbohydrate: 1,
            flavour: 2
        },

        lemonade: {
            carbohydrate: 10,
            flavour: 20,
        },

        burger: {
            carbohydrate: 5,
            fat: 7,
            flavour: 3,
        },

        eggs: {
            protein: 5,
            fat: 1,
            flavour: 1,
        },

        turkey: {
            protein: 10,
            carbohydrate: 10,
            fat: 10,
            flavour: 10,
        }
    }

    let avaiableIngredients = {
        protein: 0,
        carbohydrate: 0,
        fat: 0,
        flavour: 0,
    }

    return (input) => {

        let [command, food, quantity] = input.split(' ');

        switch (command) {

            case 'restock': {
                avaiableIngredients[food] += Number(quantity);
                return 'Success';
            };

            case 'report': {
                let result = Object.keys(avaiableIngredients).reduce((acc, key) => acc += `${key}=${avaiableIngredients[key]} `, '').trim();

                return result;
            };

            case 'prepare': {

                try {
                    
                       Object.keys(recipes[food]).forEach(key => {

                        if (recipes[food][key] * quantity > avaiableIngredients[key]) {
                            throw new Error(`not enough ${key} in stock `);
                        }

                       })

                       Object.keys(recipes[food]).forEach(key => {

                        avaiableIngredients[key] -= recipes[food][key] * quantity;
                       })

                       return 'Success';
                        
                } catch(error) {
                    console.log(error.message);
                }

            }; break;

        }
    }
}



let manager = solution();
manager('prepare turkey 1')
manager('restock protein 10')
manager('prepare turkey 1')
manager('restock carbohydrate 10')
manager('prepare turkey 1')
manager('restock fat 10');
manager('prepare turkey 1');
manager('restock flavour 10');
manager('prepare turkey 1');
manager('report');
