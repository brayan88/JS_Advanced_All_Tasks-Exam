/**
 * Created by el on 10.11.2016 г..
 */
function isOddOrEven(string) {
    if (typeof(string) !== 'string') {
        return undefined;
    }
    if (string.length % 2 === 0) {
        return "even";
    }
    return "odd";
}
// console.log(isOddOrEven("pesho"))

module.exports= {isOddOrEven}