import { Line } from "../classes/Line.js"
import { Panel } from "../classes/Panel.js"
import { Point } from "../classes/Point.js"
import { isometricBlock } from "../classes/isometricBlock.js"
import { SetButtons } from "./navigations.js"
const mill=new Image()
mill.src='./assets/blocks/Mill.png'

export const createMill=(game)=>
{
  const navigationPanelX=new Panel(0.7*game.width,0.91*game.height,100,document.getElementById('navigationPanel'),'navigationX')
  const navigationPanelY=new Panel(0.32*game.width,0.82*game.height,50,document.getElementById('navigationPanel'),'navigationY')
    game.currentBlock=new isometricBlock(
        'Malom',
        mill,
        [],
        [
            new Line(
                new Point(game.canvas.width * 0.2,game.canvas.height * 0.775),
                new Point(game.canvas.width * 0.5, game.canvas.height * 0.94)
                ),
              new Line(
                new Point(game.canvas.width * 0.2, game.canvas.height * 0.775),
                new Point(game.canvas.width * 0.5, game.canvas.height * 0.67)
                ),
                new Line(
                  new Point(game.canvas.width * 0.5, game.canvas.height * 0.67),
                  new Point(game.canvas.width * 0.78, game.canvas.height * 0.78)
                ),
                new Line(
                  new Point(game.canvas.width * 0.78, game.canvas.height * 0.78),
                  new Point(game.canvas.width * 0.5, game.canvas.height * 0.938)
                )
        ],
        [
            new Panel(game.width*0.3,game.height*0.66,100,document.querySelector('template'),'pop-up',game),
            navigationPanelX,
            navigationPanelY
        ],
        )
        SetButtons(game,'x',navigationPanelX,'forward','backward')
        SetButtons(game,'y',navigationPanelY,'forward','backward')
}