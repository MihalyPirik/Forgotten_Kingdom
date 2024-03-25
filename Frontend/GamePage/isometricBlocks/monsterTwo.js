import { Circle } from "../models/Circle.js"
import { Line } from "../models/Line.js"
import { Monster } from "../models/Monster.js"
import { Panel } from "../models/Panel.js"
import { Point } from "../models/Point.js"
import { IsometricBlock } from "../models/isometricBlock.js"

const backGround=new Image()
backGround.src="./assets/blocks/EnemyTwo.png"
const monster=new Image()
monster.src='./assets/monsterSprite.jfif'
export const Szörny2=(game)=>{
    game.currentBlock=new IsometricBlock(
        'Szörny2',
        backGround,
        null,
        [
        //     new Monster('1','Werewolf',game,monster,game.width*0.65,game.height*0.77,100,3,3,2),
        // new Monster('2','Skeleton',game,monster,game.width*0.7,game.height*0.77,100,3,3,2)
        ],
        [
            // x: 0.075, y: 0.517
            new Line(new Point(game.width*0.5,game.height*0.78),new Point(game.width,game.height*0.465)),
            new Line(new Point(game.width*0.5,game.height*0.78),
            new Point(game.width*0.027,game.height*0.5)),
            new Circle(game.width*0.0726,game.height*0.48,game.width*0.05),
            new Circle(game.width*0.15,game.height*0.42,game.width*0.05),
            new Circle(game.width*0.24,game.height*0.38,game.width*0.05),
            new Circle(game.width*0.3,game.height*0.31,game.width*0.05),
            new Circle(game.width*0.387,game.height*0.26,game.width*0.05),
            new Circle(game.width*0.47,game.height*0.21,game.width*0.05),
            new Circle(game.width*0.57,game.height*0.21,game.width*0.05),
            new Circle(game.width*0.64,game.height*0.26,game.width*0.04),
            new Circle(game.width*0.71,game.height*0.3,game.width*0.04),
            new Circle(game.width*0.78,game.height*0.33,game.width*0.04),
            new Circle(game.width*0.85,game.height*0.37,game.width*0.04),
            new Circle(game.width*0.92,game.height*0.41,game.width*0.04),
            new Circle(game.width*0.98,game.height*0.45,game.width*0.035)
        ],
        [
            new Panel('navigationPanel',game.width*0.29,game.height*0.64,game.width*0.05,{forwardId:'forward',backwardId:'backward',direction:1}),
        ]

    )
}