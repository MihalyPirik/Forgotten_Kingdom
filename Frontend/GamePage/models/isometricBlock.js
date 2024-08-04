import { postEnemy } from "../../services/enemyService.js"
import { getAllEnemyType } from "../../services/enemyTypeService.js"
import { GetSprite } from "../utils/imageLoader.js"
import { Random, RandomFloatNumber } from "../utils/probability.js"
import { Monster } from "./Monster.js"

export class IsometricBlock {

    constructor(name, backGround, interior, entities = [], barriers = [], panels = [], entityWidth = 0.15, entityHeight = 0.15, spriteURL = 'assets/monsters/goblin_sprite_sheet.png') {
        this.name = name
        this.interior = interior
        this.entities = entities
        this.barriers = barriers
        this.panels = panels
        this.backGround = backGround
        this.entityWidth = entityWidth
        this.entityHeight = entityHeight
        this.maxNumberOfMonsters = 4
        this.monsterSpawnInterval = 700
        this.timeoutReference = null
        this.spriteURL = spriteURL
    }

    get numberOfMonsters() {
        return this.entities.filter(entity => { return entity instanceof Monster }).length
    }

    async StartTimeOut(game) {
        if (game.currentBlockX == 0 && game.currentBlockY == 3
            || game.currentBlockX == 1 && game.currentBlockY == 3
            || game.currentBlockX == 2 && game.currentBlockY == 2
        ) {


            if (this.numberOfMonsters >= this.maxNumberOfMonsters || this.timeoutReference) {
                return
            }
            console.log('started');
            let monsterType
            if (game.currentBlockX == 0 && game.currentBlockY == 3) { monsterType = (await getAllEnemyType("enemy_name=Goblin&level=1"))[0] }
            else if (game.currentBlockX == 1 && game.currentBlockY == 3) { monsterType = (await getAllEnemyType("enemy_name=Skeleton&level=1"))[0] }
            else if (game.currentBlockX == 2 && game.currentBlockY == 2) { monsterType = (await getAllEnemyType("enemy_name=Troll&level=1"))[0] }
            const sprite = new Image()
            sprite.src = this.spriteURL
            await sprite.decode()
            const callback = async () => {
                const xCoord = game.width * RandomFloatNumber(0.26, 0.72)
                const yCoord = game.height * RandomFloatNumber(0.43, 0.66)
                const newMonster = new Monster(undefined, monsterType.enemy_name, game, sprite, xCoord, yCoord, monsterType.HP, monsterType.attack, monsterType.level, 2)
                newMonster.spriteWidth = 230
                newMonster.spriteHeight = 230
                newMonster.width = game.width * game.currentBlock.entityWidth
                newMonster.height = game.height * game.currentBlock.entityHeight
                this.entities.push(newMonster)
                newMonster.id = (await postEnemy({
                    objX: newMonster.objX / game.width,
                    objY: newMonster.objY / game.height,
                    blockX: game.currentBlockX,
                    blockY: game.currentBlockY,
                    HP: newMonster.HP,
                    enemy_type_id: monsterType.enemy_type_id,
                    isInterior: false
                })).enemy_id
                if (this.numberOfMonsters < this.maxNumberOfMonsters) {
                    this.timeoutReference = setTimeout(callback, 10000)
                }
                else {
                    console.log('end');
                    this.timeoutReference = null
                }
            }
            this.timeoutReference = setTimeout(callback, 10000)
        }
    }
}