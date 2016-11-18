/**
 * Created by el on 1.11.2016 г..
 */
function cmdPro(input) {
    let commandProcessor = (function () {
       let str ="";
        return {
            append: (t)=>str+=t,
            removeStart: (counter)=>str=str.slice(counter),
            removeEnd: (counter)=>str=str.slice(0,str.length-counter),
            print:()=> console.log(str)
        }
    })()
    for (let line of input){
        let [command,arg]=line.split(" ");
        commandProcessor[command](arg);
    }
}

cmdPro([
    'append hello',
    'append again',
    'removeStart 3',
    'removeEnd 4',
    'print']
)