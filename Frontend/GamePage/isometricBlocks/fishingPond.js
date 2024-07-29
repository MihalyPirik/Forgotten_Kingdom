import { Line } from "../models/Line.js"
import { Point } from "../models/Point.js"
import { IsometricBlock } from "../models/isometricBlock.js"
import { Circle } from '../models/Circle.js'
import { Panel } from "../models/Panel.js"
import { NPC } from "../models/NPC.js"
import { populateIsometricBlock } from "../utils/populateIsometricBlocks.js"
import { GetIcon } from "../utils/imageLoader.js"

const backGround = new Image()
backGround.src = "./assets/blocks/Pond.png"

// start X: 0.524,  Y: 0.578
// end X:0.397 , Y: 0.495

const charSprite = new Image()
charSprite.src = './assets/maincharacters/char_a_p1_0bas_humn_v01.png'

const inPond = new Image()
inPond.src = './assets/blocks/inPond.png'
const PondInterior = (game) => {
    game.currentBlock = new IsometricBlock(
        'Horgásztó',
        inPond,
        null,
        [],
        [
            new Line(new Point(game.width * 0.49786, game.height * 0.9006), new Point(game.width * 0.7553, game.height * 0.7602)),
            new Circle(game.width * 0.7553, game.height * 0.7602, game.width * 0.01),
            new Line(new Point(game.width * 0.7553, game.height * 0.7602), new Point(game.width * 0.554487, game.height * 0.608)),
            new Circle(game.width * 0.554487, game.height * 0.608, game.width * 0.01),
            new Line(new Point(game.width * 0.554487, game.height * 0.608), new Point(game.width * 0.28632, game.height * 0.78790)),
            new Circle(game.width * 0.28632, game.height * 0.78790, game.width * 0.01),
            new Line(new Point(game.width * 0.28632, game.height * 0.78790), new Point(game.width * 0.49786, game.height * 0.9006)),
            new Circle(game.width * 0.49786, game.height * 0.9006, game.width * 0.01),
        ],
        [
            new Panel('leaveInterior', game.width * 0.6378, game.height * 0.851, game.width * 0.06, false)
        ]
    )
    game.player.objX = game.width * 0.54166
    game.player.objY = game.height * 0.737704
    populateIsometricBlock(game, true)
    game.player.width = game.width * 0.22
    game.player.height = game.height * 0.22
    game.player.radius = game.height * 0.105
    return game.currentBlock
}

