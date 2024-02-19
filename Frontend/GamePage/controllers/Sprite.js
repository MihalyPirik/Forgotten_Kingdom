import { Point } from "../models/Point.js"

export class SpriteController
{
  /**
 * 
 * @param {Entity} entity
 */
static MoveSprite(entity,angle)
{
  // 2.35 - 0.78 - előre
  // 0.78 - -1.57 - jobbra
  // -1.57 - -2.35 - lefele
  // -2.35 - 2.35 - balra

  if (angle >= 0.78 && angle <=2.35) {entity.frameY = 2} // előre
  else if(angle>=2.35 || angle<=-2.35){entity.frameY=3} // jobbra
  else if(angle>=-2.35 && angle<=-1.25){entity.frameY=1} // balra
  else if(angle>=-1.57 && angle<=0.78){entity.frameY=0} // lefele



    if (entity.move.timer > entity.move.interval) {
      if (entity.frameX < 3) {
        entity.frameX += 1
      }
      else {
        entity.frameX = 0
      }
      entity.move.timer = 0
    }
    entity.move.timer++

}


  /**
   * 
   * @param {Player} player 
   */
  static MovePlayer=(player)=>
  {
      if (player.move.event) {
        

        let newX = player.objX
        let newY = player.objY
  
        if (player.move.event.key == 'd') {

            newX += player.speed
            if (player.move.timer > player.move.interval) {
              if (player.frameX < 5) {
                player.frameX += 1
              }
              else {
                player.frameX = 0
              }
              player.move.timer = 0
            }
            player.frameY = 6
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
            player.frameY = 7
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
            player.frameY = 5
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
            player.frameY = 4
        }
        player.move.timer++
        return new Point(newX,newY)
  }
}


}