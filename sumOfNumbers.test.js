let sum = require('./sumOfNumbers.js');
let expect = require('chai');
let expect = chai.expect;

describe (`Sum numbers`, ()=>{
    it (`singleNum`, ()=>{
        expect(sum([1])).to.equal(1)
    })
})