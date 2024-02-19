import { Entity } from "./Entity.js"

export class Monster extends Entity
{
    constructor(id,name,game,sprite,objX,objY,HP,attack,level,speed)
    {
        super(game,sprite,objX,objY,game.width*0.1, game.height*0.1)
this.name=name
this.radius=game.width*0.03
this.speed=speed
this.HP=HP
this.attack=attack
this.level=level
this.id=id
this.noticeRadius=100
this.attackRadius=4
    }
    NoticePlayer()
    {
        if(Math.abs(this.objX-this.game.player.objX)<this.noticeRadius && Math.abs(this.objY-this.game.player.objY)<this.noticeRadius)
        {
return true
        }
        return false

    }
}