import {IsometricBlock} from '../models/isometricBlock.js'
import {Line} from '../models/Line.js'
import { Point } from '../models/Point.js'
import {Circle} from '../models/Circle.js'
import { Panel } from '../models/Panel.js'
import { populateIsometricBlock } from '../utils/populateIsometricBlocks.js'
import { GetIcon } from '../utils/imageLoader.js'
const backGround=new Image()
backGround.src="./assets/blocks/EnemyThree.png"

export const Trollok=async(game)=>{
    game.currentBlock=new IsometricBlock(
        'Trollok',
        backGround,
        null,
        [],
        [
            // x:0.89 ,y: 0.59
            new Line(new Point(game.width*0.4978,game.height*0.819),new Point(game.width*0.8707,game.height*0.6118)),
            new Circle(game.width*0.8707,game.height*0.6118,game.width*0.01),

            new Line(new Point(game.width*0.8707,game.height*0.6118),new Point(game.width*0.4743,game.height*0.3436)),
            new Circle(game.width*0.4743,game.height*0.3436,game.width*0.01),

            new Line(new Point(game.width*0.4743,game.height*0.3436),new Point(game.width*0.0737,game.height*0.5869)),
            new Circle(game.width*0.0737,game.height*0.5869,game.width*0.01),

            new Line(new Point(game.width*0.0737,game.height*0.5869),new Point(game.width*0.4978,game.height*0.819)),
            new Circle(game.width*0.4978,game.height*0.819,game.width*0.01),
        ],
        [
            new Panel('navigationPanel',0.6217*game.width,0.777*game.height,game.width*0.07,{forwardId:'forward',backwardId:'backward',direction:-1},game,null,await GetIcon('directionSigns'))
        ]
 
    )
    game.player.objX = game.width *0.49358
    game.player.objY = game.height * 0.74385
    populateIsometricBlock(game)
    game.player.width = game.width * 0.08
    game.player.height = game.height * 0.08
    game.player.radius = game.height * 0.015
}