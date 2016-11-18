/**
 * Created by el on 10.11.2016 г..
 */
let rgbToHexColor =require("../03_RgbToHex").rgbToHexColor;
let expect =require("chai").expect;

describe("RgbToHex Tests",function () {
    describe("Tests with numbers",()=> {
        it("should return '#C9CACB' when 201,202,203", ()=> {
            expect(rgbToHexColor(201, 202, 203)).to.be.equal('#C9CACB')
        })
        it("should return '#C9CACB' when 201,202,203", ()=> {
            expect(rgbToHexColor(255, 255, 255)).to.be.equal('#FFFFFF')
        })
        it("should return '#0A141E' when 10,20,30", ()=> {
            expect(rgbToHexColor(10,20,30)).to.be.equal('#0A141E')
        })
        it("should return '#000000' when 0,0,0", ()=> {
            expect(rgbToHexColor(0,0,0)).to.be.equal('#000000')
        })
        it("should return '#010203' when 1,2,3", ()=> {
            expect(rgbToHexColor(1,2,3)).to.be.equal('#010203')
        })
        it("should return 'undefined' when -1,2,3", ()=> {
            expect(rgbToHexColor(-1,2,3)).to.be.undefined
        })
        it("should return 'undefined' when 0,256,0", ()=> {
            expect(rgbToHexColor(0,256,0)).to.be.undefined
        })
        it("should return 'undefined' when 0,256,0", ()=> {
            expect(rgbToHexColor(256,0,0)).to.be.undefined
        })
        it("should return 'undefined' when 0,256,0", ()=> {
            expect(rgbToHexColor(0,0,256)).to.be.undefined
        })
        it("should return 'undefined' when 0,3.14,0", ()=> {
            expect(rgbToHexColor(0,3.14,0)).to.be.undefined
        })
        it("should return 'undefined' when 0,3.14,0", ()=> {
            expect(rgbToHexColor(3.14,0,0)).to.be.undefined
        })
        it("should return 'undefined' when 0,3.14,0", ()=> {
            expect(rgbToHexColor(0,0,3.14)).to.be.undefined
        })
        it("should return 'undefined' when 'pesho,2,3'", ()=> {
            expect(rgbToHexColor('pesho',2,3)).to.be.undefined
        })
        it("should return 'undefined' when '1,325,3'", ()=> {
            expect(rgbToHexColor(1,325,3)).to.be.undefined
        })
        it("should return 'undefined' when '1',325,3", ()=> {
            expect(rgbToHexColor('1',325,3)).to.be.undefined
        })
        it("should return 'undefined' when 1,325,[3]", ()=> {
            expect(rgbToHexColor(1,325,[3])).to.be.undefined
        })
    })
    describe("Special cases",()=> {
        it("should return 'undefined' when ''", ()=> {
            expect(rgbToHexColor()).to.be.undefined
        })
        it("should return 'undefined' when ''", ()=> {
            expect(rgbToHexColor(0,15)).to.be.undefined
        })
        it("should return 'undefined' when ''", ()=> {
            expect(rgbToHexColor(10,20,30,40)).to.be.equal('#0A141E')
        })
        it("should return 'undefined' when ''", ()=> {
            expect(rgbToHexColor('#10,20,30')).to.be.undefined
        })
        it("should return 'undefined' when ''", ()=> {
            expect(rgbToHexColor([],[],[])).to.be.undefined
        })
    })
})