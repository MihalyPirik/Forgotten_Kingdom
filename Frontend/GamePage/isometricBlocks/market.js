import { getQuests } from "../../services/questService.js"
import { Story } from "../controllers/Story.js"
import { Circle } from "../models/Circle.js"
import { Line } from "../models/Line.js"
import { NPC } from "../models/NPC.js"
import { Panel } from "../models/Panel.js"
import { Point } from "../models/Point.js"
import { IsometricBlock } from "../models/isometricBlock.js"
import { GetIcon } from "../utils/imageLoader.js"
import { populateIsometricBlock } from "../utils/populateIsometricBlocks.js"

const backGround=new Image()
backGround.src="./assets/blocks/Market.png"
const charSprite=new Image()
charSprite.src='./assets/maincharacters/char_a_p1_0bas_humn_v01.png'
export const Piac= async (game)=>{




    game.currentBlock=new IsometricBlock
    (
        'Piac',
        backGround,
        null,
        [

        ],
        [
            new Line(new Point(game.width*0.1549,game.height*0.7960),new Point(game.width*0.3440,game.height*0.6563)),
            new Circle(game.width*0.34402,game.height*0.6563,game.width*0.01),

            new Line(new Point(game.width*0.3440,game.height*0.6563),new Point(game.width*0.3023,game.height*0.5755)),
            new Circle(game.width*0.3023,game.height*0.5755,game.width*0.01),

            new Line(new Point(game.width*0.3023,game.height*0.5755),new Point(game.width*0.1709,game.height*0.5279)),
            new Circle(game.width*0.1709,game.height*0.5279,game.width*0.01),

            new Line(new Point(game.width*0.1709,game.height*0.5279),new Point(game.width*0.2564,game.height*0.494)),
            new Circle(game.width*0.2564,game.height*0.494,game.width*0.01),

            new Line(new Point(game.width*0.2564,game.height*0.494),new Point(game.width*0.253,game.height*0.3985)),
            new Circle(game.width*0.253,game.height*0.3985,game.width*0.01),

            new Line(new Point(game.width*0.253,game.height*0.3985),new Point(game.width*0.3643,game.height*0.3643)),
            new Circle(game.width*0.3643,game.height*0.3643,game.width*0.01),

            new Line(new Point(game.width*0.3643,game.height*0.3643),new Point(game.width*0.3771,game.height*0.3364)),
            new Circle(game.width*0.3771,game.height*0.3364,game.width*0.01),

            new Line(new Point(game.width*0.3771,game.height*0.3364),new Point(game.width*0.4636,game.height*0.3022)),
            new Circle(game.width*0.4636,game.height*0.3022,game.width*0.01),

            new Line(new Point(game.width*0.4636,game.height*0.3022),new Point(game.width*0.4722,game.height*0.2298)),
            new Circle(game.width*0.4722,game.height*0.2298,game.width*0.01),

            new Line(new Point(game.width*0.4722,game.height*0.2298),new Point(game.width*0.5448,game.height*0.23706)),
            new Circle(game.width*0.5448,game.height*0.23706,game.width*0.01),

            new Line(new Point(game.width*0.5448,game.height*0.23706),new Point(game.width*0.55021,game.height*0.3209)),
            new Circle(game.width*0.55021,game.height*0.3209,game.width*0.01),
            
            new Line(new Point(game.width*0.55021,game.height*0.3209),new Point(game.width*0.6655,game.height*0.3260)),
            new Circle(game.width*0.6655,game.height*0.3260,game.width*0.01),

            new Line(new Point(game.width*0.6655,game.height*0.3260),new Point(game.width*0.7713,game.height*0.39544)),
            new Circle(game.width*0.7713,game.height*0.39544,game.width*0.01),

            new Line(new Point(game.width*0.7713,game.height*0.39544),new Point(game.width*0.7478,game.height*0.4399)),
            new Circle(game.width*0.7478,game.height*0.4399,game.width*0.01),

            new Line(new Point(game.width*0.7478,game.height*0.4399),new Point(game.width*0.82371,game.height*0.5051)),
            new Circle(game.width*0.82371,game.height*0.5051,game.width*0.01),

            new Line(new Point(game.width*0.82371,game.height*0.5051),new Point(game.width*0.75,game.height*0.55797)),
            new Circle(game.width*0.75,game.height*0.55797,game.width*0.01),

            new Line(new Point(game.width*0.75,game.height*0.55797),new Point(game.width*0.70512,game.height*0.6221)),
            new Circle(game.width*0.70512,game.height*0.6221,game.width*0.01),

            new Line(new Point(game.width*0.70512,game.height*0.6221),new Point(game.width*0.91132,game.height*0.7515)),
            new Circle(game.width*0.91132,game.height*0.7515,game.width*0.01),

            new Line(new Point(game.width*0.91132,game.height*0.7515),new Point(game.width*0.8824,game.height*0.7867)),
            new Circle(game.width*0.8824,game.height*0.7867,game.width*0.01),

            new Line(new Point(game.width*0.8824,game.height*0.7867),new Point(game.width*0.6655,game.height*0.64803)),
            new Circle(game.width*0.6655,game.height*0.64803,game.width*0.01),

            new Line(new Point(game.width*0.6655,game.height*0.64803),new Point(game.width*0.6132,game.height*0.7122)),
            new Circle(game.width*0.6132,game.height*0.7122,game.width*0.01),

            new Line(new Point(game.width*0.6132,game.height*0.7122),new Point(game.width*0.6260,game.height*0.7784)),
            new Circle(game.width*0.6260,game.height*0.7784,game.width*0.01),

            new Line(new Point(game.width*0.6260,game.height*0.7784),new Point(game.width*0.5726,game.height*0.7898)),
            new Circle(game.width*0.5726,game.height*0.7898,game.width*0.01),

            new Line(new Point(game.width*0.5726,game.height*0.7898),new Point(game.width*0.5213,game.height*0.6915)),
            new Circle(game.width*0.5213,game.height*0.6915,game.width*0.01),

            new Line(new Point(game.width*0.5213,game.height*0.6915),new Point(game.width*0.40277,game.height*0.6552)),
            new Circle(game.width*0.40277,game.height*0.6552,game.width*0.01),

            new Line(new Point(game.width*0.40277,game.height*0.6552),new Point(game.width*0.3685,game.height*0.6997)),
            new Circle(game.width*0.3685,game.height*0.6997,game.width*0.01),

            new Line(new Point(game.width*0.3685,game.height*0.6997),new Point(game.width*0.2061,game.height*0.8260)),
            new Circle(game.width*0.2061,game.height*0.8260,game.width*0.01),

            new Line(new Point(game.width*0.2061,game.height*0.8260),new Point(game.width*0.1549,game.height*0.7960)),
            new Circle(game.width*0.1549,game.height*0.7960,game.width*0.01),
        ],
        [
new Panel('navigationPanel',0.9273*game.width,0.7877*game.height,game.width*0.07,{forwardId:'forward',backwardId:'backward',direction:1},game),
new Panel('navigationPanel',0.14743*game.width,0.8426*game.height,game.width*0.08,{forwardId:'forward',backwardId:'backward',direction:-1},game),
new Panel('shop',game.width*0.5074,game.height*0.4979,game.width*0.1,false)
        ],
        0.07,
        0.07
    )
    game.player.objY=game.width*0.6397
populateIsometricBlock(game)




}