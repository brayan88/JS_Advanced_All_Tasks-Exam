/**
 * Created by el on 11.11.2016 г..
 */
let mathEnforcer = require('../03_MathEnforcer').mathEnforcer;
let expect = require('chai').expect;

describe("Testing mathEnforcer functionality",function () {
    describe("Testing addFive property",function () {
        it("should return number+5 for number",()=>{
            expect(mathEnforcer.addFive(5)).to.be.equal(10)
            expect(mathEnforcer.addFive(0)).to.be.equal(5)
            expect(mathEnforcer.addFive(-10)).to.be.equal(-5)
            expect(mathEnforcer.addFive(5.5)).to.be.equal(5+5.5)
            expect(mathEnforcer.addFive(10+5)).to.be.equal(20)
            expect(mathEnforcer.addFive()).to.be.undefined
            expect(mathEnforcer.addFive({a:2})).to.be.undefined
            expect(mathEnforcer.addFive('2')).to.be.undefined
            expect(mathEnforcer.addFive('Pesho')).to.be.undefined
        })
    })
    describe("Testing subtractTen property",function () {
        it("should return number-10 for number",()=>{
            expect(mathEnforcer.subtractTen(5)).to.be.equal(-5)
            expect(mathEnforcer.subtractTen(0)).to.be.equal(-10)
            expect(mathEnforcer.subtractTen(-10)).to.be.equal(-20)
            expect(mathEnforcer.subtractTen(15.5)).to.be.equal(15.5-10)
            expect(mathEnforcer.subtractTen(10+5)).to.be.equal(5)
            expect(mathEnforcer.subtractTen()).to.be.undefined
            expect(mathEnforcer.subtractTen({a:2})).to.be.undefined
            expect(mathEnforcer.subtractTen('2')).to.be.undefined
            expect(mathEnforcer.subtractTen('Pesho')).to.be.undefined
        })
    })
    describe("Testing sum property",function () {
        it("should return num1+num2 for num1,num2",()=>{
            expect(mathEnforcer.sum(5,5)).to.be.equal(10)
            expect(mathEnforcer.sum(0,5)).to.be.equal(5)
            expect(mathEnforcer.sum(-10,5)).to.be.equal(-5)
            expect(mathEnforcer.sum(15.5,3.5)).to.be.equal(15.5+3.5)
            expect(mathEnforcer.sum(5+15.5,2+3.5)).to.be.equal(15.5+5+2+3.5)
            expect(mathEnforcer.sum()).to.be.undefined
            expect(mathEnforcer.sum({a:2},2)).to.be.undefined
            expect(mathEnforcer.sum(2,'2')).to.be.undefined
            expect(mathEnforcer.sum(3)).to.be.undefined
        })
    })
})