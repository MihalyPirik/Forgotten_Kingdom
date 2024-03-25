import { Panel } from '../models/Panel.js'
import { Point } from '../models/Point.js'
import {IsometricBlock} from '../models/isometricBlock.js'
import { PanelView } from '../views/view.js'
const backGround=new Image()
backGround.src="./assets/blocks/Forest.png"
export const Erdő=(game)=>{
    game.currentBlock=new IsometricBlock
    (
        // 0.32, 0.76
        'Erdő',
        backGround,
        null,
        [],
        [

        ],
        [
new Panel('Action',game.width*0.6,game.height*0.51,game.width*0.03,false,{action:"Favágás"}),
new Panel('Action',game.width*0.64,game.height*0.62,game.width*0.03,false,{action:"Favágás"}),
new Panel('Action',game.width*0.23,game.height*0.63,game.width*0.03,false,{action:"Favágás"}),
new Panel('navigationPanel',game.width*0.31,game.height*0.74,game.width*0.05,{forwardId:'forward',backwardId:'backward',direction:-1}),
new Panel('navigationPanel',game.width*0.64,game.height*0.74,game.width*0.1,{forwardId:'forward',backwardId:'backward',direction:1})
        ]
    )

    game.player.width = game.width*0.12
    game.player.height = game.height*0.12
}