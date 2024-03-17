import { PanelView } from "../views/view.js"
import { Entity } from "./Entity.js"
import { Monster } from "./Monster.js"
import { Point } from "./Point.js"
import {Random} from '../utils/probability.js'
export class Player extends Entity {
  #money=null
  #hp=null
    constructor(name,sprite,HP,money,inventory,game,tools=[],speed=4,mainQuests=[]) {
      super(game, sprite,game.width * 0.5, game.height * 0.8, game.width*0.2, game.height*0.2)
      this.speed = speed
      this.tools=tools
      this.mainQuests = mainQuests
      this.name=name
      this.attack={timer:0,attack:3,interval:60}
      this.money=money
      this.isInConversation = false
      this.isAction={timer:0,interval:10,is:false}
      this.#money=money
      this.attackradius=50
      this.inventory=inventory
      this.HP=HP
      this.#hp=HP
    }

    set money(value)
    {
      this.#money=value
      this.game.gameView.BindMoney(this)
      
    }
    get money()
    {
return this.#money
    }

    set HP(value)
    {
      if(value<=0)
      {
        this.isDead=true
        PanelView.ShowDeathDialog(this)
      }
      this.#hp=value
    }
    get HP(){
      return this.#hp
    }


    


    Attack(e)
    {
      for (const enemy of this.game.currentBlock.entities)
      {
        if(enemy instanceof Monster){
          if(e.offsetX>enemy.objX-enemy.radius
            &&
            e.offsetX<enemy.objX+enemy.radius
            &&
            e.offsetY>enemy.objY-enemy.radius
            &&
            e.offsetY<enemy.objY+enemy.radius
            )
            {
              if(this.attack.timer>this.attack.interval && Math.abs(enemy.objX-this.objX)<this.attackradius && Math.abs(enemy.objY-this.objY)<this.attackradius){
                this.attack.timer=0
                enemy.HP=enemy.HP-this.attack.attack
            }
            }
          }
      }
    }
    Respawn=()=>
    {
      this.money-=10
      this.game.isometricBlocks[0][0](this.game)
      this.isDead=false
    }
    Action=(e)=>
    {
      if(this.game.currentBlockX == 2 && this.game.currentBlockY == 1)
          {
      let inInter
      this.isAction.is = true
      inInter = setInterval(()=>
      {
        this.isAction.timer++
        PanelView.BindProgress(this.isAction.timer)
        if(this.isAction.timer>this.isAction.interval){
          this.isAction.timer=0
          const gottenItemCount=Random(1,3)
          
            this.inventory.fish+=gottenItemCount
          this.isAction.is = false
          clearInterval(inInter)
        }
      },1000)
      return
    }
    this.isAction.timer++
        PanelView.BindProgress(this.isAction.timer)
        if(this.isAction.timer>this.isAction.interval){
          this.isAction.timer=0
          const gottenItemCount=Random(1,3)
            this.inventory.wood+=gottenItemCount
        }
    }
    AddMission(quest)
    {
      quest.is_active = true
    }
  }