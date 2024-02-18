export class IsometricBlock
{

    constructor(name,backGround,spawnPoint,interior,entities=[],barriers=[],panels=[])
    {
        this.name=name
        this.interior=interior
        this.entities=entities
        this.barriers=barriers
        this.panels=panels
        this.backGround=backGround
        this.spawnPoint=spawnPoint
    }
}