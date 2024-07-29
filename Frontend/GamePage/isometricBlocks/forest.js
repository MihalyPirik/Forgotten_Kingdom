import { Circle } from '../models/Circle.js'
import { Line } from '../models/Line.js'
import { Panel } from '../models/Panel.js'
import { Point } from '../models/Point.js'
import { IsometricBlock } from '../models/isometricBlock.js'
import { GetIcon } from '../utils/imageLoader.js'
import { populateIsometricBlock } from '../utils/populateIsometricBlocks.js'
import { PanelView } from '../views/view.js'
const backGround = new Image()
backGround.src = "./assets/blocks/Forest.png"
export const Erdő = async (game) => {
    game.currentBlock = new IsometricBlock
        (
            // 0.32, 0.76
            'Erdő',
            backGround,
            null,
            [],
            [
                new Line(new Point(game.width * 0.4978, game.height * 0.8305), new Point(game.width * 0.7446, game.height * 0.6998)),
                new Circle(game.width * 0.7446, game.height * 0.6998, game.width * 0.01),
                new Line(new Point(game.width * 0.7446, game.height * 0.6998), new Point(game.width * 0.5854, game.height * 0.6758)),
                new Circle(game.width * 0.5854, game.height * 0.6758, game.width * 0.01),
                new Line(new Point(game.width * 0.5854, game.height * 0.6758), new Point(game.width * 0.5459, game.height * 0.64272)),
                new Circle(game.width * 0.5459, game.height * 0.64272, game.width * 0.01),
                new Line(new Point(game.width * 0.5459, game.height * 0.64272), new Point(game.width * 0.5192, game.height * 0.4033)),
                new Circle(game.width * 0.5192, game.height * 0.4033, game.width * 0.01),
                new Line(new Point(game.width * 0.5192, game.height * 0.4033), new Point(game.width * 0.3824, game.height * 0.4023)),
                new Circle(game.width * 0.3824, game.height * 0.4023, game.width * 0.01),
                new Line(new Point(game.width * 0.3824, game.height * 0.4023), new Point(game.width * 0.3664, game.height * 0.4806)),
                new Circle(game.width * 0.3664, game.height * 0.4806, game.width * 0.01),
                new Line(new Point(game.width * 0.3664, game.height * 0.48063), new Point(game.width * 0.41132, game.height * 0.5948)),
                new Circle(game.width * 0.41132, game.height * 0.5948, game.width * 0.01),
                new Line(new Point(game.width * 0.41132, game.height * 0.5948), new Point(game.width * 0.3803, game.height * 0.6675)),
                new Circle(game.width * 0.3803, game.height * 0.6675, game.width * 0.01),
                new Line(new Point(game.width * 0.3803, game.height * 0.6675), new Point(game.width * 0.2532, game.height * 0.7081)),
                new Circle(game.width * 0.2532, game.height * 0.7081, game.width * 0.01),
                new Line(new Point(game.width * 0.2532, game.height * 0.7081), new Point(game.width * 0.4978, game.height * 0.8305)),
                new Circle(game.width * 0.4978, game.height * 0.8305, game.width * 0.01),


                new Circle(game.width * 0.382, game.height * 0.578, game.width * 0.032),
                new Circle(game.width * 0.33226, game.height * 0.4303, game.width * 0.052),
                new Circle(game.width * 0.4455, game.height * 0.3370, game.width * 0.09),
                new Circle(game.width * 0.542735, game.height * 0.3985, game.width * 0.05),
                new Circle(game.width * 0.706196581, game.height * 0.64754, game.width * 0.06),
            ],
            [
                new Panel('Action', game.width * 0.3376, game.height * 0.4290, game.width * 0.078, false, { action: "Wood" }),
                new Panel('navigationPanel', game.width * 0.2873, game.height * 0.7707, game.width * 0.08, { forwardId: 'forward', backwardId: 'backward', direction: -1 }, null),
                new Panel('navigationPanel', game.width * 0.7158, game.height * 0.7872, game.width * 0.1, { forwardId: 'forward', backwardId: 'backward', direction: 1 }, null)
            ],
            0.125,
            0.125
        )
    game.player.objX = game.width * 0.4914
    game.player.objY = game.height * 0.7612
    populateIsometricBlock(game)
    game.player.width = game.width * 0.1
    game.player.height = game.height * 0.1
    game.player.radius = game.height * 0.023
}