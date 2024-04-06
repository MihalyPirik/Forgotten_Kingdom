import { Panel } from "../models/Panel.js"
import { IsometricBlock } from "../models/isometricBlock.js"
import { populateIsometricBlock } from "../utils/populateIsometricBlocks.js"

const backGround=new Image()
backGround.src='./assets/blocks/Witch.png'
const inWitch = new Image()
inWitch.src = './assets/blocks/inWitch.png'


const inWitchBlock = (game)=>{
    game.currentBlock = new IsometricBlock('Szörny4',inWitch,null,
    []
    ,
    [],
    [
        new Panel('leaveInterior',game.width*0.75,game.height*0.8,game.width*0.05,false)
    ]
    )
    populateIsometricBlock(game,true)
    return game.currentBlock
}
export const Szörny4=(game)=>{
    game.currentBlock=new IsometricBlock(
        'Szörny4',
        backGround,
        inWitchBlock,
        [],
        [],
        [
            // 0.45, 0.88
            new Panel('navigationPanel',game.width*0.45,game.height*0.88,game.width*0.05,{forwardId:'forward',backwardId:'backward',direction:1}),
            new Panel('enterInterior',game.width*0.4,game.height*0.58,game.width*0.1,false)
        ],
        0.2,
        0.2

    )
    populateIsometricBlock(game)
}