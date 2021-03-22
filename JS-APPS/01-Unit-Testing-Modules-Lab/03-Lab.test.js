function sum(arr) {
    let sum = 0;
    for (num of arr)
        sum += Number(num);
    return sum;
}

const chai = require('chai');

describe('Check array sum', function () {

    it('Should return Number sum when passing numbers as Strings', () => {

        //arange

        let array = ["5", "6", "7"];

        //act

        let result = sum(array);

        //assert

        chai.assert.equal(result, 18);
    })

    it()
});
