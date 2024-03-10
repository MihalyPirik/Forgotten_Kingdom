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

        ]
    )
}