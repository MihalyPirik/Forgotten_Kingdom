import { Circle } from "../models/Circle.js"
import { Line } from "../models/Line.js"
import { NPC } from "../models/NPC.js"
import { Panel } from "../models/Panel.js"
import { Point } from "../models/Point.js"
import { IsometricBlock } from "../models/isometricBlock.js"
import { GetIcon } from "../utils/imageLoader.js"
import { populateIsometricBlock } from "../utils/populateIsometricBlocks.js"

const backGround = new Image()
backGround.src = "./assets/blocks/Farm.png"
const charSprite = new Image()
charSprite.src = './assets/maincharacters/char_a_p1_0bas_humn_v01.png'

const inFarm = new Image()
inFarm.src = './assets/blocks/inFarm.png'

const inFarmBlock = (game) => {
    game.currentBlock = new IsometricBlock('Farm', inFarm, null,
        []
        ,
        [
            new Line(new Point(game.width * 0.5032, game.height * 0.9354), new Point(game.width * 0.69658, game.height * 0.8278)),
            new Circle(game.width * 0.69658, game.height * 0.8278, game.width * 0.01),

            new Line(new Point(game.width * 0.69658, game.height * 0.8278), new Point(game.width * 0.70833, game.height * 0.6875)),
            new Circle(game.width * 0.70833, game.height * 0.6875, game.width * 0.01),

            new Line(new Point(game.width * 0.70833, game.height * 0.6875), new Point(game.width * 0.67094, game.height * 0.5983)),
            new Circle(game.width * 0.67094, game.height * 0.5983, game.width * 0.01),

            new Line(new Point(game.width * 0.67094, game.height * 0.5983), new Point(game.width * 0.50534, game.height * 0.50717)),
            new Circle(game.width * 0.50534, game.height * 0.50717, game.width * 0.01),

            new Line(new Point(game.width * 0.50534, game.height * 0.50717), new Point(game.width * 0.3568, game.height * 0.57786)),
            new Circle(game.width * 0.3568, game.height * 0.57786, game.width * 0.01),

            new Line(new Point(game.width * 0.3568, game.height * 0.57786), new Point(game.width * 0.41666, game.height * 0.62192)),
            new Circle(game.width * 0.41666, game.height * 0.62192, game.width * 0.01),

            new Line(new Point(game.width * 0.41666, game.height * 0.62192), new Point(game.width * 0.4198, game.height * 0.6854)),
            new Circle(game.width * 0.4198, game.height * 0.6854, game.width * 0.01),

            new Line(new Point(game.width * 0.4198, game.height * 0.6854), new Point(game.width * 0.29166, game.height * 0.74385)),
            new Circle(game.width * 0.29166, game.height * 0.74385, game.width * 0.01),

            new Line(new Point(game.width * 0.29166, game.height * 0.74385), new Point(game.width * 0.20512, game.height * 0.6977)),
            new Circle(game.width * 0.20512, game.height * 0.6977, game.width * 0.01),

            new Line(new Point(game.width * 0.20512, game.height * 0.6977), new Point(game.width * 0.1549, game.height * 0.74180)),
            new Circle(game.width * 0.1549, game.height * 0.74180, game.width * 0.01),

            new Line(new Point(game.width * 0.1549, game.height * 0.74180), new Point(game.width * 0.5032, game.height * 0.9354)),
            new Circle(game.width * 0.5032, game.height * 0.9354, game.width * 0.01),

            new Circle(game.width * 0.7585, game.height * 0.7633, game.width * 0.082),
            new Circle(game.width * 0.38355, game.height * 0.6536, game.width * 0.045),
        ],
        [
            new Panel('leaveInterior', game.width * 0.41, game.height * 0.88, game.width * 0.05, false)
        ]
    )
    game.player.objX = game.width * 0.50106
    game.player.objY = game.height * 0.80635
    populateIsometricBlock(game, true)
    game.player.width = game.width * 0.15
    game.player.height = game.height * 0.15
    game.player.radius = game.height * 0.045
    return game.currentBlock
}

