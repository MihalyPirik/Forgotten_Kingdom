import { GameObject } from "./GameObject.js"

export class Player extends GameObject {
    constructor(game,speed=4) {

      super(game, document.getElementById('character'), game.width * 0.35, game.height * 0.6, 180, 180)

      this.interactions=[[]]
      this.speed = speed
      this.move = { event: null, timer: 0, interval: 2 }

    }
    Update() {
      if (!this.move.event) {
        return
      }

      let previousX = this.objX
      let previousY = this.objY
      let newX = previousX
      let newY = previousY
      
    //   if (IsOnLine(this.game.canvas.width * 0.2, this.game.canvas.height * 0.775, this.game.canvas.width * 0.5, this.game.canvas.height * 0.94, this.objX, this.objY) ||
    //     IsOnLine(this.game.canvas.width * 0.2, this.game.canvas.height * 0.775, this.game.canvas.width * 0.5, this.game.canvas.height * 0.67, this.objX, this.objY)
    //     || IsOnLine(this.game.canvas.width * 0.5, this.game.canvas.height * 0.67, this.game.canvas.width * 0.78, this.game.canvas.height * 0.78, this.objX, this.objY)
    //     || IsOnLine(this.game.canvas.width * 0.78, this.game.canvas.height * 0.78, this.game.canvas.width * 0.5, this.game.canvas.height * 0.938, this.objX, this.objY)) {
    //     if (this.move.event.key == 'd') {
    //       newX -= 2
    //     }
    //     if (this.move.event.key == 'a') {
    //       newX += 2
    //     }
    //     if (this.move.event.key == 'w') {
    //       newY += 2
    //     }
    //     if (this.move.event.key == 's') {
    //       newY -= 2
    //     }
    //     this.objX = newX
    //     this.objY = newY
    //     return
    //   }
    //   if (Math.hypot(this.objX - this.game.width * 0.2, this.objY - this.game.height * 0.62) < 100) {

    //     panel.style.left = this.game.width * 0.16 + 'px'
    //     panel.style.top = this.game.height * 0.48 + 'px'
    //     body.appendChild(panel)

    //   } else {
    //     panel.remove()
    //   }
      if (this.move.event.key == 'd') {
        if (this.objX + this.radius < this.game.width) {
          newX += this.speed
          if (this.move.timer > this.move.interval) {
            if (this.frameX < 5) {
              this.frameX += 1
            }
            else {
              this.frameX = 0
            }
            this.move.timer = 0
          }
          this.frameY = 6
        }
      }
      if (this.move.event.key == 'a') {
        if (this.objX - this.radius > 0) {
          newX -= this.speed
          if (this.move.timer > this.move.interval) {
            if (this.frameX < 5) {
              this.frameX += 1
            }
            else {
              this.frameX = 0
            }
            this.move.timer = 0
          }
          this.frameY = 7
        }
      }
      if (this.move.event.key == 'w') {
        if (this.objY - this.spriteHeight > 0) {
          newY -= this.speed
          if (this.move.timer > this.move.interval) {
            if (this.frameX < 5) {
              this.frameX += 1
            }
            else {
              this.frameX = 0
            }
            this.move.timer = 0
          }
          this.frameY = 5
        }
      }
      if (this.move.event.key == 's') {
        if (this.objY + this.radius < this.game.height) {
          newY += this.speed
          if (this.move.timer > this.move.interval) {
            if (this.frameX < 5) {
              this.frameX += 1
            }
            else {
              this.frameX = 0
            }
            this.move.timer = 0
          }
          this.frameY = 4
        }
      }
      this.move.timer++
      this.game.objects[this.game.currentBlock].forEach(object => {
        const [collision, distance, sumOfRadius, dx, dy] = this.game.CheckCollision(this, object)

        if (collision) {
          const unitX = dx / distance
          const unitY = dy / distance
          newX = object.objX + (sumOfRadius + 1) * unitX
          newY = object.objY + (sumOfRadius + 1) * unitY
        }
      })

      this.game.barriers[this.game.currentBlock].forEach(barrier=>{

      
                const distance = Math.abs((barrier.endPoint.x-barrier.startPoint.x)*(barrier.startPoint.y-this.objY)-(barrier.startPoint.x-this.objX)*(barrier.endPoint.y-barrier.startPoint.y))/Math.hypot(barrier.endPoint.x-barrier.startPoint.x,barrier.endPoint.y-barrier.startPoint.y)
                if(distance<4){
                const dx=distance/Math.sqrt(1+Math.pow((barrier.startPoint.y-barrier.endPoint.y)/(barrier.startPoint.x-barrier.endPoint.x),2))
                const dy=distance*(barrier.startPoint.y-barrier.endPoint.y)/(barrier.startPoint.x-barrier.endPoint.x)/Math.sqrt(1+Math.pow((barrier.startPoint.y-barrier.endPoint.y)/(barrier.startPoint.x-barrier.endPoint.x),2))
                const unitX = dx / distance
          const unitY = dy / distance
 
          newX = this.objX + (10-distance + 1) * Math.ceil(unitX)
          newY = this.objY + (10-distance + 1) * Math.ceil(unitY)
 
                return
            }
          })
                
this.interactions[this.game.currentBlock].forEach(interaction=>
  {
    const distance=Math.hypot(this.objX-interaction.x,this.objY,interaction.y)
    if(distance<interaction.radius)
    {
      interaction.execute()
      return
    }
  })



      this.objX = newX
      this.objY = newY
      this.spriteX = this.objX - this.width * 0.5
      this.spriteY = this.objY - this.height * 0.5 - this.radius



    }
  }