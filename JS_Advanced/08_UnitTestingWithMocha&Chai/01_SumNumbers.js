/**
 * Created by el on 9.11.2016 г..
 */
function sum(arr) {
    let sum = 0;
    for (let num of arr)
        sum += Number(num);
    return sum;
}
module.exports = {sum};