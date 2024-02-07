export class GameObject {
    constructor(game, image, spriteX = 0, spriteY = 0, width = 255, height = 255, spriteWidth = 64, spriteHeight = 64) {
      this.game = game,
      this.spriteX = spriteX
      this.spriteY = spriteY
      this.radius = spriteWidth / 2
      this.objX = spriteX + width / 2
      this.objY = spriteY + height / 2 + this.radius
      this.frameX = 0
      this.frameY = 0
      this.width = width
      this.height = height
      this.spriteWidth = spriteWidth
      this.spriteHeight = spriteHeight
      this.image = image
    }
    Draw() {
      this.game.context.drawImage(
        this.image,
        this.frameX * this.spriteWidth,
        this.frameY * this.spriteHeight,
        this.spriteWidth,
        this.spriteHeight,
        this.spriteX,
        this.spriteY,
        this.width,
        this.height
      )
      if (this.game.debug.key == 'f') {
        this.game.context.beginPath()
        this.game.context.arc(
          this.objX,
          this.objY,
          this.radius,
          0,
          Math.PI * 2
        )
        this.game.context.save()
        this.game.context.globalAlpha = 0.5
        this.game.context.fill()
        this.game.context.restore()
        this.game.context.stroke()
        this.game.context.strokeRect(this.spriteX, this.spriteY, this.width, this.height)

      }
    }
    Update() { }
  }