export const Horgásztó = async (game) => {
    game.currentBlock = new IsometricBlock(
        'Horgásztó',
        backGround,
        PondInterior,
        [

        ],
        [
            new Circle(game.width * 0.4989, game.height * 0.870, game.width * 0.01),
            new Line(new Point(game.width * 0.4989, game.height * 0.870), new Point(game.width * 0.905, game.height * 0.6556)),
            new Circle(game.width * 0.905, game.height * 0.6556, game.width * 0.01),
            new Line(new Point(game.width * 0.905, game.height * 0.6556), new Point(game.width * 0.8386, game.height * 0.5994)),
            new Circle(game.width * 0.8621, game.height * 0.5966, game.width * 0.03),
            new Line(new Point(game.width * 0.8386, game.height * 0.5994), new Point(game.width * 0.8696, game.height * 0.4530)),
            new Circle(game.width * 0.8696, game.height * 0.4530, game.width * 0.01),
            new Line(new Point(game.width * 0.8696, game.height * 0.4530), new Point(game.width * 0.7649, game.height * 0.3913)),
            new Circle(game.width * 0.7649, game.height * 0.3913, game.width * 0.01),
            new Line(new Point(game.width * 0.7649, game.height * 0.3913), new Point(game.width * 0.6153, game.height * 0.3370)),
            new Circle(game.width * 0.6153, game.height * 0.3370, game.width * 0.01),
            new Line(new Point(game.width * 0.6153, game.height * 0.3370), new Point(game.width * 0.56944, game.height * 0.3139)),
            new Circle(game.width * 0.56944, game.height * 0.3139, game.width * 0.01),
            new Line(new Point(game.width * 0.5694, game.height * 0.3139), new Point(game.width * 0.4957, game.height * 0.3195)),
            new Circle(game.width * 0.4957, game.height * 0.3195, game.width * 0.01),
            new Line(new Point(game.width * 0.4957, game.height * 0.3195), new Point(game.width * 0.48504, game.height * 0.3609)),
            new Circle(game.width * 0.4850, game.height * 0.3609, game.width * 0.01),
            new Line(new Point(game.width * 0.48504, game.height * 0.3609), new Point(game.width * 0.4337, game.height * 0.3747)),
            new Circle(game.width * 0.4337, game.height * 0.3747, game.width * 0.01),
            new Line(new Point(game.width * 0.4337, game.height * 0.3747), new Point(game.width * 0.3440, game.height * 0.4143)),
            new Circle(game.width * 0.3440, game.height * 0.4143, game.width * 0.01),
            new Line(new Point(game.width * 0.3440, game.height * 0.4143), new Point(game.width * 0.2553, game.height * 0.3627)),
            new Circle(game.width * 0.2553, game.height * 0.3627, game.width * 0.01),
            new Line(new Point(game.width * 0.2553, game.height * 0.3627), new Point(game.width * 0.1752, game.height * 0.40423)),
            new Circle(game.width * 0.1752, game.height * 0.40423, game.width * 0.01),
            new Line(new Point(game.width * 0.1752, game.height * 0.40423), new Point(game.width * 0.1752, game.height * 0.5009)),
            new Circle(game.width * 0.1752, game.height * 0.5009, game.width * 0.01),
            new Line(new Point(game.width * 0.1752, game.height * 0.5009), new Point(game.width * 0.1602, game.height * 0.5561)),
            new Circle(game.width * 0.1602, game.height * 0.5561, game.width * 0.01),
            new Line(new Point(game.width * 0.1602, game.height * 0.5561), new Point(game.width * 0.03418, game.height * 0.626)),
            new Circle(game.width * 0.03418, game.height * 0.626, game.width * 0.01),
            new Line(new Point(game.width * 0.03418, game.height * 0.626), new Point(game.width * 0.34935, game.height * 0.7909)),
            new Circle(game.width * 0.3493, game.height * 0.7909, game.width * 0.01),
            new Line(new Point(game.width * 0.34935, game.height * 0.7909), new Point(game.width * 0.4476, game.height * 0.7799)),
            new Circle(game.width * 0.4476, game.height * 0.7799, game.width * 0.01),
            new Line(new Point(game.width * 0.4476, game.height * 0.7799), new Point(game.width * 0.4989, game.height * 0.870)),

            new Circle(game.width * 0.7168, game.height * 0.6924, game.width * 0.01),
            new Line(new Point(game.width * 0.7168, game.height * 0.6924), new Point(game.width * 0.7959, game.height * 0.6151)),
            new Circle(game.width * 0.7959, game.height * 0.6151, game.width * 0.01),
            new Line(new Point(game.width * 0.7959, game.height * 0.6151), new Point(game.width * 0.8205, game.height * 0.5561)),
            new Circle(game.width * 0.8205, game.height * 0.5561, game.width * 0.01),
            new Line(new Point(game.width * 0.8205, game.height * 0.5561), new Point(game.width * 0.7841, game.height * 0.4401)),
            new Circle(game.width * 0.7841, game.height * 0.4401, game.width * 0.01),
            new Line(new Point(game.width * 0.7841, game.height * 0.4401), new Point(game.width * 0.6196, game.height * 0.3674)),
            new Circle(game.width * 0.6196, game.height * 0.3674, game.width * 0.01),
            new Line(new Point(game.width * 0.6196, game.height * 0.3674), new Point(game.width * 0.5256, game.height * 0.3747)),
            new Circle(game.width * 0.5256, game.height * 0.3747, game.width * 0.01),
            new Line(new Point(game.width * 0.5256, game.height * 0.3747), new Point(game.width * 0.4059829, game.height * 0.454918)),
            new Circle(game.width * 0.4059829, game.height * 0.454918, game.width * 0.01),
            new Line(new Point(game.width * 0.4059829, game.height * 0.454918), new Point(game.width * 0.5245, game.height * 0.5331)),
            new Circle(game.width * 0.5245, game.height * 0.5331, game.width * 0.01),
            new Line(new Point(game.width * 0.5245, game.height * 0.5331), new Point(game.width * 0.5053, game.height * 0.54419)),
            new Circle(game.width * 0.5053, game.height * 0.54419, game.width * 0.01),
            new Line(new Point(game.width * 0.4967, game.height * 0.5469), new Point(game.width * 0.3461, game.height * 0.4585)),
            new Circle(game.width * 0.3461, game.height * 0.4585, game.width * 0.01),
            new Line(new Point(game.width * 0.3461, game.height * 0.4585), new Point(game.width * 0.2072, game.height * 0.5285)),
            new Circle(game.width * 0.2072, game.height * 0.5285, game.width * 0.01),
            new Line(new Point(game.width * 0.2072, game.height * 0.5285), new Point(game.width * 0.1858, game.height * 0.5865)),
            new Circle(game.width * 0.1858, game.height * 0.5865, game.width * 0.01),
            new Line(new Point(game.width * 0.1858, game.height * 0.5865), new Point(game.width * 0.3846, game.height * 0.7495)),
            new Circle(game.width * 0.3846, game.height * 0.7495, game.width * 0.01),
            new Line(new Point(game.width * 0.3846, game.height * 0.7495), new Point(game.width * 0.6549, game.height * 0.722)),
            new Circle(game.width * 0.6549, game.height * 0.722, game.width * 0.01),
            new Line(new Point(game.width * 0.6549, game.height * 0.722), new Point(game.width * 0.7168, game.height * 0.6924)),
            new Circle(game.width * 0.6549, game.height * 0.722, game.width * 0.01),

            new Circle(game.width * 0.4412, game.height * 0.34118, game.width * 0.04),
            new Circle(game.width * 0.464743, game.height * 0.32684, game.width * 0.04),
            new Circle(game.width * 0.5256, game.height * 0.27561, game.width * 0.049),
            new Circle(game.width * 0.435, game.height * 0.7991, game.width * 0.027),
            new Circle(game.width * 0.1346, game.height * 0.519, game.width * 0.044),
            new Circle(game.width * 0.12286, game.height * 0.449, game.width * 0.07),
            new Circle(game.width * 0.21794, game.height * 0.56557, game.width * 0.035),
            new Circle(game.width * 0.5726, game.height * 0.4016, game.width * 0.045),
            new Circle(game.width * 0.7916, game.height * 0.553278, game.width * 0.03),
            new Circle(game.width * 0.3952, game.height * 0.7131, game.width * 0.042),
        ],
        [
            new Panel('navigationPanel', 0.2446 * game.width, 0.7688 * game.height, game.width * 0.05, { forwardId: 'forward', backwardId: 'backward', direction: -1 }, game),
            new Panel('navigationPanel', 0.79700 * game.width, 0.72191 * game.height, game.width * 0.03, { forwardId: 'forward', backwardId: 'backward', direction: 1 }, game),
            new Panel('Action', game.width * 0.5096, game.height * 0.5423, game.width * 0.05, false, { action: "Fish" }),
            new Panel('enterInterior', game.width * 0.4091, game.height * 0.356, game.width * 0.05, false)
        ],
        0.045,
        0.045

    )
    game.player.objX = game.width * 0.24893
    game.player.objY = game.height * 0.4477
    populateIsometricBlock(game)
    game.player.width = game.width * 0.045
    game.player.height = game.height * 0.045
    game.player.radius = game.height * 0.01
}