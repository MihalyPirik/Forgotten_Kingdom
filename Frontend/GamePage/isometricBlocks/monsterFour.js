import { Circle } from "../models/Circle.js"
import { Line } from "../models/Line.js"
import { Panel } from "../models/Panel.js"
import { Point } from "../models/Point.js"
import { IsometricBlock } from "../models/isometricBlock.js"
import { GetIcon } from "../utils/imageLoader.js"
import { populateIsometricBlock } from "../utils/populateIsometricBlocks.js"

const backGround = new Image()
backGround.src = './assets/blocks/Witch.png'
const inWitch = new Image()
inWitch.src = './assets/blocks/inWitch.png'


const inWitchBlock = (game) => {
    game.currentBlock = new IsometricBlock('Szörny4', inWitch, null,
        []
        ,
        [
            new Line(new Point(game.width * 0.4957, game.height * 0.9456), new Point(game.width * 0.82582, game.height * 0.7694)),
            new Circle(game.width * 0.8258, game.height * 0.7694, game.width * 0.01),

            new Line(new Point(game.width * 0.8258, game.height * 0.7694), new Point(game.width * 0.5096, game.height *0.5952)),
            new Circle(game.width * 0.5096, game.height * 0.5952, game.width * 0.01),

            new Line(new Point(game.width * 0.5096, game.height * 0.5952), new Point(game.width * 0.339, game.height * 0.6875)),
            new Circle(game.width * 0.339, game.height *0.6875, game.width * 0.01),

            new Line(new Point(game.width * 0.339, game.height *0.6875), new Point(game.width * 0.2831, game.height * 0.8391)),
            new Circle(game.width * 0.2831, game.height * 0.8391, game.width * 0.01),

            new Line(new Point(game.width * 0.2831, game.height *0.8391), new Point(game.width * 0.4957, game.height * 0.9456)),
            new Circle(game.width * 0.4957, game.height *0.9456, game.width * 0.01),
        ],
        [
            new Panel('leaveInterior', game.width * 0.6805, game.height * 0.8729, game.width * 0.07, false)
        ]
    )
    populateIsometricBlock(game, true)
    return game.currentBlock
}
export const Szörny4 = async (game) => {
    game.currentBlock = new IsometricBlock(
        'Szörny4',
        backGround,
        inWitchBlock,
        [],
        [
            new Line(new Point(game.width * 0.1378, game.height * 0.7494), new Point(game.width * 0.5202, game.height * 0.9275)),
            new Circle(game.width * 0.5202, game.height * 0.9275, game.width * 0.01),
            new Line(new Point(game.width * 0.5202, game.height * 0.9275), new Point(game.width * 0.8728, game.height * 0.7360)),
            new Circle(game.width * 0.8728, game.height * 0.7360, game.width * 0.01),
            new Line(new Point(game.width * 0.8728, game.height * 0.7360), new Point(game.width * 0.7863, game.height * 0.6966)),
            new Circle(game.width * 0.7863, game.height * 0.6966, game.width * 0.01),
            new Line(new Point(game.width * 0.7863, game.height * 0.6966), new Point(game.width * 0.7104, game.height * 0.7474)),
            new Circle(game.width * 0.7104, game.height * 0.7474, game.width * 0.01),
            new Line(new Point(game.width * 0.7104, game.height * 0.7474), new Point(game.width * 0.5897, game.height * 0.6987)),
            new Circle(game.width * 0.58974, game.height * 0.6987, game.width * 0.01),
            new Line(new Point(game.width * 0.5897, game.height * 0.6987), new Point(game.width * 0.41773, game.height * 0.7795)),
            new Circle(game.width * 0.41773, game.height * 0.7795, game.width * 0.01),
            new Line(new Point(game.width * 0.4177, game.height * 0.7795), new Point(game.width * 0.4401, game.height * 0.6790)),
            new Circle(game.width * 0.4401, game.height * 0.6790, game.width * 0.01),
            new Line(new Point(game.width * 0.4401, game.height * 0.6790), new Point(game.width * 0.3942, game.height * 0.6614)),
            new Circle(game.width * 0.3942, game.height * 0.6614, game.width * 0.01),
            new Line(new Point(game.width * 0.3942, game.height * 0.6614), new Point(game.width * 0.3557, game.height * 0.7412)),
            new Circle(game.width * 0.3557, game.height * 0.7412, game.width * 0.01),
            new Line(new Point(game.width * 0.3557, game.height * 0.7412), new Point(game.width * 0.2735, game.height * 0.6842)),
            new Circle(game.width * 0.2735, game.height * 0.6842, game.width * 0.01),
            new Line(new Point(game.width * 0.2735, game.height * 0.6842), new Point(game.width * 0.1378, game.height * 0.7494)),
            new Circle(game.width * 0.1378, game.height * 0.7494, game.width * 0.01),
        ],
        [
            // 0.45, 0.88
            new Panel('navigationPanel', game.width * 0.41452, game.height * 0.9099, game.width * 0.07, { forwardId: 'forward', backwardId: 'backward', direction: 1 }, await GetIcon('directionSigns')),
            new Panel('enterInterior', game.width * 0.43055, game.height * 0.6221, game.width * 0.1, false)
        ],
        0.2,
        0.2

    )
    populateIsometricBlock(game)
}