export class IsometricBlock
{

    constructor(name,backGround,entities=[],barriers=[],panels=[])
    {
        this.name=name
        this.entities=entities
        this.barriers=barriers
        this.panels=panels
        this.backGround=backGround
    }
}