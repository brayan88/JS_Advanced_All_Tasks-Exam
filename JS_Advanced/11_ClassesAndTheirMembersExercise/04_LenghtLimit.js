/**
 * Created by el on 14.11.2016 г..
 */
class Stringer {
    constructor (string,lenght){
        this.innerString=string;
        this.innerLenght =Number(lenght);
    }
    increase(lenght){
       this.innerLenght+=lenght
    }
    decrease(lenght){
        this.innerLenght-=lenght
        if(this.innerLenght<0)
            this.innerLenght=0;
    }
    toString(){
        let tmpString =this.innerString;
        let actualLenght = tmpString.length;
        if(actualLenght>=this.innerLenght&&this.innerLenght!=0){
            return tmpString.substring(0,actualLenght-this.innerLenght)+"...";
        }
        if(this.innerLenght==0)
            return "..."
        return tmpString
    }
}
let test = new Stringer("Test", 5);
console.log(test.toString()); //Test
//
test.decrease(3);
console.log(test.toString()); //Te...

test.decrease(5);
console.log(test.toString()); //...

test.increase(4);
console.log(test.toString()); //Test
