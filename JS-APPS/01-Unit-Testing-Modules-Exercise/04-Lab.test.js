const mathObj = require('./04-Lab');
const assert = require('chai').assert;

const addFive = mathObj.addFive;
const subtractTen = mathObj.subtractTen;
const sum = mathObj.sum;

describe('MathEnfoncer' , function () {

    it('Should return undefined when passing other types except Number in all Functions', () => {

        let resultArray = addFive([]);
        let resultObject = subtractTen({});
        let resultUndefined = subtractTen(undefined);
        let resultNaN = sum(NaN);

        
        assert.isUndefined(resultArray, 'Passed empty array')
        assert.isUndefined(resultObject, 'Passed object')
        assert.isUndefined(resultUndefined, 'Passed undefined')
        assert.isUndefined(resultNaN, 'Passed NaN')

    })

    it('Should return correct sum when passing 2 numbers in Sum', () => {

        let resultNaN = sum(5,6);

        assert.equal(resultNaN, 11);

    })

    it('Should return correct sum when passing Number in addFive', () => {

        let resultNaN = addFive(5);

        assert.equal(resultNaN, 10);

    })
});