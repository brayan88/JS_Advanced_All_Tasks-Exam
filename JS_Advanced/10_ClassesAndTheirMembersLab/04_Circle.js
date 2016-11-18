/**
 * Created by el on 12.11.2016 г..
 */
class Circle{
    constructor(radius){
        this.radius=radius;
    }
    get diameter(){
        return this.radius*2;
    }
    set diameter(diameter){
        this.radius=diameter/2
    }
    get area(){
        return Math.PI*this.radius*this.radius;
    }
}
let c = new Circle(2);
// console.log(c.radius)
console.log(c.diameter)
c.diameter=10;
console.log(c.area)