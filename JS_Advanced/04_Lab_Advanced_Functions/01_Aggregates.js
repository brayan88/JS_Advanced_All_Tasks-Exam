/**
 * Created by el on 1.11.2016 г..
 */
function aggregate (input){
    console.log("Sum = "+input.reduce((a,b)=>a+b))
    console.log("Min = "+input.reduce((a,b)=>Math.min(a,b)))
    console.log("Max = "+input.reduce((a,b)=>Math.max(a,b)))
    console.log("Join = "+input.reduce((a,b)=>""+a+b))

}
aggregate([2,3,10,5]);