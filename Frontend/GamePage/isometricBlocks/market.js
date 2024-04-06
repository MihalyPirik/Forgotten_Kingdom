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
        ],
        0.07,
        0.07
    )
populateIsometricBlock(game)




}