/**
 * Created by el on 9.11.2016 г..
 */
let isSymmetric = require("../02_CheckForSymmetry").isSymmetric;
let expect = require("chai").expect;

describe("iSymmetric([arr] Test)",function () {
    describe("regular Tests)",function () {
        it("should return 'true' when [1,2,1]",  ()=> {
            expect(isSymmetric([1,2,1])).to.be.true;
        })
        it("should return 'false' when [1,2,2]", ()=> {
            expect(isSymmetric([1,2,2])).to.be.false;
        })
        it("should return 'false' when [1,2,1,1]",()=> {
            expect(isSymmetric([1,2,1,1])).to.be.false;
        })
        it("should return 'false' when [2,1]", ()=> {
            expect(isSymmetric([2,1])).to.be.false;
        })
        it("should return 'true' when [1,2,2,1]", ()=> {
            expect(isSymmetric([1,2,2,1])).to.be.true;
        })
        it("should return 'true' when [1,{a:2},'pesho',-5,'pesho',{a:2},1]", ()=> {
            expect(isSymmetric([1,{a:2},'pesho',-5,'pesho',{a:2},1])).to.be.true;
        })
        it("should return 'false' when [1,{a:2},'pesho',new Date(),'pesho',{a:2},1]",()=> {
            expect(isSymmetric([1,{a:2},'pesho',new Date(),'pesho',{K:2},1])).to.be.false;
        })
        it("should return 'true' when [1,'Sasho','Sasho',1]",()=> {
            expect(isSymmetric([1, 'Sasho', 'Sasho', 1])).to.be.true;
        })
        it("should return 'false' when [-1,'Sasho','Sasho',1]",()=> {
            expect(isSymmetric([false, true, true, false])).to.be.true;
        })
        it("should return 'false' when [-1,'Sasho','Sasho',1]",()=> {
            expect(isSymmetric([-1, 'Sasho', 'Sasho', 1])).to.be.false;
        })

    });
    describe("special cases Tests)",function () {
        it("should return 'true' when []", ()=> {
            expect(isSymmetric([])).to.be.true;
        })
        it("should return 'true' when [2]", ()=> {
            expect(isSymmetric([2])).to.be.true;
        })
        it("should return 'false' when 2,3,2", ()=>{
            expect(isSymmetric(2, 3, 2)).to.be.false;
        })
        it('should return "false" when isSymmetric("hello")', () => {
            expect(isSymmetric("hello")).to.be.false;
        });
        it("should return 'false' when ['2',2]", ()=> {
            expect(isSymmetric(['2',2])).to.be.false;
        })
        it("should return 'false' when [[2,3],[1],[3,2]]", ()=> {
            expect(isSymmetric([[2,3],[1],[2,3]])).to.be.true;
        })
    })
});