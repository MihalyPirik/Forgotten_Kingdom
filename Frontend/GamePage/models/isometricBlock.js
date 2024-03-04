export class IsometricBlock
{

    constructor(name,backGround,interior,entities=[],barriers=[],panels=[])
    {
        this.name=name
        this.interior=interior
        this.entities=entities
        this.barriers=barriers
        this.panels=panels
        this.backGround=backGround
    }
}