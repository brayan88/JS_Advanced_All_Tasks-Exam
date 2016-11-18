// /**
//  * Created by el on 11.11.2016 г..
//  */
// let jsdom = require('jsdom-global')()
// global.$ = global.jQuery = require('jquery')
//
// let sharedObject=require('../04_SharedObject').sharedObject;
// let expect = require("chai").expect;
//
// document.body.innerHTML=`<div id="wrapper">
//         <input type="text" id="name">
//         <input type="text" id="income">
//     </div>`;
//
// describe("Test sharedObject DOM managing properties",function () {
//     describe("sharedObject functionality",function () {
//         it("should return null for name and income",()=>{
//             expect(sharedObject.name).to.be.null
//             expect(sharedObject.income).to.be.null
//             sharedObject.changeName('');
//             expect(sharedObject.income).to.be.null
//             sharedObject.changeIncome('')
//             expect(sharedObject.income).to.be.null
//         })
//         it("should return name for name string",()=>{
//             sharedObject.changeName('pesho');
//             expect(sharedObject.name).to.equal('pesho')
//             expect($('#name').val()).to.be.equal('pesho')
//         })
//         it("should return null for wrong name string",()=>{
//             sharedObject.changeName('2');
//             expect(sharedObject.name).to.be.equal('2')
//         })
//         it("should return int for income num",()=>{
//             sharedObject.changeIncome(22);
//             expect(sharedObject.income).to.equal(22)
//             expect($('#income').val()).to.be.equal('22')
//             sharedObject.changeIncome(0);
//             expect(sharedObject.income).to.equal(22)
//             sharedObject.changeIncome(-5);
//             expect(sharedObject.income).to.equal(22)
//             sharedObject.changeIncome('-5');
//             expect(sharedObject.income).to.equal(22)
//         })
//         it("should return string for string from textbox",()=>{
//             let newName = $('#name').val('gosho')
//             sharedObject.updateName();
//             expect(sharedObject.name).to.be.equal('gosho')
//             newName.val('');
//             sharedObject.updateName();
//             expect(sharedObject.name).to.be.equal('gosho')
//         })
//         it("should return income for integer passed from textbox",()=>{
//             let newIncome=$('#income').val('5');
//             sharedObject.updateIncome();
//             expect(sharedObject.income).to.be.equal(5)
//             newIncome.val(-6)
//             sharedObject.updateIncome();
//             expect(sharedObject.income).to.be.equal(5)
//             newIncome.val(0)
//             sharedObject.updateIncome();
//             expect(sharedObject.income).to.be.equal(5)
//             newIncome.val(5.5)
//             sharedObject.updateIncome();
//             expect(sharedObject.income).to.be.equal(5)
//             newIncome.val('joro')
//             sharedObject.updateIncome();
//             expect(sharedObject.income).to.be.equal(5)
//
//         })
//     })
// })