export class Interaction
{
    constructor(x,y,radius,event)
    {
        this.x=x
        this.y=y
        this.radius=radius
        this.event=event
    }
    execute(){this.event}
}