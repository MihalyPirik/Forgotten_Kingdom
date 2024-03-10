import { Circle } from "../models/Circle.js"
import { Line } from "../models/Line.js"
import { Monster } from "../models/Monster.js"
import { Panel } from "../models/Panel.js"
import { Point } from "../models/Point.js"
import { IsometricBlock } from "../models/isometricBlock.js"
const mill=new Image()
mill.src='./assets/blocks/Mill.png'

export const Malom=(game)=>
{


  const navigationPanelX=new Panel('navigationPanel',0.7*game.width,0.91*game.height,100,{forwardId:'forward',backwardId:'backward',direction:1},game)
  const navigationPanelY=new Panel('navigationPanel',0.32*game.width,0.82*game.height,50,{forwardId:'forward',backwardId:'backward',direction:-1},game)

  game.currentBlock=new IsometricBlock(
        'Malom',
        mill,
        null,
        [
      ],
        [
            new Line(
                new Point(game.width * 0.2,game.height * 0.775),
                new Point(game.width * 0.5, game.height * 0.94)
                ),
              new Line(
                new Point(game.width * 0.2, game.height * 0.775),
                new Point(game.width * 0.5, game.height * 0.67)
                ),
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
        ],
        )
}