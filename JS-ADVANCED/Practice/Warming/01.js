const data1 = ['Jake / 1000 / Gauss, HolidayGrenade']
const data2 = ['Isacc / 25 / Apple, GravityGun','Derek / 12 / BarrelVest, DestructionSword','Hes / 1 / Desolator, Sentinel, Antara']

const hero = {
    name: '',
    level: 0,
    items: []
}

function createHero(data) {
    let [name, level, items] = data.split(' / ');
    return {...hero, ...{name, level, items}};
}

function register(data) {
    return data.reduce( (acc, x) => [...acc, createHero(x)], [] )
}

console.log(JSON.stringify(register(data2)));