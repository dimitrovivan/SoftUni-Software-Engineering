const isOddOrEvenFunc = require('./02-Lab');
const assert = require('chai').assert;

describe('isOddOrEven' , function () {

    it('Should return even when passed string with even length', () => {

        let evenLengthString = 'even';

        let result = isOddOrEvenFunc(evenLengthString);

        assert.equal(result, 'even');
    });

    it('Should return odd when passed string with odd length', () => {

        let evenLengthString = 'odd';

        let result = isOddOrEvenFunc(evenLengthString);
        
        assert.equal(result, 'odd');
    });

    it('Should return undefined when passed differen type from string', () => {

        let resultArray = isOddOrEvenFunc([]);
        let resultNumber = isOddOrEvenFunc(5);
        let resultObject = isOddOrEvenFunc({});
        let resultUndefined = isOddOrEvenFunc(undefined);
        let resultNaN = isOddOrEvenFunc(NaN);

        
        assert.isUndefined(resultArray, 'Passed empty array')
        assert.isUndefined(resultNumber, 'Passed Number')
        assert.isUndefined(resultObject, 'Passed object')
        assert.isUndefined(resultUndefined, 'Passed undefined')
        assert.isUndefined(resultNaN, 'Passed NaN')
    })
})