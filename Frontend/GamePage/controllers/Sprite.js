import { Monster } from '../models/Monster.js';
import { Point } from '../models/Point.js';

export class SpriteController {
  /**
   * 
   * @param {Entity} entity
   */
  static MoveSprite(entity, angle) {
    // 0.78 - 2.35 - lefele
    // 2.35 - -2.35 - jobbra
    // -2.35 - -0.78 - felfele
    // -0.78 - 0.78 - balra

    if (entity.isAttack) {
      // Támadás
      if (angle >= 0.78 && angle <= 2.35) { // lefele támadás
        entity.frameY = 2;
        entity.frameX = entity.frameX % 6; // 0-5
      } else if (angle >= 2.35 || angle <= -2.35) { // balra támadás
        entity.frameY = 2;
        entity.frameX = 6 + (entity.frameX % 6); // 6-11
      } else if (angle >= -2.35 && angle <= -0.78) { // felfele támadás
        entity.frameY = 2;
        entity.frameX = 6 + (entity.frameX % 6); // 6-11
      } else if (angle >= -0.78 && angle <= 0.78) { // jobbra támadás
        entity.frameY = 2;
        entity.frameX = entity.frameX % 6; // 0-5
      }
    } else {
      // Mozgás
      if (angle >= 0.78 && angle <= 2.35) { // lefele mozgás
        entity.frameY = 0;
        entity.frameX = 6 + (entity.frameX % 6); // 6-11
      } else if (angle >= 2.35 || angle <= -2.35) { // jobbra mozgás
        entity.frameY = 1;
        entity.frameX = 6 + (entity.frameX % 6); // 6-11
      } else if (angle >= -2.35 && angle <= -0.78) { // felfele mozgás
        entity.frameY = 1;
        entity.frameX = entity.frameX % 6; // 0-5
      } else if (angle >= -0.78 && angle <= 0.78) { // balra mozgás
        entity.frameY = 0;
        entity.frameX = entity.frameX % 6; // 0-5
      }
    }

    if (entity.move.timer > entity.move.interval) {
      if (entity.frameX < 11) {
        entity.frameX += 1;
      } else {
        entity.frameX = 0;
      }
      entity.move.timer = 0;
    }
    entity.move.timer++;
  }



