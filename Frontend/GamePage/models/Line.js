import { Point } from "./Point.js";

export class Line {
    /**
     * 
     * @param {Point} startPoint 
     * @param {Point} endPoint 
     * @param {number} width 
     */
    constructor(startPoint, endPoint, width = 10) {
        this.startPoint = startPoint
        this.endPoint = endPoint
        this.width = width
    }
    CheckCollision(entity)
    {
const x=entity.objX
const y=entity.objY
const a1 = this.startPoint.x;
const a2 = this.startPoint.y;
const b1 = this.endPoint.x;
const b2 = this.endPoint.y;
if(

((x>=a1 && x<=b1) || (x>=b1 && x<=a1)) && ((y>=a2 && y<=b2) || (y>=b2 && y<=a2)))
{


return true
}
else{
    return false
}
    }
}