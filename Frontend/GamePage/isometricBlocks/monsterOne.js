import { Panel } from "../models/Panel.js"
import { IsometricBlock } from "../models/isometricBlock.js"
import { Monster } from "../models/Monster.js"
import { Line } from "../models/Line.js"
import { Point } from "../models/Point.js"
import { Circle } from "../models/Circle.js"
import { Story } from "../controllers/Story.js"
import { populateIsometricBlock } from "../utils/populateIsometricBlocks.js"
import { GetIcon } from "../utils/imageLoader.js"
const monster=new Image()
monster.src='./assets/monsterSprite.jfif'
const backGround=new Image()
backGround.src="./assets/blocks/EnemyOne.png"
export const Szörny1=async(game)=>
{
    game.currentBlock=new IsometricBlock(
        'Szörny1',
        backGround,
        null,
        [
        //  x: 0.846 y: 0.484  new Monster('1','Werewolf',game,monster,game.width*0.6,game.height*0.77,100,3,3,2),
        // new Monster('1','Werewolf',game,monster,game.width*0.65,game.height*0.77,100,3,3,2),
        // new Monster('2','Skeleton',game,monster,game.width*0.7,game.height*0.77,100,3,3,2)
        ],
        [
            new Line(new Point(game.width*0.5064,game.height*0.7939),new Point(game.width*0.9711,game.height*0.530)),
            new Circle(game.width*0.9711,game.height*0.530,game.width*0.01),

            new Line(new Point(game.width*0.9711,game.height*0.530),new Point(game.width*0.8771,game.height*0.4803)),
            new Circle(game.width*0.8771,game.height*0.4803,game.width*0.01),

            new Line(new Point(game.width*0.8771,game.height*0.4803),new Point(game.width*0.80021,game.height*0.53623)),
            new Circle(game.width*0.80021,game.height*0.53623,game.width*0.01),

            new Line(new Point(game.width*0.80021,game.height*0.53623),new Point(game.width*0.46688,game.height*0.33333)),
            new Circle(game.width*0.46688,game.height*0.33333,game.width*0.01),

            new Line(new Point(game.width*0.46688,game.height*0.33333),new Point(game.width*0.03739,game.height*0.5341)),
            new Circle(game.width*0.03739,game.height*0.5341,game.width*0.01),

            new Line(new Point(game.width*0.03739,game.height*0.5341),new Point(game.width*0.5064,game.height*0.7939)),
            new Circle(game.width*0.5064,game.height*0.7939,game.width*0.01),
        ],
        [
            new Panel('navigationPanel',game.width*0.6324,game.height*0.7505,game.width*0.07,{forwardId:'forward',backwardId:'backward',direction:-1},null),
        ],
        0.08,
        0.08
        )
        game.player.objX = game.width *0.5085
        game.player.objY = game.height * 0.6700
        populateIsometricBlock(game)
        game.player.width = game.width * 0.08
        game.player.height = game.height * 0.08
        game.player.radius = game.height * 0.038
}