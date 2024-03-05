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
  return new Point(player.objX,player.objY)
}


static MoveMonster(monsterInstance)
{
  if(monsterInstance instanceof Monster && monsterInstance.NoticePlayer()){


    const previousX=monsterInstance.objX
    const previousY=monsterInstance.objY
    
    const dx=monsterInstance.game.player.objX-monsterInstance.objX
    const dy=monsterInstance.game.player.objY-monsterInstance.objY
    const distance=Math.hypot(dx,dy)
    const unitX = dx / distance
        const unitY = dy / distance
        const newX=monsterInstance.objX+monsterInstance.speed*unitX
        const newY=monsterInstance.objY+monsterInstance.speed*unitY
        const dx1=newX-previousX
        const dy2=newY-previousY
        const angle=Math.atan2(dx1,dy2)
        SpriteController.MoveSprite(monsterInstance,angle)
        return new Point(newX,newY)

}
return new Point(monsterInstance.objX,monsterInstance.objY)
}


}