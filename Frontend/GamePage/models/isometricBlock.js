import { postEnemy } from "../../services/enemyService.js"
import { getAllEnemyType } from "../../services/enemyTypeService.js"
import { GetSprite } from "../utils/imageLoader.js"
import { Monster } from "./Monster.js"

export class IsometricBlock
{

    constructor(name,backGround,interior,entities=[],barriers=[],panels=[],entityWidth=0.15,entityHeight=0.15)
    {
        this.name=name
        this.interior=interior
        this.entities=entities
        this.barriers=barriers
        this.panels=panels
        this.backGround=backGround
        this.entityWidth=entityWidth
        this.entityHeight=entityHeight
        this.maxNumberOfMonsters=4
        this.monsterSpawnInterval=700
        this.timeoutReference=null
    }
    get numberOfMonsters()
        {
            return this.entities.filter(entity=>{return entity instanceof Monster}).length
        }
        
        async StartTimeOut(game)
        {
                if(game.currentBlockX==0 && game.currentBlockY==3
                    || game.currentBlockX==1 && game.currentBlockY==3
                    || game.currentBlockX==2 && game.currentBlockY==2
                )
            {               
            
            
            if(this.numberOfMonsters>=this.maxNumberOfMonsters)
            {
                return
            }
            let monsterType
            if(game.currentBlockX==0 && game.currentBlockY==3){monsterType=(await getAllEnemyType("enemy_name=Skeleton&level=1"))[0]}
            const sprite = new Image()
            sprite.src='assets/maincharacters/monsterSprite.gif'
            await sprite.decode()
            const callback = () =>{
            const newMonster = new Monster(undefined,monsterType.enemy_name,game,sprite,game.width*Math.random(),game.height*Math.random(),monsterType.HP,monsterType.attack,monsterType.level,2)
            newMonster.spriteWidth=130
            newMonster.spriteHeight=110
            this.entities.push(newMonster)
            postEnemy({
                objX:newMonster.objX/game.width,
                objY:newMonster.objY/game.height,
                blockX:game.currentBlockX,
                blockY:game.currentBlockY,
                HP:newMonster.HP,
                enemy_type_id:monsterType.enemy_type_id,
                isInterior:false
            })
            if(this.numberOfMonsters<this.maxNumberOfMonsters)
            {
                this.timeoutReference = setTimeout(callback,10000)
            }
        }
this.timeoutReference = setTimeout(callback,10000)
    }
            }
        }