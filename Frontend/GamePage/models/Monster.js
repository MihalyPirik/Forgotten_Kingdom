import {GameObject} from './GameObject.js'
export class Monster extends GameObject
{
    constructor(id,game,sprite,objX,objY,name,HP,attack,level,speed)
    {
        super(game,sprite,objX,objY,game.width * 0.35, game.height * 0.6, game.width*0.2, game.height*0.2)
this.name=name
this.speed=speed
this.HP=HP
this.attack=attack
this.level=level
this.id=id
this.noticeRadius=10
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