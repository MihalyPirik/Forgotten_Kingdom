import { Line } from "../models/Line.js"
import { Point } from "../models/Point.js"
import { IsometricBlock } from "../models/isometricBlock.js"
import { Circle } from '../models/Circle.js'
import { Panel } from "../models/Panel.js"

const backGround=new Image()
backGround.src="./assets/blocks/FishingPond.png"

// start X: 0.524,  Y: 0.578
// end X:0.397 , Y: 0.495
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
            new Circle(game.width*0.23,game.height*0.644,game.width*0.02),
            new Circle(game.width*0.258,game.height*0.68,game.width*0.02),
            new Circle(game.width*0.29,game.height*0.7,game.width*0.02),
            new Circle(game.width*0.33,game.height*0.72,game.width*0.02),
            new Circle(game.width*0.37,game.height*0.74,game.width*0.02),
            new Circle(game.width*0.41,game.height*0.76,game.width*0.02),
            new Circle(game.width*0.45,game.height*0.77,game.width*0.02),
            new Circle(game.width*0.49,game.height*0.77,game.width*0.02),
            new Circle(game.width*0.535,game.height*0.77,game.width*0.02),
            new Circle(game.width*0.575,game.height*0.76,game.width*0.02),
            new Circle(game.width*0.615,game.height*0.74,game.width*0.02),
            new Circle(game.width*0.655,game.height*0.73,game.width*0.02),
            new Circle(game.width*0.695,game.height*0.72,game.width*0.02),
            new Circle(game.width*0.73,game.height*0.7,game.width*0.02),
            new Circle(game.width*0.75,game.height*0.66,game.width*0.02),
            new Circle(game.width*0.77,game.height*0.62,game.width*0.02),
            new Circle(game.width*0.78,game.height*0.58,game.width*0.02),
            new Circle(game.width*0.78,game.height*0.54,game.width*0.02),
            new Circle(game.width*0.76,game.height*0.5,game.width*0.02),
            new Circle(game.width*0.72,game.height*0.49,game.width*0.02),
            new Circle(game.width*0.69,game.height*0.46,game.width*0.02),
            new Circle(game.width*0.65,game.height*0.45,game.width*0.02),
            new Circle(game.width*0.61,game.height*0.43,game.width*0.02),
            new Circle(game.width*0.57,game.height*0.43,game.width*0.02),
            new Circle(game.width*0.53,game.height*0.44,game.width*0.02),
            new Circle(game.width*0.49,game.height*0.46,game.width*0.02),
            new Circle(game.width*0.45,game.height*0.48,game.width*0.02),
            new Line(new Point(game.width*0.366,game.height*0.52),new Point(game.width*0.488,game.height*0.596)),
            new Line(new Point(game.width*0.524,game.height*0.578),new Point(game.width*0.397,game.height*0.495)),
            new Line(new Point(game.width*0.488,game.height*0.596),new Point(game.width*0.524,game.height*0.578))
        ],
        [
            new Panel('navigationPanel',0.786*game.width,0.758*game.height,100,{forwardId:'forward',backwardId:'backward',direction:1},game),
            new Panel('navigationPanel',0.267*game.width,0.794*game.height,100,{forwardId:'forward',backwardId:'backward',direction:-1},game),
            new Panel('Fishing',game.width*0.5,game.height*0.59,game.width*0.04,false)
        ]

    )
}