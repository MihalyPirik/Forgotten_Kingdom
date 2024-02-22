export class Circle
{
    constructor(x,y,radius)
    {
        this.x=x
        this.y=y
        this.radius=radius
        this.a=y+radius
        this.b=y-radius
        this.c=x+radius
        this.d=x-radius
    }
    CheckCollision(entity)
    {
        if
        (
            entity.objY<this.a && entity.objY>this.b
            &&
            entity.objX<this.c && entity.objX>this.d
        )
        {
            return true
        }
    }
}