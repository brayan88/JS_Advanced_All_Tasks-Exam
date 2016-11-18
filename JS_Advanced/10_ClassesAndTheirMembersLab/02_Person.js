/**
 * Created by el on 12.11.2016 г..
 */
class Person{
    constructor(firstName,lastName,age,email){
        this.firstName =firstName;
        this.lastName =lastName;
        this.age =age;
        this.email =email;
    }
    toString (){
        return `${this.firstName} ${this.lastName} (age: ${this.age}, email: ${this.email})`
    }
}
let maria = new Person("Maria","Petrova","18","maria@maria.bg");
console.log(""+maria)