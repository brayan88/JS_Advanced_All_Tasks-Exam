/**
 * Created by el on 10.11.2016 г..
 */
let createCalculator= require("../04_AddSubtract").createCalculator;
let expect = require("chai").expect;
let calc;
    describe("Test functionality of object", function () {
        beforeEach(function() {
            calc = createCalculator();
        })
        describe("Test if has functionality", function () {
            it("should return true for add,subtract,get", ()=> {
                expect(calc.hasOwnProperty('add')).to.be.true
                expect(calc.hasOwnProperty('get')).to.be.true
                expect(calc.hasOwnProperty('subtract')).to.be.true
            })
        });
        describe("Test get functionality", function () {
            it("should return 0 for 0", ()=> {
                expect(calc.get()).to.be.equal(0)
                expect(calc.get(3)).to.be.equal(0);
            })
        })
        describe("Test 'add' functionality", function () {
            it("should return 2 for 2", ()=> {
                calc.add(0);
                expect(calc.get()).to.be.equal(0);
                calc.add(2);
                expect(calc.get()).to.be.equal(2);
                calc.add(-2);
                expect(calc.get()).to.be.equal(0);
                calc.add('3');
                expect(calc.get()).to.be.equal(3);
                calc.add(1.6);
                calc.add(2.3);
                expect(calc.get()).to.be.equal(1.6+3+2.3);
            });
            it("should return 6 for 3+3 ", ()=> {
                calc.add(3+3)
                expect(calc.get()).to.be.equal(6);
            })
            it("should return NaN for string ", ()=> {
                calc.add('pesho')
                expect(calc.get()).to.be.NaN;
            })
            it("should return 0 for empty", ()=> {
                calc.add()
                expect(calc.get()).to.be.NaN;
            })
        })
        describe("Test 'subtract' functionality", function () {
            it("should return 8 for 10-2", ()=> {
                calc.subtract(0);
                expect(calc.get()).to.be.equal(0);
                calc.add(10);
                calc.subtract(2);
                expect(calc.get()).to.be.equal(8);
                calc.subtract(-2);
                expect(calc.get()).to.be.equal(10);
                calc.subtract('3');
                expect(calc.get()).to.be.equal(7);
                calc.add(1.6);
                calc.subtract(2.3);
                expect(calc.get()).to.be.equal(7+1.6-2.3);
            });
            it("should return 0 for 6-3+3 ", ()=> {
                calc.add(6)
                calc.subtract(3+3)
                expect(calc.get()).to.be.equal(0);
            })
            it("should return NaN for string ", ()=> {
                calc.subtract('pesho')
                expect(calc.get()).to.be.NaN;
            })
            it("should return NaN for empty", ()=> {
                calc.subtract()
                expect(calc.get()).to.be.NaN;
            })
        })
        
    });