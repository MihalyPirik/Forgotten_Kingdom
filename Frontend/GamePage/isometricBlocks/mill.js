import { Circle } from "../models/Circle.js"
import { Line } from "../models/Line.js"
import { Monster } from "../models/Monster.js"
import { Panel } from "../models/Panel.js"
import { Point } from "../models/Point.js"
import { IsometricBlock } from "../models/isometricBlock.js"
import { GetIcon } from "../utils/imageLoader.js"
import { populateIsometricBlock } from "../utils/populateIsometricBlocks.js"
const mill = new Image()
mill.src = './assets/blocks/Mill.png'

const inMill = new Image()
inMill.src = './assets/blocks/inMill.png'
const MillInterior = (game) => {
  game.currentBlock = new IsometricBlock(
    'Malom',
    inMill,
    null,
    [],
    [
      new Line(new Point(game.width * 0.5021, game.height * 0.9254), new Point(game.width * 0.77777, game.height * 0.78053)),
      new Circle(game.width * 0.77777, game.height * 0.78053, game.width * 0.01),

      new Line(new Point(game.width * 0.77777, game.height * 0.7805), new Point(game.width * 0.4914, game.height * 0.6211)),
      new Circle(game.width * 0.4914, game.height * 0.62111, game.width * 0.01),

      new Line(new Point(game.width * 0.4914, game.height * 0.6211), new Point(game.width * 0.1880, game.height * 0.757)),
      new Circle(game.width * 0.1880, game.height * 0.757, game.width * 0.01),

      new Line(new Point(game.width * 0.1880, game.height * 0.757), new Point(game.width * 0.5021, game.height * 0.9254)),
      new Circle(game.width * 0.5021, game.height * 0.9254, game.width * 0.01),
    ],
    [
      new Panel('leaveInterior', game.width * 0.411, game.height * 0.9068, game.width * 0.07, false)
    ]
  )
  game.player.objX = game.width *0.4978
  game.player.objY = game.height * 0.87397
  populateIsometricBlock(game, true)
  game.player.width = game.width * 0.16
  game.player.height = game.height * 0.16
  game.player.radius = game.height * 0.075
  return game.currentBlock
}


export const Malom = async (game) => {


  const navigationPanelX = new Panel('navigationPanel', 0.6976 * game.width, 0.8561 * game.height, game.width * 0.07, { forwardId: 'forward', backwardId: 'backward', direction: 1 }, game)
  const navigationPanelY = new Panel('navigationPanel', 0.2318 * game.width, 0.833 * game.height, game.width * 0.08, { forwardId: 'forward', backwardId: 'backward', direction: -1 }, game)

  game.currentBlock = new IsometricBlock(
    'Malom',
    mill,
    MillInterior,
    [
    ],
    [
      new Line(new Point(game.width * 0.49786, game.height * 0.9327), new Point(game.width * 0.7585, game.height * 0.7939)),
      new Circle(game.width * 0.7585, game.height * 0.7939, game.width * 0.01),
      new Line(new Point(game.width * 0.7585, game.height * 0.7939), new Point(game.width * 0.6132, game.height * 0.7225)),
      new Circle(game.width * 0.6132, game.height * 0.7225, game.width * 0.01),
      new Line(new Point(game.width * 0.6132, game.height * 0.7225), new Point(game.width * 0.5811, game.height * 0.7360)),
      new Circle(game.width * 0.5811, game.height * 0.7360, game.width * 0.01),
      new Line(new Point(game.width * 0.5811, game.height * 0.7360), new Point(game.width * 0.3728, game.height * 0.6563)),
      new Circle(game.width * 0.3728, game.height * 0.6563, game.width * 0.01),
      new Line(new Point(game.width * 0.3728, game.height * 0.6563), new Point(game.width * 0.375, game.height * 0.7225)),
      new Circle(game.width * 0.375, game.height * 0.7225, game.width * 0.01),
      new Line(new Point(game.width * 0.375, game.height * 0.7225), new Point(game.width * 0.2264, game.height * 0.7971)),
      new Circle(game.width * 0.2264, game.height * 0.7971, game.width * 0.01),
      new Line(new Point(game.width * 0.2264, game.height * 0.7971), new Point(game.width * 0.49786, game.height * 0.9327)),
      new Circle(game.width * 0.49786, game.height * 0.9327, game.width * 0.01),

      new Circle(game.width * 0.3386, game.height * 0.6844, game.width * 0.05),
    ],
    [
      navigationPanelX,
      navigationPanelY,
      new Panel('enterInterior', game.width * 0.36, game.height * 0.61, game.width * 0.12, false)
    ],
  )
  game.player.objX = game.width *0.4978
  game.player.objY = game.height * 0.87397
  populateIsometricBlock(game)
  game.player.width = game.width * 0.06
  game.player.height = game.height * 0.06
  game.player.radius = game.height * 0.028
}