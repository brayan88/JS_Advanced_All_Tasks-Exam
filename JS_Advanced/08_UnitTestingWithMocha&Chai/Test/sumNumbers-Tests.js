/**
 * Created by el on 9.11.2016 г..
 */
let sum = require("../01_SumNumbers").sum;
let expect = require("chai").expect;

describe("Test sum(arr)",function () {
    it("should return 3 for [1,2]",function () {
        expect(sum([1,2])).to.be.equal(3);
    })
    it("should return 5 for [5]",function () {
        expect(sum([5])).to.be.equal(5);
    })
    it("should return 0 for []",function () {
        expect(sum([])).to.be.equal(0);
    })
    it("should return -3 for [-5,2]",function () {
        expect(sum([-5,2])).to.be.equal(-3);
    })
    it("should return 5 for [1.5,3.5]",function () {
        expect(sum([1.5,3.5])).to.be.equal(5);
    })
    it("should return NaN for [pesho]",function () {
        expect(sum(["pesho"])).to.be.NaN;
    })
})
