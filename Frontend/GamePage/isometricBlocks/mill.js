import { Circle } from "../models/Circle.js"
import { Line } from "../models/Line.js"
import { Monster } from "../models/Monster.js"
import { Panel } from "../models/Panel.js"
import { Point } from "../models/Point.js"
import { IsometricBlock } from "../models/isometricBlock.js"
const mill=new Image()
mill.src='./assets/blocks/Mill.png'

const inMill = new Image()
inMill.src = './assets/blocks/inMill.png'
const MillInterior = (game)=>
{
    game.currentBlock = new IsometricBlock(
        'Malom',
        inMill,
        null,
        [],
        [],
        [
          new Panel('leaveInterior',game.width*0.44,game.height*0.88,game.width*0.05,false)
        ]
    )
    return game.currentBlock
}


export const Malom=(game)=>
{


  const navigationPanelX=new Panel('navigationPanel',0.67*game.width,0.83*game.height,game.width*0.05,{forwardId:'forward',backwardId:'backward',direction:1},game)
  const navigationPanelY=new Panel('navigationPanel',0.34*game.width,0.84*game.height,game.width*0.05,{forwardId:'forward',backwardId:'backward',direction:-1},game)

  game.currentBlock=new IsometricBlock(
        'Malom',
        mill,
        MillInterior,
        [
      ],
        [
            new Line(
                new Point(game.width * 0.2,game.height * 0.775),
                new Point(game.width * 0.5, game.height * 0.94)
                ),
              // new Line(
              //   new Point(game.width * 0.2, game.height * 0.775),
              //   new Point(game.width * 0.5, game.height * 0.67)
              //   ),
                new Line(
                  new Point(game.width * 0.5, game.height * 0.67),
                  new Point(game.width * 0.78, game.height * 0.78)
                ),
                new Line(
                  new Point(game.width * 0.78, game.height * 0.78),
                  new Point(game.width * 0.5, game.height * 0.938)
                ),
                new Circle(game.width * 0.2,game.height * 0.775,game.width*0.02)
        ],
        [
          navigationPanelX,
          navigationPanelY,
            new Panel('enterInterior',game.width*0.36,game.height*0.61,game.width*0.1,false)
        ],
        )
}