export const Farm = async (game) => {
    game.currentBlock = new IsometricBlock(
        'Farm',
        backGround,
        inFarmBlock,
        [

        ],
        [
            new Line(new Point(game.width * 0.5074, game.height * 0.9192), new Point(game.width * 0.7104, game.height * 0.7909)),
            new Circle(game.width * 0.7104, game.height * 0.7909, game.width * 0.01),
            new Line(new Point(game.width * 0.7104, game.height * 0.7909), new Point(game.width * 0.5555, game.height * 0.7081)),
            new Circle(game.width * 0.5555, game.height * 0.7081, game.width * 0.01),
            new Line(new Point(game.width * 0.5555, game.height * 0.7081), new Point(game.width * 0.5566, game.height * 0.6694)),
            new Circle(game.width * 0.5566, game.height * 0.6694, game.width * 0.01),
            new Line(new Point(game.width * 0.5566, game.height * 0.6694), new Point(game.width * 0.6196, game.height * 0.6399)),
            new Circle(game.width * 0.6196, game.height * 0.6399, game.width * 0.01),
            new Line(new Point(game.width * 0.5566, game.height * 0.6694), new Point(game.width * 0.6196, game.height * 0.6399)),
            new Line(new Point(game.width * 0.6196, game.height * 0.6399), new Point(game.width * 0.5213, game.height * 0.5883)),
            new Circle(game.width * 0.5213, game.height * 0.5883, game.width * 0.01),
            new Line(new Point(game.width * 0.5213, game.height * 0.5883), new Point(game.width * 0.4754, game.height * 0.6151)),
            new Circle(game.width * 0.4754, game.height * 0.6151, game.width * 0.01),
            new Line(new Point(game.width * 0.4754, game.height * 0.6151), new Point(game.width * 0.4209, game.height * 0.5837)),
            new Circle(game.width * 0.4209, game.height * 0.5837, game.width * 0.01),
            new Line(new Point(game.width * 0.4209, game.height * 0.5837), new Point(game.width * 0.4401, game.height * 0.5349)),
            new Circle(game.width * 0.4401, game.height * 0.5349, game.width * 0.01),
            new Line(new Point(game.width * 0.4401, game.height * 0.5349), new Point(game.width * 0.3888, game.height * 0.508)),
            new Circle(game.width * 0.3888, game.height * 0.508, game.width * 0.01),
            new Line(new Point(game.width * 0.3888, game.height * 0.508), new Point(game.width * 0.3664, game.height * 0.551)),
            new Circle(game.width * 0.3664, game.height * 0.551, game.width * 0.01),
            new Line(new Point(game.width * 0.3664, game.height * 0.551), new Point(game.width * 0.283, game.height * 0.6003)),
            new Circle(game.width * 0.283, game.height * 0.6003, game.width * 0.01),
            new Line(new Point(game.width * 0.283, game.height * 0.6003), new Point(game.width * 0.3440, game.height * 0.6344)),
            new Circle(game.width * 0.3440, game.height * 0.6344, game.width * 0.01),
            new Line(new Point(game.width * 0.3440, game.height * 0.6344), new Point(game.width * 0.1912, game.height * 0.7311)),
            new Circle(game.width * 0.1912, game.height * 0.7311, game.width * 0.01),
            new Line(new Point(game.width * 0.1912, game.height * 0.7311), new Point(game.width * 0.5074, game.height * 0.9192)),
            new Circle(game.width * 0.5074, game.height * 0.9192, game.width * 0.01),


            new Circle(game.width * 0.5790, game.height * 0.6885, game.width * 0.03),
        ],
        [
            new Panel('navigationPanel', game.width * 0.23, game.height * 0.76, game.width * 0.04, { forwardId: 'forward', backwardId: 'backward', direction: -1 }, null),
            new Panel('navigationPanel', game.width * 0.68, game.height * 0.8, game.width * 0.04, { forwardId: 'forward', backwardId: 'backward', direction: 1 }, null),
            new Panel('Action', game.width * 0.4166, game.height * 0.72463, game.width * 0.04, false, { action: "Wheat" }),
            new Panel('Action', game.width * 0.5064, game.height * 0.7763, game.width * 0.04, false, { action: "Wheat" }),
            new Panel('Action', game.width * 0.5833, game.height * 0.819, game.width * 0.04, false, { action: "Wheat" }),
            new Panel('Action', game.width * 0.3397, game.height * 0.7691, game.width * 0.04, false, { action: "Wheat" }),
            new Panel('Action', game.width * 0.42307, game.height * 0.822, game.width * 0.04, false, { action: "Wheat" }),
            new Panel('Action', game.width * 0.5032, game.height * 0.8664, game.width * 0.04, false, { action: "Wheat" }),
            new Panel('enterInterior', game.width * 0.4166, game.height * 0.5193, game.width * 0.03, false)
        ],
        0.07,
        0.07
    )
    game.player.objX = game.width * 0.4775
    game.player.objY = game.height * 0.68647
    populateIsometricBlock(game)
    game.player.width = game.width * 0.07
    game.player.height = game.height * 0.07
    game.player.radius = game.height * 0.033
}