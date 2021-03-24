const StringBuilder = require('./05-Lab');

const chai = require('chai');

const assert = chai.assert;


describe('StringBuilderTest', function () {


    it('Should throw error if other type from string is passed in static verify function', () => {

        let throwFuncNumber = () => StringBuilder._vrfyParam(10);
        let throwFuncNaN = () => StringBuilder._vrfyParam(NaN);
        let throwFuncArray = () => StringBuilder._vrfyParam([]);
        let throwFuncObject = () => StringBuilder._vrfyParam({});
        let throwFuncUndefined = () => StringBuilder._vrfyParam(undefined);

         assert.Throw(throwFuncNumber);
         assert.Throw(throwFuncNaN);
         assert.Throw(throwFuncArray);
         assert.Throw(throwFuncObject);
         assert.Throw(throwFuncUndefined);


    })

    it('Should append new string correctly to the main string', () => {

        let testString = new StringBuilder('test');
        
        testString.append('+new');
        
        let result = testString.toString();

        assert.equal(result, 'test+new');
        
    })

    it('Should prepend new string correctly to the main string', () => {

        let testString = new StringBuilder('test');
        
        testString.prepend('new+');
        
        let result = testString.toString();

        assert.equal(result, 'new+test');
        
    })


    it('Should remove from the main string with given correct startIndex and length', () => {

        let testString = new StringBuilder('tebst');

        testString.remove(2,1);
        
        let result = testString.toString();

        assert.equal(result, 'test');
        
    })

    it('Should remove correctly from the main string with given NEGATIVE startIndex', () => {

        let testString = new StringBuilder('tebst');

        testString.remove(-2,1);
        
        let result = testString.toString();

        assert.equal(result, 'tebt');
        
    })
})