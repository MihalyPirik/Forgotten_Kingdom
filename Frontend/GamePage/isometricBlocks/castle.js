import {GameController} from '../controllers/Game.js'
import { Circle } from '../models/Circle.js'
import { Line } from '../models/Line.js'
import { Point } from '../models/Point.js'
import { IsometricBlock } from '../models/isometricBlock.js'
import { Panel } from '../models/Panel.js'
import { NPC } from '../models/NPC.js'
import { Story } from '../controllers/Story.js'
import { getBlockResidents } from '../../services/residentService.js'


/**
 * 
 * x: 0.339, 0.423
 * @param {GameController} game 
 */
const backGround=new Image()
backGround.src="./assets/blocks/Castle.png"

const charSprite=new Image()
charSprite.src='./assets/maincharacters/char_a_p1_0bas_humn_v01.png'

const inCastle = new Image()
inCastle.src = './assets/blocks/inCastle.png'

const CastleInterior = (game)=>{
    game.currentBlock=new IsometricBlock(
        'Kastély',
        inCastle,
        null,
        [],
        [],
        [
            new Panel('leaveInterior',game.width*0.42,game.height*0.84,game.width*0.05,false)
        ]

    )
    return game.currentBlock
}


export const Kastély=async(game)=>{
    
   game.currentBlock=new IsometricBlock(
    "Kastély",backGround,CastleInterior,[
    new NPC(game,'Michail',charSprite,game.width*0.26,game.height*0.67,'Lovag')
    ],
    [
new Line(new Point(game.width*0.2,game.height*0.83),new Point(game.width*0.34,game.height*0.74)),
new Line(new Point(game.width*0.33,game.height*0.75),new Point(game.width*0.43,game.height*0.728),500),
new Line(new Point(game.width*0.42,game.height*0.723),new Point(game.width*0.64,game.height*0.86)),
new Line(new Point(game.width*0.64,game.height*0.86),new Point(game.width*0.815,game.height*0.77)),
new Line(new Point(game.width*0.815,game.height*0.77),new Point(game.width*0.56,game.height*0.65)),
new Line(new Point(game.width*0.56,game.height*0.65),new Point(game.width*0.51,game.height*0.68)),
new Line(new Point(game.width*0.51,game.height*0.68),new Point(game.width*0.27,game.height*0.56)),
new Line(new Point(game.width*0.27,game.height*0.56),new Point(game.width*0.282,game.height*0.605)),
new Circle(game.width*0.276,game.height*0.625,game.width*0.02),
new Line(new Point(game.width*0.26,game.height*0.6),new Point(game.width*0.246,game.height*0.712)),
new Line(new Point(game.width*0.246,game.height*0.712),new Point(game.width*0.176,game.height*0.79)),
new Line(new Point(game.width*0.25,game.height*0.83),new Point(game.width*0.176,game.height*0.79))
    ],
    [
        new Panel('navigationPanel',game.width*0.74,game.height*0.82,game.width*0.05,{forwardId:'forward',backwardId:'backward',direction:1}),
        new Panel('navigationPanel',game.width*0.22,game.height*0.78,game.width*0.05,{forwardId:'forward',backwardId:'backward',direction:-1}),
        new Panel('enterInterior',game.width*0.38,game.height*0.55,game.width*0.08,false),
   
    ]
   )
   game.player.width=game.width*0.08
   game.player.height=game.height*0.08
   game.player.objY=game.height*0.7
   game.player.radius=game.width*0.01
}