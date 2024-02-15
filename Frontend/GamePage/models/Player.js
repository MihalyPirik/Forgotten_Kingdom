import { GameObject } from "./GameObject.js"

export class Player extends GameObject {
    constructor(name,HP,money,inventory,game,tools=[],speed=4) {
      super(game, document.getElementById('character') ,game.width * 0.5, game.height * 0.8, game.width*0.2, game.height*0.2)
      this.speed = speed
      this.tools=tools
      this.name=name
      this.money=money
      this.inventory=inventory
      this.HP=HP
    }
  }