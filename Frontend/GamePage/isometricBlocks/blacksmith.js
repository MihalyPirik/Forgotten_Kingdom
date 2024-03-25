import { Panel } from "../models/Panel.js"
import { IsometricBlock } from "../models/isometricBlock.js"


const backGround=new Image()
backGround.src="./assets/blocks/Blacksmith.png"

const inBlacksmith = new Image()
inBlacksmith.src = './assets/blocks/inBlacksmith.png'

const blackSmithInterior = (game)=>{

    game.currentBlock = new IsometricBlock(
    'Kovács',
    inBlacksmith,
    null,
    [],
    [],
    [
        new Panel('leaveInterior',game.width*0.64,game.height*0.82,game.width*0.05,false)
    ]
)
return game.currentBlock
}

export const Kovács=(game)=>{
    game.currentBlock = new IsometricBlock(
        'Kovács',
        backGround,
        blackSmithInterior,
        [],
        [],
        [
            new Panel('enterInterior',game.width*0.36,game.height*0.66,game.width*0.05,false),
            new Panel('navigationPanel',game.width*0.72,game.height*0.76,game.width*0.05,{forwardId:'forward',backwardId:'backward',direction:1}),
        new Panel('navigationPanel',game.width*0.25,game.height*0.77,game.width*0.05,{forwardId:'forward',backwardId:'backward',direction:-1})
        ]
    )
}