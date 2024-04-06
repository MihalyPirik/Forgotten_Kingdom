import { Panel } from '../models/Panel.js'
import {IsometricBlock} from '../models/isometricBlock.js'
import { populateIsometricBlock } from '../utils/populateIsometricBlocks.js'

const backGround=new Image()
backGround.src="./assets/blocks/Mine.png"

const inCave = new Image()
inCave.src = './assets/blocks/inMine.png'
const CaveInterior = (game)=>
{
    game.currentBlock = new IsometricBlock(
        'Bánya',
        inCave,
        null,
        [],
        [],
        [
            new Panel('leaveInterior',game.width*0.16,game.height*0.76,game.width*0.05,false)
        ],
        0.1,
        0.1
    )
    populateIsometricBlock(game,true)
    return game.currentBlock
}
export const Bánya=(game)=>{
    game.currentBlock=new IsometricBlock
    (
        'Bánya',
        backGround,
        CaveInterior,
        [],
        [

        ],
        [
            new Panel('navigationPanel',game.width*0.63,game.height*0.85,game.width*0.05,{forwardId:'forward',backwardId:'backward',direction:1}),
            new Panel('navigationPanel',game.width*0.37,game.height*0.85,game.width*0.05,{forwardId:'forward',backwardId:'backward',direction:-1}),
            new Panel('enterInterior',game.width*0.46,game.height*0.54,game.width*0.08,false)
        ],
        0.3,
        0.3
    )
    populateIsometricBlock(game)
}