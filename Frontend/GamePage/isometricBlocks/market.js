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

const backGround = new Image()
backGround.src = "./assets/blocks/Market.png"

export const Piac = async (game) => {
    game.currentBlock = new IsometricBlock
        (
            'Piac',
            backGround,
            null,
            [

            ],
            [
                new Line(new Point(game.width * 0.1549, game.height * 0.7960), new Point(game.width * 0.3440, game.height * 0.6563)),
                new Circle(game.width * 0.34402, game.height * 0.6563, game.width * 0.01),

                new Line(new Point(game.width * 0.3440, game.height * 0.6563), new Point(game.width * 0.3023, game.height * 0.5755)),
                new Circle(game.width * 0.3023, game.height * 0.5755, game.width * 0.01),

                new Line(new Point(game.width * 0.3023, game.height * 0.5755), new Point(game.width * 0.1709, game.height * 0.5279)),
                new Circle(game.width * 0.1709, game.height * 0.5279, game.width * 0.01),

                new Line(new Point(game.width * 0.1709, game.height * 0.5279), new Point(game.width * 0.2564, game.height * 0.494)),
                new Circle(game.width * 0.2564, game.height * 0.494, game.width * 0.01),

                new Line(new Point(game.width * 0.2564, game.height * 0.494), new Point(game.width * 0.253, game.height * 0.3985)),
                new Circle(game.width * 0.253, game.height * 0.3985, game.width * 0.01),

                new Line(new Point(game.width * 0.253, game.height * 0.3985), new Point(game.width * 0.3643, game.height * 0.3643)),
                new Circle(game.width * 0.3643, game.height * 0.3643, game.width * 0.01),

                new Line(new Point(game.width * 0.3643, game.height * 0.3643), new Point(game.width * 0.3771, game.height * 0.3364)),
                new Circle(game.width * 0.3771, game.height * 0.3364, game.width * 0.01),

                new Line(new Point(game.width * 0.3771, game.height * 0.3364), new Point(game.width * 0.4636, game.height * 0.3022)),
                new Circle(game.width * 0.4636, game.height * 0.3022, game.width * 0.01),

                new Line(new Point(game.width * 0.4636, game.height * 0.3022), new Point(game.width * 0.4722, game.height * 0.2298)),
                new Circle(game.width * 0.4722, game.height * 0.2298, game.width * 0.01),

                new Line(new Point(game.width * 0.4722, game.height * 0.2298), new Point(game.width * 0.5448, game.height * 0.23706)),
                new Circle(game.width * 0.5448, game.height * 0.23706, game.width * 0.01),

                new Line(new Point(game.width * 0.5448, game.height * 0.23706), new Point(game.width * 0.55021, game.height * 0.3209)),
                new Circle(game.width * 0.55021, game.height * 0.3209, game.width * 0.01),

                new Line(new Point(game.width * 0.55021, game.height * 0.3209), new Point(game.width * 0.6655, game.height * 0.3260)),
                new Circle(game.width * 0.6655, game.height * 0.3260, game.width * 0.01),

                new Line(new Point(game.width * 0.6655, game.height * 0.3260), new Point(game.width * 0.7713, game.height * 0.39544)),
                new Circle(game.width * 0.7713, game.height * 0.39544, game.width * 0.01),

                new Line(new Point(game.width * 0.7713, game.height * 0.39544), new Point(game.width * 0.7478, game.height * 0.4399)),
                new Circle(game.width * 0.7478, game.height * 0.4399, game.width * 0.01),

                new Line(new Point(game.width * 0.7478, game.height * 0.4399), new Point(game.width * 0.82371, game.height * 0.5051)),
                new Circle(game.width * 0.82371, game.height * 0.5051, game.width * 0.01),

                new Line(new Point(game.width * 0.82371, game.height * 0.5051), new Point(game.width * 0.75, game.height * 0.55797)),
                new Circle(game.width * 0.75, game.height * 0.55797, game.width * 0.01),

                new Line(new Point(game.width * 0.75, game.height * 0.55797), new Point(game.width * 0.70512, game.height * 0.6221)),
                new Circle(game.width * 0.70512, game.height * 0.6221, game.width * 0.01),

                new Line(new Point(game.width * 0.70512, game.height * 0.6221), new Point(game.width * 0.91132, game.height * 0.7515)),
                new Circle(game.width * 0.91132, game.height * 0.7515, game.width * 0.01),

                new Line(new Point(game.width * 0.91132, game.height * 0.7515), new Point(game.width * 0.8824, game.height * 0.7867)),
                new Circle(game.width * 0.8824, game.height * 0.7867, game.width * 0.01),

                new Line(new Point(game.width * 0.8824, game.height * 0.7867), new Point(game.width * 0.6655, game.height * 0.64803)),
                new Circle(game.width * 0.6655, game.height * 0.64803, game.width * 0.01),

                new Line(new Point(game.width * 0.6655, game.height * 0.64803), new Point(game.width * 0.6132, game.height * 0.7122)),
                new Circle(game.width * 0.6132, game.height * 0.7122, game.width * 0.01),

                new Line(new Point(game.width * 0.6132, game.height * 0.7122), new Point(game.width * 0.6260, game.height * 0.7784)),
                new Circle(game.width * 0.6260, game.height * 0.7784, game.width * 0.01),

                new Line(new Point(game.width * 0.6260, game.height * 0.7784), new Point(game.width * 0.5726, game.height * 0.7898)),
                new Circle(game.width * 0.5726, game.height * 0.7898, game.width * 0.01),

                new Line(new Point(game.width * 0.5726, game.height * 0.7898), new Point(game.width * 0.5213, game.height * 0.6915)),
                new Circle(game.width * 0.5213, game.height * 0.6915, game.width * 0.01),

                new Line(new Point(game.width * 0.5213, game.height * 0.6915), new Point(game.width * 0.40277, game.height * 0.6552)),
                new Circle(game.width * 0.40277, game.height * 0.6552, game.width * 0.01),

                new Line(new Point(game.width * 0.40277, game.height * 0.6552), new Point(game.width * 0.3685, game.height * 0.6997)),
                new Circle(game.width * 0.3685, game.height * 0.6997, game.width * 0.01),

                new Line(new Point(game.width * 0.3685, game.height * 0.6997), new Point(game.width * 0.2061, game.height * 0.8260)),
                new Circle(game.width * 0.2061, game.height * 0.8260, game.width * 0.01),

                new Line(new Point(game.width * 0.2061, game.height * 0.8260), new Point(game.width * 0.1549, game.height * 0.7960)),
                new Circle(game.width * 0.1549, game.height * 0.7960, game.width * 0.01),

                //szökőkút körül
                new Line(new Point(game.width * 0.50641, game.height * 0.33606), new Point(game.width * 0.41132, game.height * 0.41495)),
                new Circle(game.width * 0.41132, game.height * 0.41495, game.width * 0.01),

                new Line(new Point(game.width * 0.41132, game.height * 0.41495), new Point(game.width * 0.36324, game.height * 0.47848)),
                new Circle(game.width * 0.36324, game.height * 0.47848, game.width * 0.01),

                new Line(new Point(game.width * 0.36324, game.height * 0.47848), new Point(game.width * 0.36324, game.height * 0.55532)),
                new Circle(game.width * 0.36324, game.height * 0.55532, game.width * 0.01),

                new Line(new Point(game.width * 0.36324, game.height * 0.55532), new Point(game.width * 0.50961, game.height * 0.61168)),
                new Circle(game.width * 0.50961, game.height * 0.61168, game.width * 0.01),

                new Line(new Point(game.width * 0.50961, game.height * 0.61168), new Point(game.width * 0.6367, game.height * 0.56147)),
                new Circle(game.width * 0.6367, game.height * 0.56147, game.width * 0.01),

                new Line(new Point(game.width * 0.6367, game.height * 0.5614), new Point(game.width * 0.643162, game.height * 0.4651)),
                new Circle(game.width * 0.643162, game.height * 0.4651, game.width * 0.01),

                new Line(new Point(game.width * 0.50961, game.height * 0.61168), new Point(game.width * 0.6367, game.height * 0.56147)),
                new Circle(game.width * 0.6367, game.height * 0.56147, game.width * 0.01),

                new Line(new Point(game.width * 0.6410, game.height * 0.4651), new Point(game.width * 0.58333, game.height * 0.4067621)),
                new Circle(game.width * 0.58333, game.height * 0.406762, game.width * 0.01),

                new Line(new Point(game.width * 0.58333, game.height * 0.40676), new Point(game.width * 0.50641, game.height * 0.33606)),
                new Circle(game.width * 0.50641, game.height * 0.33606, game.width * 0.01),

                new Circle(game.width * 0.6004273, game.height * 0.79815573, game.width * 0.03),
                new Circle(game.width * 0.63034, game.height * 0.7141, game.width * 0.03),
                new Circle(game.width * 0.5737, game.height * 0.2766, game.width * 0.04),
                new Circle(game.width * 0.6089, game.height * 0.2848, game.width * 0.055),
                new Circle(game.width * 0.5074, game.height * 0.19569, game.width * 0.05),
                new Circle(game.width * 0.42521, game.height * 0.255122, game.width * 0.05),
                new Circle(game.width * 0.25427, game.height * 0.364, game.width * 0.05),
                new Circle(game.width * 0.20833, game.height * 0.4518, game.width * 0.055),
                new Circle(game.width * 0.415, game.height * 0.6721, game.width * 0.02),
                new Circle(game.width * 0.3878, game.height * 0.516391, game.width * 0.04),
                new Circle(game.width * 0.58333, game.height * 0.5071, game.width * 0.067),
            ],
            [
                new Panel('navigationPanel', 0.9273 * game.width, 0.7877 * game.height, game.width * 0.07, { forwardId: 'forward', backwardId: 'backward', direction: 1 }, game),
                new Panel('navigationPanel', 0.14743 * game.width, 0.8426 * game.height, game.width * 0.08, { forwardId: 'forward', backwardId: 'backward', direction: -1 }, game),
                new Panel('shop', game.width * 0.5608, game.height * 0.54405, game.width * 0.08, false)
            ],
            0.06,
            0.06
        )
    game.player.objX = game.width * 0.5715
    game.player.objY = game.height * 0.669
    populateIsometricBlock(game)
    game.player.width = game.width * 0.06
    game.player.height = game.height * 0.06
    game.player.radius = game.height * 0.014
}