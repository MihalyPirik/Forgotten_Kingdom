import { getQuests } from "../../services/questService.js"
import { getBlockResidents } from "../../services/residentService.js"
import { Story } from "../controllers/Story.js"
import { NPC } from "../models/NPC.js"
import { Panel } from "../models/Panel.js"
import { IsometricBlock } from "../models/isometricBlock.js"

const backGround=new Image()
backGround.src="./assets/blocks/Market.png"
const charSprite=new Image()
charSprite.src='./assets/maincharacters/char_a_p1_0bas_humn_v01.png'
export const Piac=(game)=>{


console.log(charSprite.src);


    game.currentBlock=new IsometricBlock
    (
        'Piac',
        backGround,
        null,
        [

        ],
        [

        ],
        [
new Panel('navigationPanel',0.87*game.width,0.76*game.height,100,{forwardId:'forward',backwardId:'backward',direction:1},game),
new Panel('navigationPanel',0.13*game.width,0.81*game.height,100,{forwardId:'forward',backwardId:'backward',direction:-1},game),
        ]
    )

game.player.width = game.width*0.1
game.player.height = game.height*0.1



   game.player.objY=game.height*0.7
   game.player.radius=game.width*0.01
   getBlockResidents(game.currentBlockX,game.currentBlockY)
   .then(res=>{

    res.forEach(async resident => {

        const npc = new NPC(game,resident.resident_name,charSprite,game.width*resident.objX,game.height*resident.objY,resident.profession)


        npc.quest = resident.QuestType?(await getQuests('?quest_id='+resident.QuestType.quest_id))[0]:null
        if(resident.is_mainstory!=0 && npc.quest!=null){
            Object.defineProperty(npc.quest,'story',{value:Story.First})
    }
        
        game.currentBlock.entities.push(npc)
        npc.panel = new Panel("NPCPanel",npc.objX,npc.objY,npc.radius+10,false,npc)
        game.currentBlock.panels.push(npc.panel)
        npc.id = resident.resident_id

   })
   });

}