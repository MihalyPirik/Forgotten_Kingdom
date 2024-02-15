import { Player } from "../models/Player.js";
import { Point } from "../models/Point.js";
import { IsometricBlock } from "../models/isometricBlock.js";
import { GameView, PanelView } from "../views/view.js";
import { EntityController } from "./entity.js";

export class GameController {
  #currentBlock;
    constructor(isometricBlocks=[[]],gameView,panelController,player=null,currentBlock=null,panels=[]) {
      /**
       * @type {Array<Array<Function>>}
       */
      this.isometricBlocks = isometricBlocks
      /**
       * @type {GameView}
       */
      this.gameView=gameView
      this.width=gameView.canvas.width
      this.height=gameView.canvas.height
      this.currentBlockX = 0
      this.currentBlockY = 0
      this.panels=panels
      this.fps = 60
      this.timer = 0
      this.interval = 1000 / this.fps
      this.debug = false
      /**
       * @type {PanelController}
       */
      this.panelController=panelController
      /**
       * @type {Player}
       */
      this.player = player
      /**
       * @type {IsometricBlock}
       */
      this.currentBlock=currentBlock
      this.#currentBlock=currentBlock
      // Csak teszt jellegű jellemzők
      this.valami="aaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"
      this.name="Malom:"
    }
    set currentBlock(value)
    {
      if(value){
        for (let i = 0; i < this.isometricBlocks.length; i++) {
          for (let j = 0; j < this.isometricBlocks[i].length; j++) {
            if(this.isometricBlocks[i][j].name==value.name)
            {
              this.currentBlockX=i
              this.currentBlockY=j
              this.#currentBlock=value
              this.gameView.SetBackGround(value.backGround.src)
              return
            }
          }
        }
        throw new ReferenceError('The isometricBlock is not registered in the matrix!')
      }
    }
    get currentBlock(){return this.#currentBlock}

    gameLoop(deltaTime) {

      if (this.timer > this.interval) {
this.gameView.ClearContext()



        // this.context.moveTo(barrier.startPoint.x,barrier.startPoint.y)
        // this.context.lineTo(this.player.objX,this.player.objY)
        // this.context.stroke()

        // this.context.lineWidth=2
        // this.context.moveTo(barrier.endPoint.x,barrier.endPoint.y)
        // this.context.lineTo(this.player.objX,this.player.objY)
        // this.context.stroke()

        // this.gameView.context.lineWidth=2
        // this.gameView.context.moveTo(this.width*0.2,this.height*0.775)
        // this.gameView.context.lineTo(this.width*0.5,this.height*0.94)
        // this.gameView.context.stroke()


        // this.gameView.context.moveTo(this.width*0.2,this.height*0.775)
        // this.gameView.context.lineTo(this.width*0.5,this.height*0.67)
        // this.gameView.context.stroke()


        // this.gameView.context.moveTo(this.width*0.5,this.height*0.67)
        // this.gameView.context.lineTo(this.width*0.78,this.height*0.78)
        // this.gameView.context.stroke()
        

        // this.gameView.context.moveTo(this.width*0.78,this.height*0.78)
        // this.gameView.context.lineTo(this.width*0.5,this.height*0.938)
        // this.gameView.context.stroke()
if(this.player.move.event)
{
  let newPos=new Point(this.player.objX,this.player.objY)
  newPos=EntityController.MovePlayer(this.player)
  for (const barrier of this.currentBlock.barriers)
  {
    const _newPos=EntityController.BarrierCollision(barrier,this.player)
    if(_newPos)
    {
      newPos=_newPos
      this.player.objX=newPos.x
      this.player.objY=newPos.y
      break
    }
  }
  for (const entity of this.currentBlock.entities)
  {
    const _newPos=EntityController.EntityCollision(this.player,entity)
    if(_newPos)
    {
      newPos=_newPos[0]
      break
    }
  }

  for (const panel of this.currentBlock.panels)
  {
    if(panel.IsVisible(this.player))
    {
      if(!panel.isVisible)
      {
        PanelView.ShowPanel(panel)
        panel.isVisible=true
      }
    }
    else
    {
      if(panel.isVisible)
      {
        PanelView.HidePanel(panel)
        panel.isVisible=false
      }
    }
  }
  this.player.objX=newPos.x
  this.player.objY=newPos.y
  
}
this.gameView.RenderEntity(this.player)
for (const entity of this.currentBlock.entities)
{
  if(entity.move.event)
  {
  for (const barrier of this.currentBlock.barriers)
  {
    const newPos=EntityController.BarrierCollision(barrier,entity)
    if(newPos)
    {
      entity.objX=newPos.x
      entity.objY=newPos.y
      break
    }
  }
}
}



for (let i = 0; i < this.currentBlock.entities.length-1; i++) {
  if(this.currentBlock.entities[i].move.event){
  for (let j = this.currentBlock.entities.length-1; j > i; j--) {
    const newPos=EntityController.EntityCollision
    (
      this.currentBlock.entities[i],
      this.currentBlock.entities[j]
    )
    if(newPos)
    {
      this.currentBlock.entities[i].objX=newPos[0].x
      this.currentBlock.entities[i].objY=newPos[0].y
      this.currentBlock.entities[j].objX=newPos[1].x
      this.currentBlock.entities[j].objY=newPos[1].y
      break
    }
    
  }
}





}


        this.timer = 0
      }
      this.timer += deltaTime
    }
  }