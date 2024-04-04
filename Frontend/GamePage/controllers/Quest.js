import { putQuest } from "../../services/questService.js"
import { Monster } from "../models/Monster.js"
import { Story } from "./Story.js"

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
        completedQuest.currentProgress++
        putQuest(completedQuest.quest_id,{currentProgress:completedQuest.currentProgress})
        if(completedQuest.currentProgress>=completedQuest.Quest.target_amount)
        {
Story.StartConversation('during/'+completedQuest.quest_id,completedQuest)
        }
    }
}

export const KillerQuests=(entity,questList)=>{
const completedQuest = questList.find((element)=>{
    if(element.Quest.category!="Killer"){return false}
    return entity.name==element.Quest.EnemyType.enemy_name
})
if(completedQuest!=undefined)
    {
        completedQuest.currentProgress++
        putQuest(completedQuest.quest_id,{currentProgress:completedQuest.currentProgress})
        
        if(completedQuest.currentProgress>=completedQuest.Quest.target_amount)
        {
            Story.StartConversation('during/'+completedQuest.quest_id,completedQuest)
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
            completedQuest.currentProgress++
            putQuest(completedQuest.quest_id,{currentProgress:completedQuest.currentProgress})
            
            if(completedQuest.currentProgress>=completedQuest.Quest.target_amount)
            {
                Story.StartConversation('during/'+completedQuest.quest_id,completedQuest)
            }
        }
    }







    export const IsTargetResident=(resident,questList)=>
    {
        const completedQuest = questList.find((element)=>{
            if(element.Quest.category!="Conversation"){return false}
            return element.Quest.target_resident==resident.name
        })
        if(completedQuest!=undefined){return completedQuest}
        return false
    }
    export const ConversationQuests=(completedQuest)=>{
        completedQuest.currentProgress++
        putQuest(completedQuest.quest_id,{currentProgress:completedQuest.currentProgress})
    }