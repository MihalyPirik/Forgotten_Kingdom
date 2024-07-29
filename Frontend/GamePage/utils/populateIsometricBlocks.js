import { getAllEnemies } from "../../services/enemyService.js"
import { getAllResidents } from "../../services/residentService.js"
import { Monster } from "../models/Monster.js"
import { NPC } from "../models/NPC.js"
import { Panel } from "../models/Panel.js"
import { GetSprite } from "./imageLoader.js"
const charSprite = new Image()
charSprite.src = './assets/maincharacters/char_a_p1_0bas_humn_v01.png'

const monsterSprite = new Image()
monsterSprite.src = './assets/maincharacters/monsterSprite.gif'
export const populateIsometricBlock = async (game, isInterior = false) => {

    getAllEnemies(`blockX=${game.currentBlockX}&blockY=${game.currentBlockY}&isInterior=${isInterior}`)
        .then(res => {
            res.forEach(e => {
                const enemy = new Monster(e.enemy_id, e.EnemyType.enemy_name, game, monsterSprite, game.width * e.objX, game.height * e.objY, e.HP, e.EnemyType.attack, e.EnemyType.level, 4)
                enemy.width = game.width * game.currentBlock.entityWidth
                enemy.height = game.height * game.currentBlock.entityHeight
                enemy.spriteWidth = 130
                enemy.spriteHeight = 110
                enemy.speed = 2
                game.currentBlock.entities.push(enemy)
            })
            game.currentBlock.StartTimeOut(game)
        })
    getAllResidents(`blockX=${game.currentBlockX}&blockY=${game.currentBlockY}&isInterior=${isInterior}`)
        .then(res => {
            res.forEach(async e => {
                const npcSprite = await GetSprite(e.resident_name)
                const resident = new NPC(game, e.resident_name, npcSprite, game.width * e.objX, game.height * e.objY, e.profession, null, e.QuestStat, e.resident_id)
                resident.spriteWidth = npcSprite.width
                resident.spriteHeight = npcSprite.height
                resident.width = game.width * game.currentBlock.entityWidth
                resident.height = game.height * game.currentBlock.entityHeight
                resident.radius = resident.width * 0.22
                const panel = new Panel('NPCPanel', game.width * e.objX, game.height * e.objY, resident.radius + resident.radius * 1.4, false, resident)
                resident.panel = panel

                game.currentBlock.panels.push(panel)
                game.currentBlock.entities.push(resident)
            })
        })

    game.player.height = game.width * game.currentBlock.entityWidth
    game.player.width = game.height * game.currentBlock.entityHeight
    game.player.radius = game.player.width * 0.15
}