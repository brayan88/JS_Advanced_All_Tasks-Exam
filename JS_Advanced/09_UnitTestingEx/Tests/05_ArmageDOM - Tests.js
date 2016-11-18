/**
 * Created by el on 11.11.2016 г..
 */
let jsdom = require('jsdom-global')()
global.$ = global.jQuery = require('jquery')

let nuke=require('../05_ArmageDOM').nuke;
let expect = require("chai").expect;

document.body.innerHTML=`
<div id="target">
    <div class="nested target">
        <p>This is some text</p>
    </div>
    <div class="target">
        <p>Empty div</p>
    </div>
    <div class="inside">
        <span class="nested">Some more text</span>
        <span class="target">Some more text</span>
    </div>
</div>`

describe("Tests nuke function cases",function () {
    it("does nothing if selectors are equal",function () {
        let sel1 = $('.nested');
        let sel2 = $('.target');
        let before =$('#target');
        nuke(sel1,sel2);
        let after = before.html();
        expect(before.html()).to.be.equal(after)
    })
    it("does nothing if selectors dont match",function () {
        let sel1 = $('.inside');
        let sel2 = $('.target');
        let before =$('#target');
        nuke(sel1,sel2);
        let after = before.html();
        expect(before.html()).to.be.equal(after)
    })
    it("does nothing if selectors are wrongly passed",function () {
        let sel1 = '.inside';
        let sel2 = '.target';
        let before =$('#target');
        nuke(sel1,sel2);
        let after = before.html();
        expect(before.html()).to.be.equal(after)
    })
    it("remove both elements",function () {
        let sel1 = $('');
        let sel2 = '.target';
        let before =$('#target');
        nuke(sel1,sel2);
        let after = before.html();
        expect(before.html()).to.be.equal(after)
    })
})