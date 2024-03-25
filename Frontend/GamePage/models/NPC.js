import {Entity} from './Entity.js'
export class NPC extends Entity
{
    constructor(game,name,sprite,objX,objY,profession,panel=null,quest=null,id=null)
    {
super(game,sprite,objX,objY,game.width * 0.1, game.height * 0.1)
this.id=id
this.name=name
this.profession=profession
this.panel=panel
this.quest=quest
    }
    GenerateNewQuest()
    {
        
    }
}