/**
 * Created by el on 8.11.2016 г..
 */
function solve() {
    let obj={};
    obj.extend = function (template) {
        for (let key in template) {
            if(typeof template[key]=="function")
                Object.getPrototypeOf(obj)[key]=template[key];
            obj[key]=template[key];
        }
    }
    return obj;
}
var template = {
    extensionMethod: function () {
        console.log("From extension method")
    }
};
let myObj = solve();
myObj.extend(template);