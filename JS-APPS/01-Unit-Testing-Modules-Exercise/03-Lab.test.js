const lookUpCharFunc = require('./03-Lab');
const assert = require('chai').assert;

describe('LookUpChar', function () {

    it('Should return undefined if it is different type from string and integer', () => {

        let resultArray = lookUpCharFunc([]);
        let resultFloat = lookUpCharFunc(5.12);
        let resultObject = lookUpCharFunc({});
        let resultUndefined = lookUpCharFunc(undefined);
        let resultNaN = lookUpCharFunc(NaN);

        
        assert.isUndefined(resultArray, 'Passed empty array')
        assert.isUndefined(resultFloat, 'Passed Number')
        assert.isUndefined(resultObject, 'Passed object')
        assert.isUndefined(resultUndefined, 'Passed undefined')
        assert.isUndefined(resultNaN, 'Passed NaN')

    });

    it('Should return Incorrect index if passed bigger length index or negative index', () => {
          
        let resultBiggerIndex = lookUpCharFunc('asd', 3);
        let resultNegativeIndex = lookUpCharFunc('asd', -2);

        assert.equal(resultBiggerIndex, 'Incorrect index', 'Passed bigger index than length');
        assert.equal(resultNegativeIndex, 'Incorrect index', 'Passed negative index');
    });

    it('Should return correct char when passed correct type and index', () => {
          
        let resultBiggerIndex = lookUpCharFunc('asd', 2);
        let resultNegativeIndex = lookUpCharFunc('asd', 0);

        assert.equal(resultBiggerIndex, 'd', 'Passed index 2');
        assert.equal(resultNegativeIndex, 'a', 'Passed index 0');
    });
})