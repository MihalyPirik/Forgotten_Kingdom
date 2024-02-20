import {Monster} from '../models/Monster.js'
import { Player } from '../models/Player.js';
import { Point } from '../models/Point.js';
export class CombatController
{
    /**
     * 
     * @param {Monster} monsterInstance 
     * @param {Player} player 
     */
    static MonsterAttack(monsterInstance,player)
    {
        if(Math.abs(player.objX-monsterInstance.objX)<monsterInstance.attackRadius && Math.abs(player.objY-monsterInstance.objY)<monsterInstance.attackRadius)
        {
            const dx=player.objX-monsterInstance.objX
            const dy=player.objY-monsterInstance.objY
            const distance=Math.hypot(dx,dy)
            const unitX=dx/distance
            const unitY=dy/distance


            return new Point(player.objX+20*unitX,player.objY+20*unitY)

        }
    }
}