export class GameObject {
    constructor(game, sprite, objX = 0, objY = 0, width = 255, height = 255, spriteWidth = 64, spriteHeight = 64) {
      this.game = game
      this.radius = spriteWidth / 2
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
      this.move = { event: null, timer: 0, interval: 2 }
    }



    static CheckCollision(objectOne,objectTwo) {
      if(
        objectOne.objX<objectTwo.objX+objectOne.width*0.5 && objectOne.objX>objectTwo.objX-objectOne.width*0.5
        && 
        objectOne.objY<objectTwo.objY+objectOne.height*0.5 && objectOne.objY>objectTwo.objY-objectOne.height*0.5
        ){
      const dx = objectTwo.objX - objectOne.objX
      const dy = objectTwo.objY - objectOne.objY
      const distance = Math.hypot(dx, dy)
      const sumOfRadius = objectTwo.radius + objectOne.radius
      return [distance < sumOfRadius, distance, sumOfRadius, dx, dy]
        }
        return [false]
    }
  }