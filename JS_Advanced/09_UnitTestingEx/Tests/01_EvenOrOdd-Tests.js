/**
 * Created by el on 10.11.2016 г..
 */
let isOddOrEven = require("../01_EvenOrOdd").isOddOrEven;
let expect = require("chai").expect;

describe("Tests isOddEven",function () {
   describe("Test odd",()=>{
       it("should return odd for odd string",()=>{
           expect(isOddOrEven('pesho')).to.be.equal("odd")
           expect(isOddOrEven('p')).to.be.equal("odd")
           expect(isOddOrEven('3')).to.be.equal("odd")
       })
   })
    describe("Test even",()=>{
        it("should return even for even string",()=>{
            expect(isOddOrEven('pesh')).to.be.equal("even")
            expect(isOddOrEven('33')).to.be.equal("even")
            expect(isOddOrEven('')).to.be.equal("even")
        })
    })
    describe("Test special cases",()=>{
        it("should return undefined for nonString",()=>{
            expect(isOddOrEven(3)).to.be.undefined;
            expect(isOddOrEven()).to.be.undefined;
            expect(isOddOrEven({a:2})).to.be.undefined;
        })
    })
});

