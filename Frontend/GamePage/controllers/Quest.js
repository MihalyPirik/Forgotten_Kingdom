import { putQuest } from "../../services/questService.js"
import { Monster } from "../models/Monster.js"

/**
 * 
 * @param {number} blockX 
 * @param {number} blockY 
 * @param {Array<object>} questList 
 */
export const ExploringQuests=(blockX,blockY,questList)=>
{
    const completedQuest = questList.find((element)=>{
        if(element.Quest.category!="Exploring"){return false}
        return element.Quest.blockX==blockX && element.Quest.blockY==blockY
    })
    if(completedQuest!=undefined)
    {
        putQuest(completedQuest.quest_id,{is_completed:true})
        completedQuest.is_completed=true
    }
}
/**
 * 
 * @param {Monster} entity 
 * @param {Array} questList 
 */
export const KillerQuests=(entity,questList)=>{
const completedQuest = questList.find((element)=>{
    if(element.Quest.category!="Killer"){return false}
    return entity.name==element.Quest.EnemyType.enemy_name
})
if(completedQuest!=undefined)
    {
        putQuest(completedQuest.quest_id,{currentProgress:completedQuest.currentProgress++})
        completedQuest.currentProgress++
        if(completedQuest.currentProgress>=completedQuest.Quest.target_amount)
        {
putQuest(completedQuest.quest_id,{is_completed:true})
completedQuest.is_completed=true
        }
    }
}

export const CollectorQuests=(item,questList)=>{
    const completedQuest = questList.find((element)=>{
        if(element.Quest.category!="Collector"){return false}
        return item==element.Quest.Item.name
    })
    if(completedQuest!=undefined)
        {
            putQuest(completedQuest.quest_id,{currentProgress:completedQuest.currentProgress++})
            completedQuest.currentProgress++
            if(completedQuest.currentProgress>=completedQuest.Quest.target_amount)
            {
    putQuest(completedQuest.quest_id,{is_completed:true})
    completedQuest.is_completed=true
            }
        }
    }

    export const ConversationQuests=(resident,questList)=>{
        const completedQuest = questList.find((element)=>{
            if(element.Quest.category!="Conversation"){return false}
            return element.resident==resident.name
        })
        if(completedQuest!=undefined)
        {
        putQuest(completedQuest.quest_id,{currentProgress:completedQuest.currentProgress++})
        completedQuest.currentProgress++
        if(completedQuest.currentProgress>=completedQuest.Quest.target_amount)
            {
    putQuest(completedQuest.quest_id,{is_completed:true})
    completedQuest.is_completed=true
            }
        }
    }