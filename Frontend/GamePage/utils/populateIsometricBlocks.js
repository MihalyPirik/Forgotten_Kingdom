import { getAllEnemies } from "../../services/enemyService.js"
import { getAllResidents } from "../../services/residentService.js"
import { Monster } from "../models/Monster.js"
import { NPC } from "../models/NPC.js"
const charSprite=new Image()
charSprite.src='./assets/maincharacters/char_a_p1_0bas_humn_v01.png'
export const populateIsometricBlock=async(game)=>{

    getAllEnemies(`blockX=${game.currentBlockX}&blockY=${game.currentBlockY}`)
    .then(res=>{res.forEach(e => {
        const enemy = new Monster(e.enemy_id,e.EnemyType.enemy_name,game,charSprite,e.objX,e.objY,e.HP,e.EnemyType.attack,e.EnemyType.level,4)
        game.currentBlock.entities.push(enemy)
    })})
    getAllResidents(`blockX=${game.currentBlockX}&blockY=${game.currentBlockY}`)
    .then(res=>{res.forEach(e => {
const resident = new NPC(game,e.resident_name,charSprite,e.objX,e.objY,e.profession,null,e.QuestStat)

        game.currentBlock.entities.push(resident)
    })})

}