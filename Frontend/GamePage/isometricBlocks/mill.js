import { Line } from "../models/Line.js"
import { Panel } from "../models/Panel.js"
import { Point } from "../models/Point.js"
import { IsometricBlock } from "../models/isometricBlock.js"
const mill=new Image()
mill.src='./assets/blocks/Mill.png'

export const Malom=(game)=>
{


  const navigationPanelX=new Panel('navigationX','navigationPanel',0.7*game.width,0.91*game.height,100,{forwardId:'forward',backwardId:'backward',direction:'x'},game)
  const navigationPanelY=new Panel('navigationY','navigationPanel',0.32*game.width,0.82*game.height,50,{forwardId:'forward',backwardId:'backward',direction:'y'},game)
  const somePanel=new Panel('somePanel','somePanel',game.width*0.3,game.height*0.66,80,false,game)

  game.currentBlock=new IsometricBlock(
        'Malom',
        mill,
        [],
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
                )
        ],
        [
            somePanel,
            navigationPanelX,
            navigationPanelY,
        ],
        )
}