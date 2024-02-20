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
            return true
        }
    }
}