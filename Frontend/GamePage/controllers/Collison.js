import {Monster} from '../models/Monster.js'
import { Point } from "../models/Point.js"
import { Entity } from "../models/Entity.js"
import { SpriteController } from "./Sprite.js"
import {Line} from '../models/Line.js'
import { Circle } from '../models/Circle.js'
export class EntityController
{
 static BarrierCollision(barrier,entity)
  {
    const collison=barrier.CheckCollision(entity)
    if(barrier instanceof Line)
    {
      
      if(collison)
      {
const a1 = barrier.startPoint.x;
const a2 = barrier.startPoint.y;
const b1 = barrier.endPoint.x;
const b2 = barrier.endPoint.y;
const p1 = entity.objX;
const p2 = entity.objY;
const n1=b1-a1
const n2=b2-a2
const x=((n2*n1*(p2-a2)+n2*n2*a1+n1*n1*p1)/(n2*n2+n1*n1))
const y = (n2*(x-a1)/n1)+a2
const distance=Math.hypot(p1-x,p2-y)
if(distance<barrier.width){
      const dx=p1-x
      const dy=p2-y
      const unitX = dx / distance
      const unitY = dy / distance
      return new Point(p1 + 0.5 * unitX,p2 + 0.5 * unitY)
      }
    }
  }
  if(barrier instanceof Circle)
  {
    if(collison)
    {
      console.log(barrier);
      const dx = barrier.x - entity.objX
      const dy = barrier.y - entity.objY
      const distance = Math.hypot(dx, dy)
      const sumOfRadius = barrier.radius + entity.radius
      if(distance<sumOfRadius)
      {
        const unitX = dx / distance
        const unitY = dy / distance
        return new Point(entity.objX - 0.5 * unitX,entity.objY - 0.5 * unitY)
      }
    }
    
  }
  }



static EntityCollision(entityOne,entityTwo)
  {


      if (Entity.CheckCollision(entityOne,entityTwo)) {
        const dx = entityTwo.objX - entityOne.objX
      const dy = entityTwo.objY - entityOne.objY
      const distance = Math.hypot(dx, dy)
      const sumOfRadius = entityTwo.radius + entityOne.radius
      if(distance<sumOfRadius){
        const unitX = dx / distance
        const unitY = dy / distance
        
        return [
          new Point(entityOne.objX + (sumOfRadius + 1) * unitX,entityOne.objY + (sumOfRadius + 1) * unitY),
          new Point(entityTwo.objX - (sumOfRadius + 1) * unitX,entityTwo.objY - (sumOfRadius + 1) * unitY)
        ]
      }
    }
  }
  
  
  

/**
 * 
 * @param {Monster} monsterInstance
 */
static MoveMonster(monsterInstance)
{
  if(monsterInstance instanceof Monster && monsterInstance.NoticePlayer()){


    const previousX=monsterInstance.objX
    const previousY=monsterInstance.objY
    
    const dx=monsterInstance.game.player.objX-monsterInstance.objX
    const dy=monsterInstance.game.player.objY-monsterInstance.objY
    const distance=Math.hypot(dx,dy)
    const unitX = dx / distance
        const unitY = dy / distance
        const newX=monsterInstance.objX+monsterInstance.speed*unitX
        const newY=monsterInstance.objY+monsterInstance.speed*unitY
        const dx1=newX-previousX
        const dy2=newY-previousY
        const angle=Math.atan2(dx1,dy2)
        SpriteController.MoveSprite(monsterInstance,angle)
        return new Point(newX,newY)

}
return new Point(monsterInstance.objX,monsterInstance.objY)
}

}


