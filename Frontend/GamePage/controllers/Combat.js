import {Monster} from '../models/Monster.js'
import { Player } from '../models/Player.js';
import { Point } from '../models/Point.js';
export class CombatController
{

    static MonsterAttack(monsterInstance,player)
    {
        if(Math.abs(player.objX-monsterInstance.objX)<monsterInstance.attackRadius && Math.abs(player.objY-monsterInstance.objY)<monsterInstance.attackRadius
        && monsterInstance instanceof Monster)
        {
            if(monsterInstance.attack.timer>monsterInstance.attack.interval){
                monsterInstance.attack.timer=0
            return true
            }
            monsterInstance.attack.timer++
        }
    }
}