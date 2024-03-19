import { Panel } from '../models/Panel.js'
import {IsometricBlock} from '../models/isometricBlock.js'

const backGround=new Image()
backGround.src="./assets/blocks/MineEntrance.png"

export const Bánya=(game)=>{
    game.currentBlock=new IsometricBlock
    (
        'Bánya',
        backGround,
        null,
        [],
        [

        ],
        [
            new Panel('navigationPanel',game.width*0.64,game.height*0.85,game.width*0.2,{forwardId:'forward',backwardId:'backward',direction:1}),
        ]
    )
}