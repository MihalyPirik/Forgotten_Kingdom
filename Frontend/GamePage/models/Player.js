import { Entity } from "./Entity.js"

export class Player extends Entity {
    constructor(name,sprite,HP,money,inventory,game,tools=[],speed=4) {
      super(game, sprite,game.width * 0.5, game.height * 0.8, game.width*0.2, game.height*0.2)
      this.speed = speed
      this.tools=tools
      this.name=name
      this.money=money
      this.inventory=inventory
      this.HP=HP
    }
  }