function solve({model, power, color, carriage, wheelsize}) {

    let engines = [{ power: 90, volume: 1800 }, { power: 120, volume: 2400 }, { power: 200, volume: 3500 }];
    let size = wheelsize % 2 == 0 ? wheelsize : wheelsize - 1;

    return {
        model: model,
        engine: engines.find(e => e.power <= power),
        carriage: { 
            type: carriage,
            color: color,
        },
        wheels: [size, size, size, size],
    }
}

console.log(solve({ model: 'VW Golf II',
power: 90,
color: 'blue',
carriage: 'hatchback',
wheelsize: 14 }
));