  static MovePlayer = (player) => {
    function ActionBase(frameY, isRightside) {

      if (player.move.timer > player.move.interval) {

        if (player.frameX < (isRightside ? 11 : 5)) {
          player.frameX += 1


        }
        else {
          player.frameX = isRightside ? 6 : 0
        }
        player.move.timer = 0
      }
      player.frameY = frameY
      player.move.timer++
    }
    if (player.isAction.is) {
      if (player.isAction.action == 'Stone'
        ||
        player.isAction.action == 'Iron'
        ||
        player.isAction.action == 'Coal') {
        if (player.frameX < 6) {
          ActionBase(5, false)
        }
        else {
          ActionBase(5, true)
        }
      }
      switch (player.isAction.action) {
        case 'Fish':
          ActionBase(7, false)
          break;
        case 'Wood':
          ActionBase(6, false)
          break;
        case 'Wheat':
          ActionBase(6, true)
        default:
          break;
      }
      return
    }

    if (!player.move.event) {

    }
    else {


      let newX = player.objX
      let newY = player.objY

      if (player.move.event.key == 'd') {

        newX += player.speed
        if (player.frameX < 6) { player.frameX = 6 }
        if (player.move.timer > player.move.interval) {
          if (player.frameX < 11) {
            player.frameX += 1
          }
          else {
            player.frameX = 6
          }
          player.move.timer = 0
        }
        player.frameY = 2
      }
      if (player.move.event.key == 'a') {
        newX -= player.speed
        if (player.move.timer > player.move.interval) {
          if (player.frameX < 5) {
            player.frameX += 1
          }
          else {
            player.frameX = 0
          }
          player.move.timer = 0
        }
        player.frameY = 2
      }
      if (player.move.event.key == 'w') {

        newY -= player.speed
        if (player.move.timer > player.move.interval) {
          if (player.frameX < 5) {
            player.frameX += 1
          }
          else {
            player.frameX = 0
          }
          player.move.timer = 0
        }
        player.frameY = 3
      }
      if (player.move.event.key == 's') {
        newY += player.speed
        if (player.move.timer > player.move.interval) {
          if (player.frameX < 5) {
            player.frameX += 1
          }
          else {
            player.frameX = 0
          }
          player.move.timer = 0
        }
        player.frameY = 2
      }


      if (player.move.event.key == 'ArrowRight') {

        newX += player.speed
        if (player.frameX < 6) { player.frameX = 6 }
        if (player.move.timer > player.move.interval) {
          if (player.frameX < 11) {
            player.frameX += 1
          }
          else {
            player.frameX = 6
          }
          player.move.timer = 0
        }
        player.frameY = 2
      }
      if (player.move.event.key == 'ArrowLeft') {
        newX -= player.speed
        if (player.move.timer > player.move.interval) {
          if (player.frameX < 5) {
            player.frameX += 1
          }
          else {
            player.frameX = 0
          }
          player.move.timer = 0
        }
        player.frameY = 2
      }
      if (player.move.event.key == 'ArrowDown') {
        newY += player.speed
        if (player.move.timer > player.move.interval) {
          if (player.frameX < 5) {
            player.frameX += 1
          }
          else {
            player.frameX = 0
          }
          player.move.timer = 0
        }
        player.frameY = 2
      }
      if (player.move.event.key == 'ArrowUp') {

        newY -= player.speed
        if (player.move.timer > player.move.interval) {
          if (player.frameX < 5) {
            player.frameX += 1
          }
          else {
            player.frameX = 0
          }
          player.move.timer = 0
        }
        player.frameY = 3
      }



      if (player.move.event.key == 'e') {
        newX += player.speed;
        newY -= player.speed;
        if (player.frameX < 6) { player.frameX = 6; }
        if (player.move.timer > player.move.interval) {
          if (player.frameX < 11) {
            player.frameX += 1;
          } else {
            player.frameX = 6;
          }
          player.move.timer = 0;
        }
        player.frameY = 3;
      }

      if (player.move.event.key == 'q') {
        newX -= player.speed;
        newY -= player.speed;
        if (player.move.timer > player.move.interval) {
          if (player.frameX < 5) {
            player.frameX += 1;
          } else {
            player.frameX = 0;
          }
          player.move.timer = 0;
        }
        player.frameY = 3;
      }

      if (player.move.event.key == 'í') {
        newX -= player.speed;
        newY += player.speed;
        if (player.move.timer > player.move.interval) {
          if (player.frameX < 5) {
            player.frameX += 1;
          } else {
            player.frameX = 0;
          }
          player.move.timer = 0;
        }
        player.frameY = 2;
      }

      if (player.move.event.key == 'c') {
        newX += player.speed;
        newY += player.speed;
        if (player.frameX < 6) { player.frameX = 6 }
        if (player.move.timer > player.move.interval) {
          if (player.frameX < 11) {
            player.frameX += 1
          }
          else {
            player.frameX = 6
          }
          player.move.timer = 0
        }
        player.frameY = 2
      }

      //---------animációk---------

      if (player.move.event.key == '1') {
        if (player.frameX < 6) { player.frameX = 6 }
        if (player.move.timer > player.move.interval) {
          if (player.frameX < 11) {
            player.frameX += 1
          }
          else {
            player.frameX = 6
          }
          player.move.timer = 0
        }
        player.frameY = 9
      }

      if (player.move.event.key == '2') {
        if (player.move.timer > player.move.interval) {
          if (player.frameX < 5) {
            player.frameX += 1
          }
          else {
            player.frameX = 0
          }
          player.move.timer = 0
        }
        player.frameY = 9
      }
      if (player.move.event.key == '3') {
        if (player.move.timer > player.move.interval) {
          if (player.frameX < 5) {
            player.frameX += 1
          }
          else {
            player.frameX = 0
          }
          player.move.timer = -5
        }
        player.frameY = 8
      }
      if (player.move.event.key == '4') {
        if (player.frameX < 6) { player.frameX = 6 }
        if (player.move.timer > player.move.interval) {
          if (player.frameX < 11) {
            player.frameX += 1
          }
          else {
            player.frameX = 6
          }
          player.move.timer = -5
        }
        player.frameY = 8
      }
      if (player.move.event.key == '5') {
        if (player.frameX < 6) { player.frameX = 6 }
        if (player.move.timer > player.move.interval) {
          if (player.frameX < 11) {
            player.frameX += 1
          }
          else {
            player.frameX = 6
          }
          player.move.timer = -7
        }
        player.frameY = 7
      }
      if (player.move.event.key == '6') {
        if (player.frameX < 6) { player.frameX = 6 }
        if (player.move.timer > player.move.interval) {
          if (player.frameX < 11) {
            player.frameX += 1
          }
          else {
            player.frameX = 6
          }
          player.move.timer = 2
        }
        player.frameY = 4
      }
      if (player.move.event.key == '7') {
        if (player.move.timer > player.move.interval) {
          if (player.frameX < 5) {
            player.frameX += 1
          }
          else {
            player.frameX = 0
          }
          player.move.timer = 2
        }
        player.frameY = 4
      }

      player.move.timer++
      return new Point(newX, newY)
    }
    return new Point(player.objX, player.objY)
  }


  static MoveMonster(monsterInstance) {
    if (monsterInstance instanceof Monster && monsterInstance.NoticePlayer()) {


      const previousX = monsterInstance.objX
      const previousY = monsterInstance.objY

      const dx = monsterInstance.game.player.objX - monsterInstance.objX
      const dy = monsterInstance.game.player.objY - monsterInstance.objY
      const distance = Math.hypot(dx, dy)
      const unitX = dx / distance
      const unitY = dy / distance
      const newX = monsterInstance.objX + monsterInstance.speed * unitX
      const newY = monsterInstance.objY + monsterInstance.speed * unitY
      const dx1 = newX - previousX
      const dy2 = newY - previousY
      const angle = Math.atan2(dx1, dy2)
      SpriteController.MoveSprite(monsterInstance, angle)
      return new Point(newX, newY)

    }
    return new Point(monsterInstance.objX, monsterInstance.objY)
  }
}