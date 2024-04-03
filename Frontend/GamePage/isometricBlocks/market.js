import { getQuests } from "../../services/questService.js"
import { Story } from "../controllers/Story.js"
import { NPC } from "../models/NPC.js"
import { Panel } from "../models/Panel.js"
import { IsometricBlock } from "../models/isometricBlock.js"
import { populateIsometricBlock } from "../utils/populateIsometricBlocks.js"

const backGround=new Image()
backGround.src="./assets/blocks/Market.png"
const charSprite=new Image()
charSprite.src='./assets/maincharacters/char_a_p1_0bas_humn_v01.png'
export const Piac=(game)=>{




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
populateIsometricBlock(game)
game.player.width = game.width*0.1
game.player.height = game.height*0.1



   game.player.objY=game.height*0.7
   game.player.radius=game.width*0.01

}