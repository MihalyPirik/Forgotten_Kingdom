import { Circle } from "../models/Circle.js"
import { Line } from "../models/Line.js"
import { Monster } from "../models/Monster.js"
import { Panel } from "../models/Panel.js"
import { Point } from "../models/Point.js"
import { IsometricBlock } from "../models/isometricBlock.js"
import { GetIcon } from "../utils/imageLoader.js"
import { populateIsometricBlock } from "../utils/populateIsometricBlocks.js"

const backGround = new Image()
backGround.src = "./assets/blocks/EnemyTwo.png"

const customSpriteURL = './assets/monsters/skeleton_sprite_sheet.png'

export const Csontvázak = async (game) => {
    game.currentBlock = new IsometricBlock(
        'Csontvázak',
        backGround,
        null,
        [],
        [
            new Line(new Point(game.width * 0.4850, game.height * 0.67397), new Point(game.width * 0.4476, game.height * 0.64699)),
            new Circle(game.width * 0.4476, game.height * 0.64699, game.width * 0.01),

            new Line(new Point(game.width * 0.4476, game.height * 0.646997), new Point(game.width * 0.4487, game.height * 0.5797)),
            new Circle(game.width * 0.4487, game.height * 0.5797, game.width * 0.01),

            new Line(new Point(game.width * 0.4487, game.height * 0.5797), new Point(game.width * 0.3493, game.height * 0.5320)),
            new Circle(game.width * 0.3493, game.height * 0.5320, game.width * 0.01),

            new Line(new Point(game.width * 0.3493, game.height * 0.5320), new Point(game.width * 0.4284, game.height * 0.4741)),
            new Circle(game.width * 0.4284, game.height * 0.4741, game.width * 0.01),

            new Line(new Point(game.width * 0.4284, game.height * 0.4741), new Point(game.width * 0.5544, game.height * 0.4968)),
            new Circle(game.width * 0.5544, game.height * 0.4968, game.width * 0.01),

            new Line(new Point(game.width * 0.5544, game.height * 0.4968), new Point(game.width * 0.6079, game.height * 0.4637)),
            new Circle(game.width * 0.6079, game.height * 0.4637, game.width * 0.01),

            new Line(new Point(game.width * 0.6079, game.height * 0.4637), new Point(game.width * 0.6549, game.height * 0.49585)),
            new Circle(game.width * 0.6549, game.height * 0.49585, game.width * 0.01),

            new Line(new Point(game.width * 0.6549, game.height * 0.4958), new Point(game.width * 0.6292, game.height * 0.5838)),
            new Circle(game.width * 0.6292, game.height * 0.5838, game.width * 0.01),

            new Line(new Point(game.width * 0.6292, game.height * 0.5838), new Point(game.width * 0.6420, game.height * 0.6149)),
            new Circle(game.width * 0.6420, game.height * 0.6149, game.width * 0.01),

            new Line(new Point(game.width * 0.6420, game.height * 0.6149), new Point(game.width * 0.5619, game.height * 0.66149)),
            new Circle(game.width * 0.5619, game.height * 0.66149, game.width * 0.01),

            new Line(new Point(game.width * 0.5619, game.height * 0.66149), new Point(game.width * 0.6378, game.height * 0.688405)),
            new Circle(game.width * 0.6378, game.height * 0.688405, game.width * 0.01),

            new Line(new Point(game.width * 0.6378, game.height * 0.688405), new Point(game.width * 0.95833, game.height * 0.48964)),
            new Circle(game.width * 0.95833, game.height * 0.48964, game.width * 0.01),

            new Line(new Point(game.width * 0.95833, game.height * 0.4896), new Point(game.width * 0.5192, game.height * 0.2194)),
            new Circle(game.width * 0.5192, game.height * 0.2194, game.width * 0.01),

            new Line(new Point(game.width * 0.5192, game.height * 0.2194), new Point(game.width * 0.08012, game.height * 0.5269)),
            new Circle(game.width * 0.08012, game.height * 0.5269, game.width * 0.01),

            new Line(new Point(game.width * 0.08012, game.height * 0.5269), new Point(game.width * 0.4636, game.height * 0.75465)),
            new Circle(game.width * 0.4636, game.height * 0.75465, game.width * 0.01),

            new Line(new Point(game.width * 0.4636, game.height * 0.75465), new Point(game.width * 0.4850, game.height * 0.67397)),
            new Circle(game.width * 0.4850, game.height * 0.67397, game.width * 0.01),

            new Circle(game.width * 0.4861, game.height * 0.736, game.width * 0.03),
            new Circle(game.width * 0.47435, game.height * 0.61065, game.width * 0.036),
            new Circle(game.width * 0.44444, game.height * 0.4948, game.width * 0.03),
            new Circle(game.width * 0.6314, game.height * 0.5071, game.width * 0.03),
            new Circle(game.width * 0.6143, game.height * 0.6045, game.width * 0.03),

        ],
        [
            new Panel('navigationPanel', game.width * 0.29, game.height * 0.64, game.width * 0.05, { forwardId: 'forward', backwardId: 'backward', direction: 1 }, null),
        ],
        0.08,
        0.08,
        customSpriteURL

    )
    game.player.objX = game.width * 0.3835
    game.player.objY = game.height * 0.6485
    populateIsometricBlock(game, false, customSpriteURL)
    game.player.width = game.width * 0.08
    game.player.height = game.height * 0.08
    game.player.radius = game.height * 0.015
}