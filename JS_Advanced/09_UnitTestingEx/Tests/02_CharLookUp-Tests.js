/**
 * Created by el on 10.11.2016 г..
 */
let lookupChar =require("../02_CharLookUp").lookupChar;
let expect =require("chai").expect;

describe("Test function lookupChar",function () {
    describe("Test string parameter",()=>{
        it("should return undefined if is not string",()=>{
            expect(lookupChar(3)).to.be.undefined
            expect(lookupChar(3,3)).to.be.undefined
            expect(lookupChar()).to.be.undefined
            expect(lookupChar(3,'3')).to.be.undefined
            expect(lookupChar({a:2},3)).to.be.undefined
        })
    })
    describe("Test index parameter",()=>{
        it("should return undefined if is not number",()=>{
            expect(lookupChar('pesho')).to.be.undefined
            expect(lookupChar('pesho','pesho')).to.be.undefined
            expect(lookupChar('pesho',{a:3})).to.be.undefined
            expect(lookupChar('pesho','3')).to.be.undefined
            expect(lookupChar('pesho',2.4)).to.be.undefined
        })
    })
    describe("Test parameter inside bounderies",()=>{
        it("should return 'incorrectIndex' if is not number",()=>{
            expect(lookupChar('pesho',2)).to.be.equal('s')
            expect(lookupChar('pesho',4)).to.be.equal('o')
            expect(lookupChar('pesho',5)).to.be.equal('Incorrect index')
            expect(lookupChar('pesho',-3)).to.be.equal('Incorrect index')
        })
    })
})