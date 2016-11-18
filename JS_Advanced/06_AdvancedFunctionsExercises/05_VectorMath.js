/**
 * Created by el on 5.11.2016 г..
 */
let solution =(function () {
    function add(vecA,vecB) {
        return [vecA[0]+vecB[0],vecA[1]+vecB[1]];
    }
    function multiply(vec1,scalar) {
        return [vec1[0]*scalar,vec1[1]*scalar];
    }
    function length(vec) {
        return Math.sqrt(Math.pow(vec[0],2)+Math.pow(vec[1],2));
    }
    function dot(vecA,vecB) {
        return vecA[0]*vecB[0]+vecA[1]*vecB[1];
    }
    function cross(vecA,vecB) {
        return vecA[0]*vecB[1]-vecA[1]*vecB[0];
    }
    return {add,multiply,length,dot,cross};
})();
console.log(solution.add([1, 1], [1, 0]));
console.log(solution.multiply([3.5, -2], 2));
console.log(solution.length([3, -4]));
console.log(solution.dot([1, 0], [0, -1]));
console.log(solution.cross([3, 7], [1, 0]));
