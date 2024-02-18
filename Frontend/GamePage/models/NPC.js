import {Entity} from './Entity.js'
export class NPC extends Entity
{
    constructor(game,name,profession,panel=null,quest=null)
    {
super(game,sprite,objX,objY,game.width*0.2,game.width*0.2,game.width*0.2,game.width*0.2)

this.name=name
this.profession=profession
this.panel=panel
this.quest=quest
    }
}