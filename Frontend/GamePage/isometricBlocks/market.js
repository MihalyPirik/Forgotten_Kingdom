import { getQuests } from "../../services/questService.js"
import { Story } from "../controllers/Story.js"
import { NPC } from "../models/NPC.js"
import { Panel } from "../models/Panel.js"
import { IsometricBlock } from "../models/isometricBlock.js"
import { GetIcon } from "../utils/imageLoader.js"
import { populateIsometricBlock } from "../utils/populateIsometricBlocks.js"

const backGround=new Image()
backGround.src="./assets/blocks/Market.png"
const charSprite=new Image()
charSprite.src='./assets/maincharacters/char_a_p1_0bas_humn_v01.png'
export const Piac= async (game)=>{




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
new Panel('navigationPanel',0.87*game.width,0.75*game.height,game.width*0.07,{forwardId:'forward',backwardId:'backward',direction:1},game,await GetIcon('directionSigns')),
new Panel('navigationPanel',0.19*game.width,0.8*game.height,game.width*0.07,{forwardId:'forward',backwardId:'backward',direction:-1},game,await GetIcon('directionSigns')),
new Panel('shop',game.width*0.5,game.height*0.5,game.width*0.1,false)
        ],
        0.07,
        0.07
    )
populateIsometricBlock(game)




}