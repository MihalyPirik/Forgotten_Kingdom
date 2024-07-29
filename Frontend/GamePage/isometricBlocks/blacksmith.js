import { getAllEnemies } from "../../services/enemyService.js"
import { getAllResidents } from "../../services/residentService.js"
import { Circle } from "../models/Circle.js"
import { Line } from "../models/Line.js"
import { Monster } from "../models/Monster.js"
import { NPC } from "../models/NPC.js"
import { Panel } from "../models/Panel.js"
import { Point } from "../models/Point.js"
import { IsometricBlock } from "../models/isometricBlock.js"
import { GetIcon } from "../utils/imageLoader.js"
import { populateIsometricBlock } from "../utils/populateIsometricBlocks.js"

const backGround = new Image()
backGround.src = "./assets/blocks/Blacksmith.png"

const inBlacksmith = new Image()
inBlacksmith.src = './assets/blocks/inBlacksmith.png'

const blackSmithInterior = (game) => {

    game.currentBlock = new IsometricBlock(
        'Kovács',
        inBlacksmith,
        null,
        [],
        [
            new Line(new Point(game.width * 0.5021, game.height * 0.9161), new Point(game.width * 0.8301, game.height * 0.7287)),
            new Circle(game.width * 0.8301, game.height * 0.7287, game.width * 0.01),

            new Line(new Point(game.width * 0.8301, game.height * 0.7287), new Point(game.width * 0.3782, game.height * 0.5662)),
            new Circle(game.width * 0.3782, game.height * 0.5662, game.width * 0.01),

            new Line(new Point(game.width * 0.3782, game.height * 0.5662), new Point(game.width * 0.1485, game.height * 0.7142)),
            new Circle(game.width * 0.1485, game.height * 0.7142, game.width * 0.01),

            new Line(new Point(game.width * 0.1485, game.height * 0.71429), new Point(game.width * 0.5021, game.height * 0.9161)),
            new Circle(game.width * 0.5021, game.height * 0.9161, game.width * 0.01),
        ],
        [
            new Panel('leaveInterior', game.width * 0.6720, game.height * 0.850, game.width * 0.07, false)
        ],
        0.21,
        0.21

    )
    game.player.objX = game.width * 0.4967
    game.player.objY = game.height * 0.8288
    populateIsometricBlock(game, true)
    game.player.width = game.width * 0.18
    game.player.height = game.height * 0.18
    game.player.radius = game.height * 0.062

    return game.currentBlock
}

export const Kovács = async (game) => {
    game.currentBlock = new IsometricBlock(
        'Kovács',
        backGround,
        blackSmithInterior,
        [

        ],
        [
            new Line(new Point(game.width * 0.47649, game.height * 0.8996), new Point(game.width * 0.8824, game.height * 0.6795)),
            new Circle(game.width * 0.8824, game.height * 0.6795, game.width * 0.01),
            new Line(new Point(game.width * 0.8824, game.height * 0.6795), new Point(game.width * 0.7841, game.height * 0.6270)),
            new Circle(game.width * 0.7841, game.height * 0.6270, game.width * 0.01),
            new Line(new Point(game.width * 0.7841, game.height * 0.6270), new Point(game.width * 0.5245, game.height * 0.7872)),
            new Circle(game.width * 0.5245, game.height * 0.7872, game.width * 0.01),
            new Line(new Point(game.width * 0.5245, game.height * 0.7872), new Point(game.width * 0.3408, game.height * 0.7200)),
            new Circle(game.width * 0.3408, game.height * 0.7200, game.width * 0.01),
            new Line(new Point(game.width * 0.3408, game.height * 0.7200), new Point(game.width * 0.3910, game.height * 0.6620)),
            new Circle(game.width * 0.391, game.height * 0.6620, game.width * 0.01),
            new Line(new Point(game.width * 0.3910, game.height * 0.6620), new Point(game.width * 0.3408, game.height * 0.6353)),
            new Circle(game.width * 0.3408, game.height * 0.6353, game.width * 0.01),
            new Line(new Point(game.width * 0.3408, game.height * 0.6353), new Point(game.width * 0.2916, game.height * 0.699)),
            new Circle(game.width * 0.2916, game.height * 0.699, game.width * 0.01),
            new Line(new Point(game.width * 0.2916, game.height * 0.699), new Point(game.width * 0.2435, game.height * 0.6123)),
            new Circle(game.width * 0.2435, game.height * 0.6123, game.width * 0.01),
            new Line(new Point(game.width * 0.2435, game.height * 0.6123), new Point(game.width * 0.1346, game.height * 0.5709)),
            new Circle(game.width * 0.1346, game.height * 0.5709, game.width * 0.01),
            new Line(new Point(game.width * 0.1346, game.height * 0.5709), new Point(game.width * 0.0149, game.height * 0.6473)),
            new Circle(game.width * 0.0149, game.height * 0.6473, game.width * 0.01),
            new Line(new Point(game.width * 0.0149, game.height * 0.6473), new Point(game.width * 0.47649, game.height * 0.8996)),
            new Circle(game.width * 0.47649, game.height * 0.8996, game.width * 0.01),


            new Circle(game.width * 0.5170, game.height * 0.7510, game.width * 0.045),
        ],
        [
            new Panel('enterInterior', game.width * 0.3782, game.height * 0.633, game.width * 0.05, false),
            new Panel('navigationPanel', game.width * 0.7403, game.height * 0.7707, game.width * 0.05, { forwardId: 'forward', backwardId: 'backward', direction: 1 }, null),
            new Panel('navigationPanel', game.width * 0.2414, game.height * 0.79465, game.width * 0.05, { forwardId: 'forward', backwardId: 'backward', direction: -1 }, null)
        ]
    )
    game.player.objX = game.width * 0.4775
    game.player.objY = game.height * 0.8227
    populateIsometricBlock(game)
    game.player.width = game.width * 0.07
    game.player.height = game.height * 0.07
    game.player.radius = game.width * 0.033
}