import { Line } from "../models/Line.js"
import { Monster } from "../models/Monster.js"
import { Panel } from "../models/Panel.js"
import { Point } from "../models/Point.js"
import { IsometricBlock } from "../models/isometricBlock.js"
const mill=new Image()
mill.src='./assets/blocks/Mill.png'
const monster=new Image()
monster.src='./assets/monsterSprite.jfif'
export const Malom=(game)=>
{


  const navigationPanelX=new Panel('navigationX','navigationPanel',0.7*game.width,0.91*game.height,100,{forwardId:'forward',backwardId:'backward',direction:'x'},game)
  const navigationPanelY=new Panel('navigationY','navigationPanel',0.32*game.width,0.82*game.height,50,{forwardId:'forward',backwardId:'backward',direction:'y'},game)

  game.currentBlock=new IsometricBlock(
        'Malom',
        mill,
        new Point(0,0),
        null,
        [new Monster('1','Werewolf',game,monster,game.width*0.6,game.height*0.77,100,3,3,2),
        new Monster('1','Werewolf',game,monster,game.width*0.65,game.height*0.77,100,3,3,2),
        new Monster('1','Werewolf',game,monster,game.width*0.7,game.height*0.77,100,3,3,2)
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
                )
        ],
        [
            navigationPanelX,
            navigationPanelY,
        ],
        )
}