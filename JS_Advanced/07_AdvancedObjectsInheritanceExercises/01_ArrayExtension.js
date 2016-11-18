/**
 * Created by el on 7.11.2016 г..
 */
(function addFuncunality() {
    Array.prototype.last= function () {
        let lastNum = this[this.length-1];
        return lastNum;
    }
    Array.prototype.skip= function (n) {
        let newArr=[];
        let arr=this;
        return arr.slice(n)
    }
    Array.prototype.take= function (n) {
        return this.slice(0,n+1);
    }
    Array.prototype.sum= function () {
        let sum =0;
        this.map(x=>sum+=x)
        return sum
    }
    Array.prototype.average= function () {
        let sum =0;
        this.map(x=>sum+=x)
        return sum/this.length
    }
})()
let arr =[1,2,3,4,5,2,3];
// console.log(arr.last());
// console.log(arr.skip(3));
// console.log(arr.skip(2))
console.log(arr.last())