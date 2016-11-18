/**
 * Created by el on 12.11.2016 г..
 */
class Point {
    constructor(x,y){
        this.x=x;
        this.y=y;
    }
    static distance (a,b){
        const dx = a.x-b.x;
        const dy = a.y-b.y;
        return Math.sqrt(dx*dx+dy*dy)
    }
}
let pA = new Point(5,5)
let pB = new Point(9,8);
console.log(Point.distance(pA,pB))