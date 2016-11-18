/**
 * Created by el on 10.11.2016 г..
 */
function lookupChar(string, index) {
    if (typeof(string) !== 'string' || !Number.isInteger(index)) {
        return undefined;
    }
    if (string.length <= index || index < 0) {
        return "Incorrect index";
    }

    return string.charAt(index);
}
// console.log(lookupChar('lqlq',2))

module.exports={lookupChar}