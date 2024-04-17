import { PanelView } from "../views/view.js"
import { Entity } from "./Entity.js"
import { Monster } from "./Monster.js"
import { Point } from "./Point.js"
import { Random } from '../utils/probability.js'
import { putPlayer } from "../../services/playerService.js"
import { CollectorQuests } from "../controllers/Quest.js"
import { SpriteController } from "../controllers/Sprite.js"
export class Player extends Entity {
  #money = null
  #hp = null
  constructor(name, sprite, HP, money, inventory, game, tools = [], speed = 4, quests = []) {
    super(game, sprite, game.width * 0.5, game.height * 0.8, game.width * 0.2, game.height * 0.2)
    this.speed = speed
    this.tools = tools
    this.quests = quests
    this.name = name
    this.attack = { timer: 0, attack: 10, interval: 60 }
    this.money = money
    this.isInConversation = false
    this.isAction = { timer: 0, interval: 1000, is: false, action: null, canExecute: true }
    this.#money = money
    this.attackradius = 50
    this.inventory = inventory
    this.HP = HP
    this.#hp = HP
  }

  set money(value) {
    this.#money = value

    putPlayer({ money: value })

    this.game.gameView.BindMoney(value)
  }
  get money() {
    return this.#money
  }

  set HP(value) {
    this.#hp = value

    putPlayer({ HP: value })
    if (value <= 0) {
      this.isDead = true
      PanelView.ShowDeathDialog(this)
    }
  }
  get HP() {
    return this.#hp
  }


  Knockback(enemy) {
    const dx = enemy.objX - this.objX
    const dy = enemy.objY - this.objY
    const distance = Math.hypot(dx, dy)
    const unitX = dx / distance
    const unitY = dy / distance
    const newEnemyObjX = enemy.objX + this.game.width * 0.1 * unitX
    const newEnemyObjY = enemy.objY + this.game.height * 0.1 * unitY

    if (enemy.objX < newEnemyObjX && enemy.objY < newEnemyObjY) {
      const inter = setInterval(() => {
        if (enemy.objY >= newEnemyObjY && enemy.objX >= newEnemyObjX) {
          enemy.knockedBack = false
          clearInterval(inter)
        }
        if (enemy.objX <= newEnemyObjX) {
          enemy.objX += 4
        }
        if (enemy.objY <= newEnemyObjY) {
          enemy.objY += 4
        }

      }, 10)
    }

    if (enemy.objX < newEnemyObjX && enemy.objY > newEnemyObjY) {
      const inter = setInterval(() => {
        if (enemy.objY <= newEnemyObjY && enemy.objX >= newEnemyObjX) {
          enemy.knockedBack = false
          clearInterval(inter)
        }
        if (enemy.objX <= newEnemyObjX) {
          enemy.objX += 4
        }
        if (enemy.objY >= newEnemyObjY) {
          enemy.objY -= 4
        }

      }, 10)
    }




    if (enemy.objX > newEnemyObjX && enemy.objY > newEnemyObjY) {
      const inter = setInterval(() => {
        if (enemy.objY <= newEnemyObjY && enemy.objX <= newEnemyObjX) {
          enemy.knockedBack = false
          clearInterval(inter)
        }
        if (enemy.objX >= newEnemyObjX) {
          enemy.objX -= 4
        }
        if (enemy.objY >= newEnemyObjY) {
          enemy.objY -= 4
        }

      }, 10)
    }


    if (enemy.objX > newEnemyObjX && enemy.objY < newEnemyObjY) {
      const inter = setInterval(() => {
        if (enemy.objY >= newEnemyObjY && enemy.objX <= newEnemyObjX) {
          enemy.knockedBack = false
          clearInterval(inter)
        }
        if (enemy.objX >= newEnemyObjX) {
          enemy.objX -= 4
        }
        if (enemy.objY <= newEnemyObjY) {
          enemy.objY += 4
        }

      }, 10)
    }

  }

  Attack(e) {
    for (const enemy of this.game.currentBlock.entities) {
      if (enemy instanceof Monster) {
        if (e.offsetX > enemy.objX - enemy.radius
          &&
          e.offsetX < enemy.objX + enemy.radius
          &&
          e.offsetY > enemy.objY - enemy.radius
          &&
          e.offsetY < enemy.objY + enemy.radius
        ) {
          if (this.attack.timer > this.attack.interval && Math.abs(enemy.objX - this.objX) < this.attackradius && Math.abs(enemy.objY - this.objY) < this.attackradius) {
            this.attack.timer = 0
            enemy.HP = enemy.HP - this.attack.attack
            enemy.knockedBack = true
            if (Math.random() > 0.6) {
              this.Knockback(enemy)
            }
          }
        }
      }
    }
  }
  Respawn = () => {
    this.money -= 10
    this.game.isometricBlocks[0][0](this.game)
    putPlayer({ HP: 100 })
    this.isDead = false
  }
  Action = () => {
    switch (this.isAction.action) {
      case "Fish":
        this.isAction.interval = 60
        this.isAction.is = true
        this.isAction.canExecute = false
        const iner = setInterval(() => {

          PanelView.BindProgress(this.isAction.timer, this.isAction.interval)
          if (this.isAction.timer > this.isAction.interval) {
            const gottenAmount = Random(1, 6)
            this.inventory.Fish += gottenAmount
            putPlayer({ Fish: this.inventory.Fish })
            PanelView.BindInventoryItem('Fish', this.inventory.Fish)
            CollectorQuests('Fish', gottenAmount, this.quests, this.game.isometricBlocks)
            this.isAction.timer = 0
            this.isAction.is = this.false
            this.isAction.canExecute = true
            clearInterval(iner)
          }
          this.isAction.timer += 10
        }, 500)
        break;
      default:
        this.isAction.interval = 100
        if (this.isAction.timer > this.isAction.interval) {
          const gottenAmount = Random(1, 6)
          this.inventory[this.isAction.action] += gottenAmount
          putPlayer({ [this.isAction.action]: this.inventory[this.isAction.action] })
          PanelView.BindInventoryItem(this.isAction.action,this.inventory[this.isAction.action])
          CollectorQuests(this.isAction.action, gottenAmount, this.quests, this.game.isometricBlocks)
          this.isAction.timer = 0
          PanelView.BindProgress(this.isAction.timer, this.isAction.interval)
        }
        this.isAction.timer++
        PanelView.BindProgress(this.isAction.timer, this.isAction.interval)
        break;
    }
  }

}