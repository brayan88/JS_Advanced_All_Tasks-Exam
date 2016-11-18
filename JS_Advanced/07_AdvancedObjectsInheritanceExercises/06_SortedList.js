/**
 * Created by el on 9.11.2016 г..
 */
function addFunctionality() {
    let nums = [];
    function add(element) {
        return nums.push(element);
    }
    function remove(index) {
        if(nums.indexOf(index)!=-1)
            nums.splice(nums.indexOf(index),1)
        else{
            return throw new Error;
        }
    }
    function getIndex(index) {
        if(nums.indexOf(index)!=-1)
            return nums.indexOf(index)
        else{
            return throw new Error;
        }
    }
    return
}