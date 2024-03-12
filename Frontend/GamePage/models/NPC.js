import {Entity} from './Entity.js'
export class NPC extends Entity
{
    constructor(game,name,sprite,objX,objY,profession,panel=null,quest=null,mainStory=null)
    {
super(game,sprite,objX,objY,game.width * 0.1, game.height * 0.1)

this.name=name
this.mainStory = mainStory
this.profession=profession
this.panel=panel
this.quest=quest
    }
}