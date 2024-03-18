import { Story } from "../controllers/Story.js"
import { NPC } from "../models/NPC.js"
import { Panel } from "../models/Panel.js"
import { IsometricBlock } from "../models/isometricBlock.js"

const backGround=new Image()
backGround.src="./assets/blocks/Market.png"
const charSprite=new Image()
charSprite.src='./assets/maincharacters/char_a_p1_0bas_humn_v01.png'
export const Piac=(game)=>{

    const quest = {
        id:1,
        is_completed:false,
        is_active:false,
        QuestType:{
            quest_name: "Küldetés",
            description: "Vegyél 20 fánkot!",
            ismainstory: true
        },
        story:Story.First
    }
    const npc = new NPC(game,"Arthur",charSprite,game.width*0.36,game.height*0.63,null,null,quest)
    const npcPanel = new Panel("NPCPanel",game.width*0.36,game.height*0.63,game.width*0.04,false,npc)
    npc.panel = npcPanel
    game.player.mainQuests.push(quest)

    game.currentBlock=new IsometricBlock
    (
        'Piac',
        backGround,
        null,
        [
            npc
        ],
        [

        ],
        [
npcPanel
        ]
    )

game.player.width = game.width*0.1
game.player.height = game.height*0.1


}