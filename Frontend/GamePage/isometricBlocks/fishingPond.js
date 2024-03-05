import { Line } from "../models/Line.js"
import { Point } from "../models/Point.js"
import { IsometricBlock } from "../models/isometricBlock.js"
import { Circle } from '../models/Circle.js'

const backGround=new Image()
backGround.src="./assets/blocks/FishingPond.png"

// start X: 0.841,  Y: 0.72
// end X: , Y: 
export const Horgásztó=(game)=>{
    game.currentBlock=new IsometricBlock(
        'Horgásztó',
        backGround,
        null,
        [
            
        ],
        [
            new Line(new Point(game.width*0.496,game.height*0.909),new Point(game.width*0.016,game.height*0.651)),
            new Circle(game.width*0.044,game.height*0.62,game.width*0.04),
            new Circle(game.width*0.08,game.height*0.57,game.width*0.04),
            new Circle(game.width*0.08,game.height*0.5,game.width*0.04),
            new Circle(game.width*0.13,game.height*0.44,game.width*0.04),
            new Line(new Point(game.width*0.155,game.height*0.434),new Point(game.width*0.273,game.height*0.415)),
            new Line(new Point(game.width*0.273,game.height*0.415),new Point(game.width*0.348,game.height*0.453)),
            new Line(new Point(game.width*0.348,game.height*0.453),new Point(game.width*0.476,game.height*0.4)),
            new Line(new Point(game.width*0.476,game.height*0.4),new Point(game.width*0.521,game.height*0.305)),
            new Circle(game.width*0.555,game.height*0.28,game.width*0.05),
            new Line(new Point(game.width*0.577,game.height*0.31),new Point(game.width*0.625,game.height*0.388)),
            new Circle(game.width*0.65,game.height*0.37,game.width*0.04),
            new Circle(game.width*0.73,game.height*0.36,game.width*0.04),
            new Circle(game.width*0.784,game.height*0.407,game.width*0.043),
            new Circle(game.width*0.847,game.height*0.463,game.width*0.043),
            new Circle(game.width*0.9,game.height*0.52,game.width*0.043),
            new Circle(game.width*0.894,game.height*0.59,game.width*0.043),
            new Circle(game.width*0.873,game.height*0.66,game.width*0.043),
            new Circle(game.width*0.841,game.height*0.71,game.width*0.02),
            new Line(new Point(game.width*0.496,game.height*0.909),new Point(game.width*0.841,game.height*0.72)),
            new Circle(game.width*0.361,game.height*0.53,game.width*0.02),
            new Circle(game.width*0.33,game.height*0.534,game.width*0.02),
            new Circle(game.width*0.29,game.height*0.548,game.width*0.02),
            new Circle(game.width*0.25,game.height*0.56,game.width*0.02),
            new Circle(game.width*0.22,game.height*0.58,game.width*0.02),
            new Circle(game.width*0.22,game.height*0.613,game.width*0.02),
            new Circle(game.width*0.23,game.height*0.644,game.width*0.02)
        ],
        [

        ]

    )
}