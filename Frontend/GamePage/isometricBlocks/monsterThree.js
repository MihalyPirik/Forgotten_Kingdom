import {IsometricBlock} from '../models/isometricBlock.js'
import {Line} from '../models/Line.js'
import { Point } from '../models/Point.js'
import {Circle} from '../models/Circle.js'
import { Panel } from '../models/Panel.js'
const backGround=new Image()
backGround.src="./assets/blocks/EnemyThree.png"

export const Szörny3=(game)=>{
    game.currentBlock=new IsometricBlock(
        'Szörny3',
        backGround,
        null,
        [],
        [
            // x:0.89 ,y: 0.59
            new Line(new Point(game.width*0.496,game.height*0.821),new Point(game.width*0.028,game.height*0.561)),
            new Circle(game.width*0.067,game.height*0.545,game.width*0.044),
            new Circle(game.width*0.11,game.height*0.5,game.width*0.04),
            new Circle(game.width*0.152,game.height*0.444,game.width*0.04),
            new Circle(game.width*0.21,game.height*0.4,game.width*0.04),
            new Circle(game.width*0.27,game.height*0.36,game.width*0.04),
            new Circle(game.width*0.341,game.height*0.34,game.width*0.04),
            new Circle(game.width*0.41,game.height*0.33,game.width*0.04),
            new Circle(game.width*0.49,game.height*0.33,game.width*0.04),
            new Circle(game.width*0.571,game.height*0.347,game.width*0.04),
            new Circle(game.width*0.644,game.height*0.385,game.width*0.04),
            new Circle(game.width*0.707,game.height*0.433,game.width*0.04),
            new Circle(game.width*0.769,game.height*0.487,game.width*0.04),
            new Circle(game.width*0.82,game.height*0.54,game.width*0.04),
            new Circle(game.width*0.87,game.height*0.58,game.width*0.04),
            new Line(new Point(game.width*0.496,game.height*0.821),new Point(game.width*0.89,game.height*0.6))
        ],
        [
            new Panel('navigationX','navigationPanel',0.786*game.width,0.24*game.height,71,{forwardId:'forward',backwardId:'backward',direction:1},game),
            new Panel('navigationY','navigationPanel',0.67*game.width,0.69*game.height,72,{forwardId:'forward',backwardId:'backward',direction:-1},game)
        ]
    )
}