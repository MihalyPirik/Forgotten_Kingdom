import { Point } from "./Point.js";

export class Line {
    /**
     * 
     * @param {Point} startPoint 
     * @param {Point} endPoint 
     * @param {number} width 
     */
    constructor(startPoint, endPoint, width = 5) {
        this.startPoint = startPoint
        this.endPoint = endPoint
        this.width = width < 5 ? 5 : width
    }
    CheckCollision(entity)
    {
let x=entity.objX
let y=entity.objY
let a1 = this.startPoint.x;
let a2 = this.startPoint.y;
let b1 = this.endPoint.x;
let b2 = this.endPoint.y;
if(

((x>=a1 && x<=b1) || (x>=b1 && x<=a1)) && ((y>=a2 && y<=b2) || (y>=b2 && y<=a2)))
{

let p1 = entity.objX;
let p2 = entity.objY;
let n1=b1-a1
let n2=b2-a2





x=((n2*n1*(p2-a2)+n2*n2*a1+n1*n1*p1)/(n2*n2+n1*n1))
y = (n2*(x-a1)/n1)+a2

const distance=Math.hypot(p1-x,p2-y)
return [distance<=this.width,x,y,distance]
}
else{
    return [false]
}
    }
}