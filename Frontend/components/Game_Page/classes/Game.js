import { Player } from "./Player.js"
export class Game {
    constructor(canvas,isometricBlocks=[[]]) {
      this.isometricBlocks = isometricBlocks
      this.canvas = canvas
      this.currentBlockX = 0
      this.currentBlockY = 0
      this.context = canvas.getContext('2d')
      this.width = canvas.width
      this.height = canvas.height
      this.fps = 60
      this.timer = 0
      this.interval = 1000 / this.fps
      this.debug = false
      this.player = new Player(this)
      // Csak teszt jellegű jellemzők
      this.valami="Okee"
      this.name="Malom:"
    }
    Render(deltaTime) {

      if (this.timer > this.interval) {
        // this.context.clearRect(0, 0, this.width, this.height)

        this.context.clearRect(0,0,this.width,this.height)


        this.context.lineWidth=2
        // this.context.moveTo(barrier.startPoint.x,barrier.startPoint.y)
        // this.context.lineTo(this.player.objX,this.player.objY)
        // this.context.stroke()

        // this.context.lineWidth=2
        // this.context.moveTo(barrier.endPoint.x,barrier.endPoint.y)
        // this.context.lineTo(this.player.objX,this.player.objY)
        // this.context.stroke()

        // this.context.lineWidth=2
        // this.context.moveTo(this.canvas.width*0.2,this.canvas.height*0.775)
        // this.context.lineTo(this.canvas.width*0.5,this.canvas.height*0.94)
        // this.context.stroke()


        // this.context.moveTo(this.canvas.width*0.2,this.canvas.height*0.775)
        // this.context.lineTo(this.canvas.width*0.5,this.canvas.height*0.67)
        // this.context.stroke()


        // this.context.moveTo(this.canvas.width*0.5,this.canvas.height*0.67)
        // this.context.lineTo(this.canvas.width*0.78,this.canvas.height*0.78)
        // this.context.stroke()

        // this.context.moveTo(this.canvas.width*0.78,this.canvas.height*0.78)
        // this.context.lineTo(this.canvas.width*0.5,this.canvas.height*0.938)
        // this.context.stroke()
        
        this.isometricBlocks[this.currentBlockX][this.currentBlockY].objects.forEach(object => {
          object.Update()
          object.Draw()
        })
        this.player.Update()

        this.player.Draw()

        this.timer = 0
      }
      this.timer += deltaTime
    }

    CheckCollision(objectOne, objectTwo) {
      const dx = objectOne.objX - objectTwo.objX
      const dy = objectOne.objY - objectTwo.objY
      const distance = Math.hypot(dx, dy)
      const sumOfRadius = objectOne.radius + objectTwo.radius
      return [distance < sumOfRadius, distance, sumOfRadius, dx, dy]
    }
    ChangeCurrentIsometricBlock(blockX,blockY)
    {
      this.isometricBlocks[this.currentBlockX][this.currentBlockY].panels.forEach(panel=>
        {
          panel.element.dispatchEvent(panel.hide)
        })
        this.currentBlockX=blockX
        this.currentBlockY=blockY
        this.canvas.style.backgroundImage=`url(${this.isometricBlocks[this.currentBlockX][this.currentBlockY].backGround.src})`
    }
  }