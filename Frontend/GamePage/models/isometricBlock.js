export class IsometricBlock
{

    constructor(name,backGround,interior,entities=[],barriers=[],panels=[],entityWidth=0.15,entityHeight=0.15)
    {
        this.name=name
        this.interior=interior
        this.entities=entities
        this.barriers=barriers
        this.panels=panels
        this.backGround=backGround
        this.entityWidth=entityWidth
        this.entityHeight=entityHeight
    }
}