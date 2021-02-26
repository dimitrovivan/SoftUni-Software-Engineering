function calcMoney(typeOfFood, grams, priceForKilogram) {
     
    let kgFood = (grams / 1000).toFixed(2);;

    let moneyNeeded = (priceForKilogram * kgFood).toFixed(2);

    console.log(`I need $${moneyNeeded} to buy ${kgFood} kilograms ${typeOfFood}.`);
}

calcMoney('orange', 200 , 0.80);