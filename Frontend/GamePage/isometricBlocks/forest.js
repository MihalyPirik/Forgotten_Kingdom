import { Panel } from '../models/Panel.js'
import { Point } from '../models/Point.js'
import {IsometricBlock} from '../models/isometricBlock.js'
import { PanelView } from '../views/view.js'
const backGround=new Image()
backGround.src="./assets/blocks/WoodForest.png"
export const Erdő=(game)=>{
    game.currentBlock=new IsometricBlock
    (
        'Erdő',
        backGround,
        null,
        [],
        [

        ],
        [
new Panel('Action',game.width*0.6,game.height*0.51,game.width*0.03,false,{action:"Favágás"}),
new Panel('Action',game.width*0.64,game.height*0.62,game.width*0.03,false,{action:"Favágás"}),
new Panel('Action',game.width*0.23,game.height*0.63,game.width*0.03,false,{action:"Favágás"})
        ]
    )

    game.player.width = game.width*0.12
    game.player.height = game.height*0.12
}