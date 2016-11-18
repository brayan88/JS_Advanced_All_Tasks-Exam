/**
 * Created by el on 4.11.2016 г..
 */
function argumentInfo() {
    let result =new Map();
    for (let i = 0; i < arguments.length; i++) {
        let obj = arguments[i];
        let type = typeof obj;
        console.log(`${type}: ${obj}`);
        if(!result.has(type)){
            result.set(type,1);
        }else {
            result.set(type,result.get(type)+1)
        }

    }
    function descending(a,b,result) {
        return result.get(b[0])-result.get(a[0])
    }
    let resultARR=[...result].sort((a,b)=>descending(a,b,result))
    for (let arr of resultARR){
        console.log(arr.join(" = "))
    }
}
argumentInfo('cat',42,function () { console.log('Hello world!'); });