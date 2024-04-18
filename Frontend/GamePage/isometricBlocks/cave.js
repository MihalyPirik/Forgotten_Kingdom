import { Circle } from "../models/Circle.js";
import { Line } from "../models/Line.js";
import { Panel } from "../models/Panel.js";
import { Point } from "../models/Point.js";
import { IsometricBlock } from "../models/isometricBlock.js";
import { GetIcon } from "../utils/imageLoader.js";
import { populateIsometricBlock } from "../utils/populateIsometricBlocks.js";

const backGround = new Image();
backGround.src = "./assets/blocks/Mine.png";

const inCave = new Image();
inCave.src = "./assets/blocks/inMine.png";
const CaveInterior = (game) => {
  game.currentBlock = new IsometricBlock(
    "Bánya",
    inCave,
    null,
    [],
    [
      new Line(new Point(game.width * 0.2008, game.height * 0.7846), new Point(game.width * 0.28418, game.height * 0.6325)),
      new Circle(game.width * 0.28418, game.height * 0.6325, game.width * 0.01),

      new Line(new Point(game.width * 0.28418, game.height * 0.6325), new Point(game.width * 0.3493, game.height * 0.6045)),
      new Circle(game.width * 0.3493, game.height * 0.6045, game.width * 0.01),

      new Line(new Point(game.width * 0.3493, game.height * 0.6045), new Point(game.width * 0.5961, game.height * 0.7111)),
      new Circle(game.width * 0.5961, game.height * 0.7111, game.width * 0.01),

      new Line(new Point(game.width * 0.5961, game.height * 0.7111), new Point(game.width * 0.74358, game.height * 0.3995)),
      new Circle(game.width * 0.74358, game.height * 0.3995, game.width * 0.01),

      new Line(new Point(game.width * 0.74358, game.height * 0.3995), new Point(game.width * 0.6794, game.height * 0.370600)),
      new Circle(game.width * 0.6794, game.height * 0.370600, game.width * 0.01),

      new Line(new Point(game.width * 0.6794, game.height * 0.370600), new Point(game.width * 0.5544, game.height * 0.61283)),
      new Circle(game.width * 0.5544, game.height * 0.61283, game.width * 0.01),

      new Line(new Point(game.width * 0.55448, game.height * 0.61283), new Point(game.width * 0.36431, game.height * 0.5331)),
      new Circle(game.width * 0.36431, game.height * 0.5331, game.width * 0.01),

      new Line(new Point(game.width * 0.36431, game.height * 0.5331), new Point(game.width * 0.28418, game.height * 0.5817)),
      new Circle(game.width * 0.28418, game.height * 0.5817, game.width * 0.01),

      new Line(new Point(game.width * 0.28418, game.height * 0.5817), new Point(game.width * 0.2051, game.height * 0.4523)),
      new Circle(game.width * 0.2051, game.height * 0.4523, game.width * 0.01),

      new Line(new Point(game.width * 0.2051, game.height * 0.4523), new Point(game.width * 0.1506, game.height * 0.4875)),
      new Circle(game.width * 0.1506, game.height * 0.4875, game.width * 0.01),

      new Line(new Point(game.width * 0.1506, game.height * 0.4875), new Point(game.width * 0.2211, game.height * 0.62422)),
      new Circle(game.width * 0.220085, game.height * 0.6242, game.width * 0.01),

      new Line(new Point(game.width * 0.2211, game.height * 0.62422), new Point(game.width * 0.1388, game.height * 0.7536)),
      new Circle(game.width * 0.1388, game.height * 0.7536, game.width * 0.01),

      new Line(new Point(game.width * 0.1388, game.height * 0.7536), new Point(game.width * 0.2008, game.height * 0.7846)),
      new Circle(game.width * 0.2008, game.height * 0.7846, game.width * 0.01),
    ],
    [
      new Panel(
        "leaveInterior",
        game.width * 0.16,
        game.height * 0.76,
        game.width * 0.05,
        false
      ),
      new Panel(
        "Action",
        game.width * 0.71,
        game.height * 0.41,
        game.width * 0.03,
        false,
        { action: "Stone" }
      ),
      new Panel(
        "Action",
        game.width * 0.19,
        game.height * 0.48,
        game.width * 0.03,
        false,
        { action: "Coal" }
      ),
      new Panel(
        "Action",
        game.width * 0.5833,
        game.height * 0.6752,
        game.width * 0.03,
        false,
        { action: "Iron" }
      ),
    ],
    0.08,
    0.08
  );
  game.player.objX = game.width * 0.411324
  game.player.objY = game.height *0.602459016
  populateIsometricBlock(game, true);
  game.player.width = game.width * 0.08
  game.player.height = game.height * 0.08
  game.player.radius = game.height * 0.04

  return game.currentBlock;
};
export const Bánya = async (game) => {
  game.currentBlock = new IsometricBlock(
    "Bánya",
    backGround,
    CaveInterior,
    [],
    [
      new Line(new Point(game.width * 0.5053, game.height * 0.925), new Point(game.width * 0.7510, game.height * 0.7983)),
      new Circle(game.width * 0.7510, game.height * 0.7983, game.width * 0.01),
      new Line(new Point(game.width * 0.7510, game.height * 0.7983), new Point(game.width * 0.5747, game.height * 0.7430)),
      new Circle(game.width * 0.5747, game.height * 0.7430, game.width * 0.01),
      new Line(new Point(game.width * 0.5747, game.height * 0.7430), new Point(game.width * 0.5, game.height * 0.70626)),
      new Circle(game.width * 0.5, game.height * 0.70626, game.width * 0.01),
      new Line(new Point(game.width * 0.5, game.height * 0.70626), new Point(game.width * 0.5512, game.height * 0.6270)),
      new Circle(game.width * 0.5512, game.height * 0.6270, game.width * 0.01),
      new Line(new Point(game.width * 0.5512, game.height * 0.6270), new Point(game.width * 0.4551, game.height * 0.62154)),
      new Circle(game.width * 0.4551, game.height * 0.62154, game.width * 0.01),
      new Line(new Point(game.width * 0.4551, game.height * 0.6215), new Point(game.width * 0.3215, game.height * 0.73020)),
      new Circle(game.width * 0.3215, game.height * 0.73020, game.width * 0.01),
      new Line(new Point(game.width * 0.3215, game.height * 0.73020), new Point(game.width * 0.2232, game.height * 0.7891)),
      new Circle(game.width * 0.2232, game.height * 0.7891, game.width * 0.01),
      new Line(new Point(game.width * 0.2232, game.height * 0.7891), new Point(game.width * 0.5053, game.height * 0.925)),
      new Circle(game.width * 0.5053, game.height * 0.925, game.width * 0.01),
      new Circle(game.width * 0.5053, game.height * 0.5791, game.width * 0.08),
    ],
    [
      new Panel(
        "navigationPanel",
        game.width * 0.63,
        game.height * 0.85,
        game.width * 0.05,
        { forwardId: "forward", backwardId: "backward", direction: 1 },
        null
      ),
      new Panel(
        "navigationPanel",
        game.width * 0.37,
        game.height * 0.85,
        game.width * 0.05,
        { forwardId: "forward", backwardId: "backward", direction: -1 },
        null
      ),
      new Panel(
        "enterInterior",
        game.width * 0.5053,
        game.height * 0.5791,
        game.width * 0.1,
        false
      ),
    ],
    0.13,
    0.13
  );
  game.player.objX = game.width * 0.50106
  game.player.objY = game.height * 0.8493
  populateIsometricBlock(game);
  game.player.width = game.width * 0.13
  game.player.height = game.height * 0.13
  game.player.radius = game.height * 0.064
};
