/**
 * Created by el on 5.11.2016 г..
 */
let sum=(function sum() {
    let internalNum = 0;
    function add (num) {
       internalNum+=num;
        return add;
    }
    add.toString= ()=> internalNum;
    return add;
})();
console.log(sum(10)(3).toString())

