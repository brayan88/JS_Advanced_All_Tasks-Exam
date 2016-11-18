/**
 * Created by el on 3.11.2016 г..
 */
function nFibonacciNums(n) {
    let result =[];

    let fib =(()=> {
        let f1=1;
        let f0=0;
        return ()=> {
            let f1Old = f1;
            let f0Old = f0;
            f1 = f0Old + f1Old;
            f0 = f1Old;
            return f1Old;
        }
    })();
    for (let i = 0; i < n; i++) {
        result.push(fib());
    }
    console.log(result);
}
nFibonacciNums([15]);