import { Panel } from "../models/Panel.js"
import { IsometricBlock } from "../models/isometricBlock.js"
import { Monster } from "../models/Monster.js"
import { Line } from "../models/Line.js"
import { Point } from "../models/Point.js"
import { Circle } from "../models/Circle.js"
import { Story } from "../controllers/Story.js"
import { populateIsometricBlock } from "../utils/populateIsometricBlocks.js"
const monster=new Image()
monster.src='./assets/monsterSprite.jfif'
const backGround=new Image()
backGround.src="./assets/blocks/EnemyOne.png"
export const Szörny1=(game)=>
{
    game.currentBlock=new IsometricBlock(
        'Szörny1',
        backGround,
        null,
        [
        //  x: 0.846 y: 0.484  new Monster('1','Werewolf',game,monster,game.width*0.6,game.height*0.77,100,3,3,2),
        new Monster('1','Werewolf',game,monster,game.width*0.65,game.height*0.77,100,3,3,2),
        new Monster('2','Skeleton',game,monster,game.width*0.7,game.height*0.77,100,3,3,2)
        ],
        [
            new Line(new Point(game.width*0.506,game.height*0.82),
            new Point(game.width*0.027,game.height*0.55)),
            new Line(new Point(game.width*0.035,game.height*0.55),new Point(game.width*0.16,game.height*0.472)),
            new Circle(game.width*0.2,game.height*0.44,game.width*0.05),
            new Circle(game.width*0.256,game.height*0.4,game.width*0.03),
            new Circle(game.width*0.315,game.height*0.4,game.width*0.035),
            new Circle(game.width*0.366,game.height*0.331,game.width*0.035),
            new Circle(game.width*0.426,game.height*0.287 ,game.width*0.05),
            new Circle(game.width*0.517,game.height*0.327 ,game.width*0.05),
            new Circle(game.width*0.623,game.height*0.36 ,game.width*0.06),
            new Circle(game.width*0.7,game.height*0.432 ,game.width*0.05),
            new Circle(game.width*0.8,game.height*0.487 ,game.width*0.057),
            new Line(new Point(game.width*0.506,game.height*0.82),new Point(game.width*0.967,game.height*0.548)),
            new Line(new Point(game.width*0.967,game.height*0.548),new Point(game.width*0.846,game.height*0.484)),
            new Circle(game.width*0.339,game.height*0.365,game.width*0.02)
        ],
        [
            new Panel('navigationPanel',game.width*0.61,game.height*0.72,game.width*0.05,{forwardId:'forward',backwardId:'backward',direction:-1}),
        ]
        )
        populateIsometricBlock(game)
}