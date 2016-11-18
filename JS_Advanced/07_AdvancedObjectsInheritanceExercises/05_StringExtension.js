/**
 * Created by el on 8.11.2016 г..
 */
(function solve() {
    String.prototype.ensureStart=function (el) {
        let str =this;
        if(str.indexOf(el)==-1)
            return str=el+str;
        else{
            return this.toString();
        }
    };
    String.prototype.ensureEnd=function (el) {
        let str =this;
        if(str.indexOf(el)==-1)
            return str=str+el;
        else
            return this.toString()
    };
    String.prototype.isEmpty=function () {
        return this=="";
    };
    String.prototype.truncate=function (n) {
        let str =this;
        if(n<4)
            return ".".repeat(n);
        else if(str.length>n){
            let tmp1 = str.substring(0,n);
            if(tmp1.indexOf(" ")!=-1) {
                let arr=tmp1.split(" ")
                let result =arr[0];
                for (let i = 1; i < arr.length; i++) {
                    if(result.length+arr[i].length+4>n)
                        return result+"...";
                    result+=" "+arr[i];
                }

            }
            else{
                tmp3=str.substring(0,n-3);
                return str = tmp3+"...";
            }
        }
        else
            return str.toString()
    };
    String.format =function (string,...params) {
        let result="";
        for (let i = 1; i < arguments.length; i++) {
            string = string.replace('{'+(i-1)+'}',arguments[i])
        }
        return string
    }
})();
let str = 'my string';
str=str.ensureStart('my');
console.log(str)
str=str.ensureStart('hello ');
console.log(str);
str = str.truncate(16);
console.log(str);
str = str.truncate(14)
console.log(str)
str = str.truncate(8)
console.log(str)
str = str.truncate(4)
console.log(str)
str = str.truncate(2)
console.log(str)
str = String.format('The {0} {1} fox',
    'quick', 'brown');
console.log(str)
str = String.format('jumps {0} {1}',
    'dog');
console.log(str)

