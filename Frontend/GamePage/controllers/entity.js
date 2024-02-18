import { Player } from "../models/Player.js"
import {Monster} from '../models/Monster.js'
import { Point } from "../models/Point.js"
import { Entity } from "../models/Entity.js"
export class EntityController
{
 static BarrierCollision=(barrier,entity)=>
  {
      const collison=barrier.CheckCollision(entity)
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



static EntityCollision=(entityOne,entityTwo)=>
  {
const collision=Entity.CheckCollision(entityOne,entityTwo)

      if (collision) {
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
   * @param {Player} player 
   */
  static MovePlayer=(player)=>
  {
      if (player.move.event) {
        

        let newX = player.objX
        let newY = player.objY
  
        if (player.move.event.key == 'd') {

            newX += player.speed
            if (player.move.timer > player.move.interval) {
              if (player.frameX < 5) {
                player.frameX += 1
              }
              else {
                player.frameX = 0
              }
              player.move.timer = 0
            }
            player.frameY = 6
        }
        if (player.move.event.key == 'a') {
            newX -= player.speed
            if (player.move.timer > player.move.interval) {
              if (player.frameX < 5) {
                player.frameX += 1
              }
              else {
                player.frameX = 0
              }
              player.move.timer = 0
            }
            player.frameY = 7
        }
        if (player.move.event.key == 'w') {

            newY -= player.speed
            if (player.move.timer > player.move.interval) {
              if (player.frameX < 5) {
                player.frameX += 1
              }
              else {
                player.frameX = 0
              }
              player.move.timer = 0
            }
            player.frameY = 5
        }
        if (player.move.event.key == 's') {
            newY += player.speed
            if (player.move.timer > player.move.interval) {
              if (player.frameX < 5) {
                player.frameX += 1
              }
              else {
                player.frameX = 0
              }
              player.move.timer = 0
            }
            player.frameY = 4
        }
        player.move.timer++
        return new Point(newX,newY)
  }
}
/**
 * 
 * @param {Monster} monsterInstance
 */
static MoveMonster(monsterInstance)
{
  if(monsterInstance.NoticePlayer())
  {
    const dx=monsterInstance.game.player.objX-monsterInstance.objX
    const dy=monsterInstance.game.player.objY-monsterInstance.objY
    const distance=Math.hypot(dx,dy)
    const unitX = dx / distance
        const unitY = dy / distance
        const newX=monsterInstance.objX+monsterInstance.speed*unitX
        const newY=monsterInstance.objY+monsterInstance.speed*unitY
        return new Point(newX,newY)
  }
}
}
