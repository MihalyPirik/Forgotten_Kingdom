import { Entity } from '../models/Entity.js';
import { PanelView } from '../views/view.js';

export class PanelController {
  static SetNavigationPanelValues(direction, game) {
    let nextX = game.currentBlockX + 1;
    let nextY = game.currentBlockY + 1;
    let previousX = game.currentBlockX - 1;
    let previousY = game.currentBlockY - 1;

    if (direction == -1) {

      if (game.currentBlockY == 0) {
        previousY = null
      }

      if (game.currentBlockX == game.isometricBlocks.length - 1) {
        nextX = null
      }
      return [previousY, nextX]
    }
    if (direction == 1) {

      if (game.currentBlockX == 0) {
        previousX = null
      }
      if (game.currentBlockY == game.isometricBlocks[game.currentBlockX].length - 1) {
        nextY = null
      }
      return [nextY, previousX]
    }
  }

  static GetEntityOnMouse(e, enemies) {
    let found = false;
    for (const enemy of enemies) {
      if (e.offsetX > enemy.objX - enemy.radius
        &&
        e.offsetX < enemy.objX + enemy.radius
        &&
        e.offsetY > enemy.objY - enemy.radius
        &&
        e.offsetY < enemy.objY + enemy.radius
      ) {
        PanelView.ShowHighlight(enemy);
        found = true;
        break;
      }
    }
    if (!found) {
      PanelView.HideHighlightForAll();
    }
  }

}