const data1 = ['Kiwi => 234',
'Pear => 2345',
'Watermelon => 3456',
'Kiwi => 4567',
'Pear => 5678',
'Watermelon => 6789']


function aggregateJuice(juice) {
    const quantityStore = {};

    juice?.forEach(x => {
        let [name, quantity] = x.split(' => ');
        if(!quantityStore.hasOwnProperty(name)) {
            quantityStore[name] = 0;
        }
        quantityStore[name] += Number(quantity);
    });

    return quantityStore;
}

function generateBottles(juice) {
    let bottles = ''
    console.log(juice);
    for (const key in juice) {
        if (Object.hasOwnProperty.call(juice, key)) {
            const bottleCount = parseInt(juice[key] / 1000);
            bottles += `${key} => ${bottleCount}\n`
        }
    }
   return bottles;
}

const juice = aggregateJuice(data1);

console.log(generateBottles(juice));