import { Panel } from '../models/Panel.js'
import {IsometricBlock} from '../models/isometricBlock.js'
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
new Panel('Action',game.width*0.6,game.height*0.51,game.width*0.03,false,{action:"Favágás"})
        ]
    )
}