import { getAllEnemies } from "../../services/enemyService.js"
import { getAllResidents } from "../../services/residentService.js"
import { Monster } from "../models/Monster.js"
import { NPC } from "../models/NPC.js"
import { Panel } from "../models/Panel.js"
import { GetSprite } from "./imageLoader.js"
const charSprite=new Image()
charSprite.src='./assets/maincharacters/char_a_p1_0bas_humn_v01.png'
export const populateIsometricBlock=async(game)=>{

    getAllEnemies(`blockX=${game.currentBlockX}&blockY=${game.currentBlockY}`)
    .then(res=>{res.forEach(e => {
        const enemy = new Monster(e.enemy_id,e.EnemyType.enemy_name,game,charSprite,game.width*e.objX,game.height*e.objY,e.HP,e.EnemyType.attack,e.EnemyType.level,4)
        game.currentBlock.entities.push(enemy)
    })})
    getAllResidents(`blockX=${game.currentBlockX}&blockY=${game.currentBlockY}`)
    .then(res=>{res.forEach(async e => {
        const npcSprite = await GetSprite(e.resident_name)
const resident = new NPC(game,e.resident_name,npcSprite,game.width*e.objX,game.height*e.objY,e.profession,null,e.QuestStat,e.resident_id)
resident.spriteWidth=1024
resident.spriteHeight=1024
const panel = new Panel('NPCPanel',game.width*e.objX,game.height*e.objY,resident.radius+10,false,resident)
resident.panel=panel
game.currentBlock.panels.push(panel)
        game.currentBlock.entities.push(resident)
    })})

}