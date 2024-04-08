import {GameController} from '../controllers/Game.js'
import { Point } from './Point.js'
export class Entity {
    constructor(game, sprite, objX = 0, objY = 0, width = 255, height = 255, spriteWidth = 64, spriteHeight = 64,id=null,isInterior=false) {
      /**
       * @type {GameController}
       */
      this.isInterior=isInterior
      this.game = game
      this.id = id
      this.radius = spriteWidth * 0.6 / 2
      this.objX = objX
      this.objY = objY
      this.spriteX = objX - width*0.5
      this.spriteY = objY - height*0.5 -this.radius
      this.isDead=false
      this.frameX = 0
      this.frameY = 0
      this.blockX = this.game.currentBlockX
      this.blockY = this.game.currentBlockY
      this.width = width
      this.height = height
      this.spriteWidth = spriteWidth
      this.spriteHeight = spriteHeight
      this.sprite = sprite
      this.move = { event: null, timer: 0, interval: 4 }
    }


    static CheckCollision(objectOne,objectTwo) {
      if(
        objectOne.objX<objectTwo.objX+objectOne.width*0.5 && objectOne.objX>objectTwo.objX-objectOne.width*0.5
        && 
        objectOne.objY<objectTwo.objY+objectOne.height*0.5 && objectOne.objY>objectTwo.objY-objectOne.height*0.5
        )
        {
          const dx = objectTwo.objX - objectOne.objX
      const dy = objectTwo.objY - objectOne.objY
      const distance = Math.hypot(dx, dy)
      const sumOfRadius = objectTwo.radius + objectOne.radius
      if(distance<sumOfRadius){
        const unitX = dx / distance
        const unitY = dy / distance
        return [
          new Point(objectOne.objX + (sumOfRadius + 1) * unitX,objectOne.objY + (sumOfRadius + 1) * unitY),
          new Point(objectTwo.objX - (sumOfRadius + 1) * unitX,objectTwo.objY - (sumOfRadius + 1) * unitY)
        ]
      }
        }
        return false
      }
      Attack(){}
      Move(){}
  }

