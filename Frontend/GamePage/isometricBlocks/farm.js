import { Circle } from "../models/Circle.js"
import { Line } from "../models/Line.js"
import { Panel } from "../models/Panel.js"
import { Point } from "../models/Point.js"
import { IsometricBlock } from "../models/isometricBlock.js"



const backGround=new Image()
backGround.src="./assets/blocks/Farm.png"

export const Farm=(game)=>{

    game.currentBlock=new IsometricBlock(
        'Farm',
        backGround,
        null,
        [

        ],
        [
            // start: x: 0.951, y:0.628
            // end: x: 0.714, y:0.749
new Line(
    new Point(game.width*0.507,game.height*0.89),
new Point(game.width*0.673,game.height*0.798)),
new Line(new Point(game.width*0.673,game.height*0.798),new Point(game.width*0.334,game.height*0.608)),
new Line(new Point(game.width*0.507,game.height*0.89),new Point(game.width*0.025,game.height*0.623)),
new Line(new Point(game.width*0.025,game.height*0.623),new Point(game.width*0.19,game.height*0.51)),
new Line(new Point(game.width*0.19,game.height*0.51),new Point(game.width*0.289,game.height*0.568)),
new Line(new Point(game.width*0.337,game.height*0.523),new Point(game.width*0.286,game.height*0.487)),
new Line(new Point(game.width*0.286,game.height*0.487),new Point(game.width*0.326,game.height*0.446)),
new Line(new Point(game.width*0.326,game.height*0.446),new Point(game.width*0.502,game.height*0.561)),
new Line(new Point(game.width*0.502,game.height*0.561),new Point(game.width*0.548,game.height*0.536)),
new Line(new Point(game.width*0.548,game.height*0.536),new Point(game.width*0.554,game.height*0.577)),
new Line(new Point(game.width*0.554,game.height*0.577),new Point(game.width*0.634,game.height*0.617)),
new Line(new Point(game.width*0.422,game.height*0.592),new Point(game.width*0.526,game.height*0.646)),
new Line(new Point(game.width*0.567,game.height*0.673),new Point(game.width*0.714,game.height*0.749)),
new Line(new Point(game.width*0.714,game.height*0.749),new Point(game.width*0.951,game.height*0.628)),
new Line(new Point(game.width*0.567,game.height*0.673),new Point(game.width*0.634,game.height*0.617)),
new Line(new Point(game.width*0.337,game.height*0.523),new Point(game.width*0.289,game.height*0.568)),
new Line(new Point(game.width*0.673,game.height*0.798),new Point(game.width*0.714,game.height*0.749)),
new Circle(game.width*0.567,game.height*0.673,game.width*0.01),
new Circle(game.width*0.548,game.height*0.536,game.width*0.01),
new Circle(game.width*0.502,game.height*0.561,game.width*0.01),
new Circle(game.width*0.554,game.height*0.577,game.width*0.01),
new Circle(game.width*0.289,game.height*0.568,game.width*0.01),
new Circle(game.width*0.337,game.height*0.523,game.width*0.01)
        ],
        [
            new Panel('navigationX','navigationPanel',game.width*0.7638,game.height*0.7574,game.width*0.2,{forwardId:'forward',backwardId:'backward',direction:-1}),
            new Panel('navigationY','navigationPanel',game.width*0.2425,game.height*0.7713,game.width*0.2,{forwardId:'forward',backwardId:'backward',direction:1})
        ]
    )
}