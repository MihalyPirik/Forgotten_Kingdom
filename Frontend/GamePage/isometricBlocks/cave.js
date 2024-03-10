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

        ]
    )
}