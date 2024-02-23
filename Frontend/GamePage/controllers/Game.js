import { Monster } from "../models/Monster.js";
import { NPC } from "../models/NPC.js";
import { Player } from "../models/Player.js";
import { Point } from "../models/Point.js";
import { IsometricBlock } from "../models/isometricBlock.js";
import { GameView, PanelView } from "../views/view.js";
import { SpriteController } from "./Sprite.js";
import { EntityController } from "./Collison.js";
import { CombatController } from "./Combat.js";

export class GameController {
  #currentBlock;
    constructor(isometricBlocks=[[]],gameView,player=null,currentBlock=null,panels=[]) {
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
        let newPlayerPos=SpriteController.MovePlayer(this.player)
for (const entity of this.currentBlock.entities)
{
  let newPos=EntityController.MoveMonster(entity)
const playerCollision=EntityController.EntityCollision(this.player,entity)
if(playerCollision)
{
  if(entity instanceof Monster)
  {
    newPos=playerCollision[0]
  }
  else
  {
    newPos=playerCollision[0]
    newPlayerPos=playerCollision[1]
  }
}

  const isAttack=CombatController.MonsterAttack(entity,this.player)
  if(isAttack)
  {
    this.player.HP-=entity.attack.attack
    this.gameView.BindPlayerHealth(this.player)
  }



entity.objX=newPos.x
entity.objY=newPos.y
}

for (const barrier of this.currentBlock.barriers)
{
  const Iscollison=EntityController.BarrierCollision(barrier,this.player)
  if(Iscollison)
  {
    newPlayerPos=Iscollison
    break
  }
}
  for (const panel of this.currentBlock.panels)
  {
    if(panel.IsVisible(this.player))
    {
      if(!panel.isVisible)
      {
        PanelView.ShowPanel(panel,this)
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




for (let i = 0; i < this.currentBlock.entities.length-1; i++) {

  for (let j = this.currentBlock.entities.length-1; j > i; j--) {
    const newPos=EntityController.EntityCollision
    (
      this.currentBlock.entities[i],
      this.currentBlock.entities[j]
    )
    if(newPos)
    {
      this.currentBlock.entities[i].objX=newPos[1].x
      this.currentBlock.entities[i].objY=newPos[1].y
      this.currentBlock.entities[j].objX=newPos[0].x
      this.currentBlock.entities[j].objY=newPos[0].y
      break
    }
  }
}


this.player.objX=newPlayerPos.x
this.player.objY=newPlayerPos.y
const s=[...this.currentBlock.entities]
s.push(this.player)
s.sort((a,b)=>a.objY-b.objY)
for (const entity of s)
{
  this.gameView.RenderEntity(entity)
}

        this.timer = 0
      }
      this.timer += deltaTime
     }
  }