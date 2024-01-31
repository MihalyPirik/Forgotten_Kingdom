
export class Line
{
    constructor(startPoint,endPoint,width=5)
    {
        this.startPoint=startPoint
        this.endPoint=endPoint
        this.width=width<5?5:width
    }
    CheckCollision(object)
    {


let a1 = this.startPoint.x;
let a2 = this.startPoint.y;
let b1 = this.endPoint.x;
let b2 = this.endPoint.y;
let p1 = object.objX;
let p2 = object.objY;
let n1=b1-a1
let n2=b2-a2





const x=((n2*n1*(p2-a2)+n2*n2*a1+n1*n1*p1)/(n2*n2+n1*n1))
const y = (n2*(x-a1)/n1)+a2

const distance=Math.hypot(p1-x,p2-y)



// if(object.objX<this.startPoint.x){

//     x=p1-((n1*distance)/(n2*Math.sqrt(1+(n1/n2)**2)))
// }
// else
// {
//     x=p1+((n1*distance)/(n2*Math.sqrt(1+(n1/n2)**2)))
// }
// if(object.objY<this.startPoint.y)
// {
//     y=p2+((distance)/Math.sqrt(1+(n1/n2)**2))
// }
// else
// {
//     y=p2-((distance)/Math.sqrt(1+(n1/n2)**2))
// }




          return [distance<this.width &&
            (
                (x>this.startPoint.x && x<this.endPoint.x)
                ||
                (x>this.endPoint.x && x<this.endPoint.x)
            ) 
            &&
            (
                (y>this.startPoint.y && y<this.endPoint.y)
                ||
                (y>this.endPoint.y && y<this.startPoint.y)
            )
            ,x,y,distance]
          // BP+AP>=BA-this.width/2 && BP+AP<=BA+this.width/2
    }
}

// x=(a1 n1^2 + n2 (a2 n1 + n2 p1 - n1 p2))/(n1^2 + n2^2)
// y=(a1 n1 n2 + a2 n2^2 - n1 n2 p1 + n1^2 p2)/(n1^2 + n2^2)