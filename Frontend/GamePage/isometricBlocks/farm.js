import { Circle } from "../models/Circle.js"
import { Line } from "../models/Line.js"
import { NPC } from "../models/NPC.js"
import { Panel } from "../models/Panel.js"
import { Point } from "../models/Point.js"
import { IsometricBlock } from "../models/isometricBlock.js"
import { populateIsometricBlock } from "../utils/populateIsometricBlocks.js"



const backGround=new Image()
backGround.src="./assets/blocks/Farm.png"
const charSprite=new Image()
charSprite.src='./assets/maincharacters/char_a_p1_0bas_humn_v01.png'


const inFarm = new Image()
inFarm.src = './assets/blocks/inFarm.png'


const inFarmBlock = (game)=>{
    game.currentBlock = new IsometricBlock('Farm',inFarm,null,
    [new NPC(game,'Eric',charSprite,game.width*0.53,game.height*0.57,'Farmer')]
    ,
    [],
    [
        new Panel('leaveInterior',game.width*0.41,game.height*0.88,game.width*0.05,false)
    ]
    )
    populateIsometricBlock(game)
    return game.currentBlock
}



export const Farm=(game)=>{


    game.currentBlock=new IsometricBlock(
        'Farm',
        backGround,
        inFarmBlock,
        [

        ],
        [
new Line(
    new Point(game.width*0.507,game.height*0.89),
new Point(game.width*0.673,game.height*0.798)),
new Line(new Point(game.width*0.673,game.height*0.798),new Point(game.width*0.334,game.height*0.608)),
new Line(new Point(game.width*0.507,game.height*0.89),new Point(game.width*0.025,game.height*0.623)),
new Line(new Point(game.width*0.025,game.height*0.623),new Point(game.width*0.19,game.height*0.51)),
new Line(new Point(game.width*0.19,game.height*0.51),new Point(game.width*0.289,game.height*0.568)),
new Line(new Point(game.width*0.337,game.height*0.523),new Point(game.width*0.286,game.height*0.487)),
new Line(new Point(game.width*0.286,game.height*0.487),new Point(game.width*0.326,game.height*0.446)),
new Line(new Point(game.width*0.326,game.height*0.446),new Point(game.width*0.502,game.height*0.561)),
new Line(new Point(game.width*0.502,game.height*0.561),new Point(game.width*0.548,game.height*0.536)),
new Line(new Point(game.width*0.548,game.height*0.536),new Point(game.width*0.554,game.height*0.577)),
new Line(new Point(game.width*0.554,game.height*0.577),new Point(game.width*0.634,game.height*0.617)),
new Line(new Point(game.width*0.422,game.height*0.592),new Point(game.width*0.526,game.height*0.646)),
new Line(new Point(game.width*0.567,game.height*0.673),new Point(game.width*0.714,game.height*0.749)),
new Line(new Point(game.width*0.714,game.height*0.749),new Point(game.width*0.951,game.height*0.628)),
new Line(new Point(game.width*0.567,game.height*0.673),new Point(game.width*0.634,game.height*0.617)),
new Line(new Point(game.width*0.337,game.height*0.523),new Point(game.width*0.289,game.height*0.568)),
new Line(new Point(game.width*0.673,game.height*0.798),new Point(game.width*0.714,game.height*0.749)),
new Circle(game.width*0.567,game.height*0.673,game.width*0.01),
new Circle(game.width*0.548,game.height*0.536,game.width*0.01),
new Circle(game.width*0.502,game.height*0.561,game.width*0.01),
new Circle(game.width*0.554,game.height*0.577,game.width*0.01),
new Circle(game.width*0.289,game.height*0.568,game.width*0.01),
new Circle(game.width*0.337,game.height*0.523,game.width*0.01)
        ],
        [
            new Panel('navigationPanel',game.width*0.23,game.height*0.76,game.width*0.05,{forwardId:'forward',backwardId:'backward',direction:-1}),
            new Panel('navigationPanel',game.width*0.68,game.height*0.8,game.width*0.05,{forwardId:'forward',backwardId:'backward',direction:1}),
            new Panel('Action',game.width*0.63,game.height*0.61,game.width*0.03,false,{action:"Aratás"}),
            new Panel('enterInterior',game.width*0.4,game.height*0.52,game.width*0.05,false)
        ]
    )
    
}
