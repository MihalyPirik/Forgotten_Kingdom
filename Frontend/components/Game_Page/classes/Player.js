import { GameObject } from "./GameObject.js"

export class Player extends GameObject {
    constructor(name,HP,money,inventory,game,tools=[],speed=4) {
      super(game, document.getElementById('character') ,game.width * 0.35, game.height * 0.6, game.width*0.2, game.height*0.2)
      this.speed = speed
      this.tools=tools
      this.name=name
      this.money=money
      this.inventory=inventory
      this.HP=HP
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
      this.game.currentBlock.objects.forEach(object => {
        const [collision, distance, sumOfRadius, dx, dy] = this.game.CheckCollision(this, object)

        if (collision) {
          const unitX = dx / distance
          const unitY = dy / distance
          newX = object.objX + (sumOfRadius + 1) * unitX
          newY = object.objY + (sumOfRadius + 1) * unitY
          this.objX=newX
          this.objY=newX
        }
      })

      

      for (const barrier of this.game.currentBlock.barriers)
      {
        const [collison,x,y,distance]=barrier.CheckCollision(this)

        if(collison)
        {
        
        const dx=this.objX-x
        const dy=this.objY-y
        
        const unitX = dx / distance
        const unitY = dy / distance
        this.objX = this.objX + 0.5 * unitX
        this.objY = this.objY + 0.5 * unitY
        newX=this.objX
        newY=this.objY
        break
        }
      }
      
// this.game.context.lineWidth=2
// this.game.context.moveTo(barrier.startPoint.x,barrier.startPoint.y)
// this.game.context.lineTo(this.objX,this.objY)
// this.game.context.moveTo(barrier.endPoint.x,barrier.endPoint.y)
// this.game.context.lineTo(this.objX,this.objY)
// this.game.context.stroke()
      // const BA=Math.hypot(barrier.endPoint.x-barrier.startPoint.x,barrier.endPoint.y-barrier.startPoint.y)
      //   const BP=Math.hypot(barrier.endPoint.x-this.objX,barrier.endPoint.y-this.objY)
      //   const AP=Math.hypot(barrier.startPoint.x-this.objX,barrier.startPoint.y-this.objY)
      //   const AQ=AP*(Math.pow(BP,2)-Math.pow(AP,2)-Math.pow(BA,2))/(-2*AP*BA)
      //   const t=AQ/BA
      //   const q1=(1-t)*barrier.startPoint.x+t*barrier.endPoint.x
      //   const q2=(1-t)*barrier.startPoint.y+t*barrier.endPoint.y

      //   const dx=q1-this.objX
      //   const dy=q2-this.objY
      //   const distance=Math.hypot(dx,dy)

      //   if(distance<10){
      //   const unitX = dx / distance
      //   const unitY = dy / distance
      //   console.log(Math.ceil(unitX))
      //   newX = this.objX + (distance + 1) * unitX
      //   newY = this.objY + (distance + 1) * unitY
      //   }
        // const BA=Math.hypot(barrier.endPoint.x-barrier.startPoint.x,barrier.endPoint.y-barrier.startPoint.y)
        //   const BP=Math.hypot(barrier.endPoint.x-this.objX,barrier.endPoint.y-this.objY)
        //   const AP=Math.hypot(barrier.startPoint.x-this.objX,barrier.startPoint.y-this.objY)
        //   const AQ=AP*(Math.pow(BP,2)-Math.pow(AP,2)-Math.pow(BA,2))/(-2*AP*BA)
        //   const t=AQ/BA
        //   const q1=(1-t)*barrier.startPoint.x+t*barrier.endPoint.x
        //   const q2=(1-t)*barrier.startPoint.y+t*barrier.endPoint.y

        //   const dx=q1-this.objX
        //   const dy=q2-this.objY
        //   const distance=Math.hypot(dx,dy)

        //   if(distance<10){
        //   const unitX = dx / distance
        //   const unitY = dy / distance
        //   console.log(Math.ceil(unitX))
        //   newX = this.objX + (distance + 1) * unitX
        //   newY = this.objY + (distance + 1) * unitY
        //   }

                
// this.interactions[this.game.currentBlock].forEach(interaction=>
//   {
//     const distance=Math.hypot(this.objX-interaction.x,this.objY,interaction.y)
//     if(distance<interaction.radius)
//     {
//       interaction.execute()
//       return
//     }
//   })

this.game.currentBlock.panels.forEach(panel=>{
  if(Math.abs(this.objX-panel.x)<panel.radius
  && 
  Math.abs(this.objY-panel.y)<panel.radius
  )
  {
    panel.element.dispatchEvent(panel.show)
  }
  else
  {
    panel.element.dispatchEvent(panel.hide)
  }
})
      this.objX = newX
      this.objY = newY
      this.spriteX = this.objX - this.width * 0.5
      this.spriteY = this.objY - this.height * 0.5 - this.radius
    }
  }