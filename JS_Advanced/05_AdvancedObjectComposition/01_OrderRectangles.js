/**
 * Created by el on 2.11.2016 г..
 */
function createRectangles(input) {
    let finalResult =[];
    for (let line of input) {
        let rect = (function () {
            let current = {
                width: line[0],
                height: line[1],
                area: ()=> current.width * current.height,
                compareTo: function (other) {
                    let result = other.area() - current.area();
                    return result || (other.width - current.width)
                }
            }
            return current;
        })();
        finalResult.push(rect)
    }
    finalResult.sort((a,b)=>a.compareTo(b))
    return finalResult
}
createRectangles([[10,5],[5,12]]);