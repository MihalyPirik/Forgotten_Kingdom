import { GameObject } from "../models/GameObject.js"
import { Player } from "../models/Player.js"
import { Line } from '../models/Line.js'
import { Point } from "../models/Point.js"
export class EntityController
{
 static BarrierCollision=(barrier,entity)=>
  {
      const [collison,x,y,distance]=barrier.CheckCollision(entity)
  
      if(collison)
      {
      const dx=entity.objX-x
      const dy=entity.objY-y
      const unitX = dx / distance
      const unitY = dy / distance
      return new Point(entity.objX + 0.5 * unitX,entity.objY + 0.5 * unitY)
      }
  }
  /**
   * 
   * @param {GameObject} entityOne
   * @param {GameObject} entityTwo 
   */
  static EntityCollision=(entityOne,entityTwo)=>
  {

      const [collision, distance, sumOfRadius, dx, dy] = entityOne.CheckCollision(entityOne,entityTwo)
  
      if (collision) {
        const unitX = dx / distance
        const unitY = dy / distance
        return [
          new Point(entityOne.objX + (sumOfRadius + 1) * unitX,entityOne.objY + (sumOfRadius + 1) * unitY),
          new Point(entityTwo.objX - (sumOfRadius + 1) * unitX,entityTwo.objY - (sumOfRadius + 1) * unitY)
        ]
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
}
