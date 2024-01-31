
export class Line
{
    constructor(startPoint,endPoint,width=2)
    {
        this.startPoint=startPoint
        this.endPoint=endPoint
        this.width=width
    }
    CheckCollision(object)
    {
        const BA=Math.hypot(this.endPoint.x-this.startPoint.x,this.endPoint.y-this.startPoint.y)
          const BP=Math.hypot(this.endPoint.x-object.objX,this.endPoint.y-object.objY)
          const AP=Math.hypot(this.startPoint.x-object.objX,this.startPoint.y-object.objY)
          const AQ=AP*(Math.pow(BP,2)-Math.pow(AP,2)-Math.pow(BA,2))/(-2*AP*BA)
const sinalfa=Math.sqrt(1-Math.pow((Math.pow(BP,2)-Math.pow(AP,2)-Math.pow(BA,2))/(-2*AP*BA),2))
const distance=sinalfa*AP
let a1 = this.startPoint.x;
let a2 = this.startPoint.y;
let b1 = this.endPoint.x;
let b2 = this.endPoint.y;
let p1 = object.objX;
let p2 = object.objY;

let x = ((b2 - a2) * p1 + (b1 - a1) * p2) / ((b2 - a2) * (a1 - p1) + (b1 - a1) * (a2 - p2));
let y = ((b2 - a2) * a1 * p2 - (b1 - a1) * a2 * p1) / ((b2 - a2) * (a1 - p1) + (b1 - a1) * (a2 - p2));
          return [distance<this.width,Math.abs(x),Math.abs(y)]
          // BP+AP>=BA-this.width/2 && BP+AP<=BA+this.width/2
    }
}