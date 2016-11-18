/**
 * Created by el on 13.11.2016 г..
 */
// let jsdom = require('jsdom-global')()
// global.$ = global.jQuery = require('jquery')
let createList=require('../02_UnitTest').createList;
let expect = require("chai").expect;

describe("Testing",function () {
    let arr='';
    beforeEach(function() {
        arr = createList();
    })
    describe('properties',()=>{
        it('has all props',()=>{
            expect(arr.hasOwnProperty('add')).to.be.true;
            expect(arr.hasOwnProperty('shiftLeft')).to.be.true;
            expect(arr.hasOwnProperty('shiftRight')).to.be.true;
            expect(arr.hasOwnProperty('swap')).to.be.true;
            expect(arr.hasOwnProperty('toString')).to.be.true;
        })
    })
    describe("add functionality",function () {
        it("should add nums",()=>{
            arr.add(5);
            expect(arr.toString()).to.be.equal('5')
            arr.add(6)
            expect(arr.toString()).to.be.equal('5, 6')
            arr.add('pesho')
            expect(arr.toString()).to.be.equal('5, 6, pesho')
            arr.add()
            expect(arr.toString()).to.be.equal('5, 6, pesho, ')
            arr.add(['sasho'])
            expect(arr.toString()).to.be.equal('5, 6, pesho, , sasho')
            arr.add(' ');
            expect(arr.toString()).to.be.equal('5, 6, pesho, , sasho,  ')
        })
    })
    describe("shiftLeft functionality",function () {
        it("should shiftLeft",()=>{
            arr.shiftLeft()
            expect(arr.toString()).to.be.equal('')
            arr.add(5);
            arr.shiftLeft()
            expect(arr.toString()).to.be.equal('5')
            arr.add(6)
            arr.add(7)
            arr.shiftLeft();
            expect(arr.toString()).to.be.equal('6, 7, 5')
        })
    })
    describe("shiftRight functionality",function () {
        it("should shiftRight",()=>{
            arr.shiftRight()
            expect(arr.toString()).to.be.equal('')
            arr.add(5);
            arr.shiftRight()
            expect(arr.toString()).to.be.equal('5')
            arr.add(6)
            arr.add(7)
            arr.shiftRight();
            expect(arr.toString()).to.be.equal('7, 5, 6')
        })
    })
    describe("swap functionality",function () {
        it("should swap to elements",()=>{
            arr.add(5);
            arr.add(6)
            arr.add(7)
            arr.swap(0,1)
            expect(arr.toString()).to.be.equal('6, 5, 7')
            expect(arr.swap(0,1)).to.be.true
            arr.swap(2,5);
            expect(arr.toString()).to.be.equal('5, 6, 7')
            expect(arr.swap(2,5)).to.be.false
            expect(arr.toString()).to.be.equal('5, 6, 7')
            expect(arr.swap(5,2)).to.be.false
            expect(arr.toString()).to.be.equal('5, 6, 7')
            expect(arr.swap(-1,1)).to.be.false
            expect(arr.toString()).to.be.equal('5, 6, 7')
            expect(arr.swap(0,-2)).to.be.false
            expect(arr.toString()).to.be.equal('5, 6, 7')
            expect(arr.swap('2',1)).to.be.false
            expect(arr.toString()).to.be.equal('5, 6, 7')
            expect(arr.swap(2,'1')).to.be.false
            expect(arr.toString()).to.be.equal('5, 6, 7')
            expect(arr.swap(1,1)).to.be.false
            expect(arr.toString()).to.be.equal('5, 6, 7')
            arr.swap(2,0);
            expect(arr.toString()).to.be.equal('7, 6, 5')
        })
    })
    describe("toString functionality",function () {
        it("should work",()=>{
            arr.add('5')
            arr.add(',');
            arr.add('');
            expect(arr.toString()).to.be.equal('5, ,, ')

        })
    })
})