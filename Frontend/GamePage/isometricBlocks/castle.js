import { GameController } from '../controllers/Game.js'
import { Circle } from '../models/Circle.js'
import { Line } from '../models/Line.js'
import { Point } from '../models/Point.js'
import { IsometricBlock } from '../models/isometricBlock.js'
import { Panel } from '../models/Panel.js'
import { NPC } from '../models/NPC.js'
import { Story } from '../controllers/Story.js'
import { populateIsometricBlock } from '../utils/populateIsometricBlocks.js'
import { GetIcon } from '../utils/imageLoader.js'


/**
 * 
 * x: 0.339, 0.423
 * @param {GameController} game 
 */
const backGround = new Image()
backGround.src = "./assets/blocks/Castle.png"

const charSprite = new Image()
charSprite.src = './assets/maincharacters/char_a_p1_0bas_humn_v01.png'

const inCastle = new Image()
inCastle.src = './assets/blocks/inCastle.png'

const CastleInterior = (game) => {
    game.currentBlock = new IsometricBlock(
        'Kastély',
        inCastle,
        null,
        [],
        [
            new Line(new Point(game.width * 0.49572, game.height * 0.8933), new Point(game.width * 0.914, game.height * 0.66045)),
            new Circle(game.width * 0.914, game.height * 0.66045, game.width * 0.01),

            new Line(new Point(game.width * 0.914, game.height * 0.66045), new Point(game.width * 0.661, game.height * 0.5289)),
            new Circle(game.width * 0.661, game.height * 0.5289, game.width * 0.01),

            new Line(new Point(game.width * 0.661, game.height * 0.5289), new Point(game.width * 0.613, game.height * 0.6055)),
            new Circle(game.width * 0.613, game.height * 0.6055, game.width * 0.01),

            new Line(new Point(game.width * 0.613, game.height * 0.6055), new Point(game.width * 0.5032, game.height * 0.67184)),
            new Circle(game.width * 0.5032, game.height * 0.67184, game.width * 0.01),

            new Line(new Point(game.width * 0.5032, game.height * 0.671843), new Point(game.width * 0.2617, game.height * 0.564)),
            new Circle(game.width * 0.2617, game.height * 0.564, game.width * 0.01),

            new Line(new Point(game.width * 0.26172, game.height * 0.564), new Point(game.width * 0.0747, game.height * 0.66149)),
            new Circle(game.width * 0.0747, game.height * 0.66149, game.width * 0.01),

            new Line(new Point(game.width * 0.0747, game.height * 0.66149), new Point(game.width * 0.49572, game.height * 0.8933)),
            new Circle(game.width * 0.49572, game.height * 0.8933, game.width * 0.01),
        ],
        [
            new Panel('leaveInterior', game.width * 0.4006, game.height * 0.8706, game.width * 0.07, false)
        ]

    )

    game.player.objX = game.width * 0.4957
    game.player.objY = game.height * 0.8012295
    populateIsometricBlock(game, true)
    game.player.width = game.width * 0.15
    game.player.height = game.height * 0.15
    game.player.radius = game.height * 0.07

    return game.currentBlock
}


export const Kastély = async (game) => {

    game.currentBlock = new IsometricBlock(
        "Kastély", backGround, CastleInterior, [
        // new NPC(game,'Michail',charSprite,game.width*0.26,game.height*0.67,'Lovag')
    ],
        [
            new Line(new Point(game.width * 0.4594, game.height * 0.7725), new Point(game.width * 0.5074, game.height * 0.7523)),
            new Circle(game.width * 0.5074, game.height * 0.7523, game.width * 0.01),
            new Line(new Point(game.width * 0.5074, game.height * 0.7523), new Point(game.width * 0.6517, game.height * 0.8314)),
            new Circle(game.width * 0.6517, game.height * 0.8314, game.width * 0.01),
            new Line(new Point(game.width * 0.6517, game.height * 0.8314), new Point(game.width * 0.8044, game.height * 0.7578)),
            new Circle(game.width * 0.8044, game.height * 0.7578, game.width * 0.01),
            new Line(new Point(game.width * 0.8044, game.height * 0.7578), new Point(game.width * 0.7040, game.height * 0.70073)),
            new Circle(game.width * 0.7040, game.height * 0.70073, game.width * 0.01),
            new Line(new Point(game.width * 0.7040, game.height * 0.70073), new Point(game.width * 0.6185, game.height * 0.6197)),
            new Circle(game.width * 0.6185, game.height * 0.6197, game.width * 0.01),
            new Line(new Point(game.width * 0.6185, game.height * 0.6197), new Point(game.width * 0.5192, game.height * 0.6767)),
            new Circle(game.width * 0.5192, game.height * 0.6767, game.width * 0.01),
            new Line(new Point(game.width * 0.5192, game.height * 0.6767), new Point(game.width * 0.3141, game.height * 0.5709)),
            new Circle(game.width * 0.3141, game.height * 0.5709, game.width * 0.01),
            new Line(new Point(game.width * 0.3141, game.height * 0.5709), new Point(game.width * 0.3098, game.height * 0.6399)),
            new Circle(game.width * 0.3098, game.height * 0.6399, game.width * 0.01),
            new Line(new Point(game.width * 0.3098, game.height * 0.6399), new Point(game.width * 0.2467, game.height * 0.6675)),
            new Circle(game.width * 0.2467, game.height * 0.6675, game.width * 0.01),
            new Line(new Point(game.width * 0.2467, game.height * 0.6675), new Point(game.width * 0.2606, game.height * 0.6998)),
            new Circle(game.width * 0.2606, game.height * 0.6998, game.width * 0.01),
            new Line(new Point(game.width * 0.2606, game.height * 0.6998), new Point(game.width * 0.1869, game.height * 0.7707)),
            new Circle(game.width * 0.1869, game.height * 0.7707, game.width * 0.01),
            new Line(new Point(game.width * 0.1869, game.height * 0.7707), new Point(game.width * 0.2190, game.height * 0.7918)),
            new Circle(game.width * 0.2190, game.height * 0.7918, game.width * 0.01),
            new Line(new Point(game.width * 0.2190, game.height * 0.7918), new Point(game.width * 0.3440, game.height * 0.7228)),
            new Circle(game.width * 0.3440, game.height * 0.7228, game.width * 0.01),
            new Line(new Point(game.width * 0.3440, game.height * 0.7228), new Point(game.width * 0.4316, game.height * 0.7099)),
            new Circle(game.width * 0.4316, game.height * 0.7099, game.width * 0.01),
            new Line(new Point(game.width * 0.4316, game.height * 0.7099), new Point(game.width * 0.4594, game.height * 0.7725)),
            new Circle(game.width * 0.4594, game.height * 0.7725, game.width * 0.01),
        ],
        [
            new Panel('navigationPanel', game.width * 0.8066, game.height * 0.7882, game.width * 0.06, { forwardId: 'forward', backwardId: 'backward', direction: 1 }, null),
            new Panel('navigationPanel', game.width * 0.1773, game.height * 0.800, game.width * 0.06, { forwardId: 'forward', backwardId: 'backward', direction: -1 }, null),
            new Panel('enterInterior', game.width * 0.4006, game.height * 0.5681, game.width * 0.08, false),
        ],
        0.035,
        0.035
    )

    game.player.objX = game.width * 0.5993
    game.player.objY = game.height * 0.738
    populateIsometricBlock(game)
    game.player.width = game.width * 0.035
    game.player.height = game.height * 0.035
    game.player.radius = game.height * 0.016
}