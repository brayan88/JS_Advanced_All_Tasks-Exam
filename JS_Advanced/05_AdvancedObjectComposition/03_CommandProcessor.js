/**
 * Created by el on 3.11.2016 г..
 */
function commandProcessor(input) {
    let cmdPro=(()=> {
        let result = [];
        return {
            add: function (str) {
                result.push(str)
            },
            remove: function (str) {
                for (let r of result) {
                    if (r == str) {
                        let index = result.indexOf(r)
                        result.splice(index, 1);
                    }
                }
            },
            print:function () {
                console.log(result.join(","))
            }
        }
    })();
    for (let i = 0; i < input.length; i++) {
        let element =input[i];
            let [cmd,str]=element.split(" ");
            cmdPro[cmd](str);

    }
}
commandProcessor(['add hello', 'add again', 'remove hello', 'add again', 'print']);