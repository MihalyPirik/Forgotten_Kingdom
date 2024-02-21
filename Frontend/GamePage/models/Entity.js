import {GameController} from '../controllers/Game.js'
export class Entity {
    constructor(game, sprite, objX = 0, objY = 0, width = 255, height = 255, spriteWidth = 64, spriteHeight = 64) {
      /**
       * @type {GameController}
       */
      this.game = game
      this.radius = spriteWidth*0.7 / 2
      this.objX = objX
      this.objY = objY
      this.spriteX = objX - width*0.5
      this.spriteY = objY - height*0.5 -this.radius
      this.frameX = 0
      this.frameY = 0
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
return true
        }
        else
        {
return false
        }
      }
  }