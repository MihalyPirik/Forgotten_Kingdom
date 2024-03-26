import { getBlockEnemies } from "../../services/enemyService.js"
import { getQuests, putQuest } from "../../services/questService.js"
import { getBlockResidents, putResident } from "../../services/residentService.js"
import { NPC } from "../models/NPC.js"
import { GameView } from "../views/view.js"
import { GameController } from "./Game.js"

export class Story
{
    /**
     * @type {GameView}
     */
    static gameView
    /**
     * @type {GameController}
     */
    static gameController
    static conversationFinished = new Event('conversationFinished')
    static currentConversationPanel

    static ShowConversationPanel(conversationtexts,currentDialogueIndex)
    {
        const panel = document.createElement('div')
        panel.classList.add('conversationPanel')
        document.querySelector('body').append(panel)
        Story.currentConversationPanel = panel
        let index = 0
        const inter = setInterval(()=>{
            panel.innerHTML+=
            conversationtexts[currentDialogueIndex][index]
            index++
            if(index == conversationtexts[currentDialogueIndex].length){
                clearInterval(inter)
const button = document.createElement('button')
button.innerText = 'Következő'
panel.append(button)
                    dispatchEvent(Story.conversationFinished)

            }
        },conversationtexts[currentDialogueIndex].length/5)

    }
    static HideConversationPanel()
    {
        Story.currentConversationPanel.remove()
    }
    static async LoadFile(fileName)
    {
        let array = await (await fetch(`/Frontend/GamePage/assets/conversations/${fileName}`)).text()
        array = array.split('\n')
        return array
    }

    static async BasePlayConversation(filename,callback)
    {
        
        let index = 0
        Story.gameController.player.isInConversation = true
        
        const array = await Story.LoadFile(filename)
addEventListener('conversationFinished',()=>{
    Story.currentConversationPanel.querySelector('button').addEventListener('click',()=>{
        if(index == array.length-1)
        {
            Story.currentConversationPanel.querySelector('button').removeEventListener('click',Story)
            Story.currentConversationPanel.remove()
            callback instanceof Function?callback(index):null
            Story.gameController.player.isInConversation = false
            return
        }
        index++
        Story.HideConversationPanel()
        callback instanceof Function?callback(index):null
        Story.ShowConversationPanel(array,index)
    })
})
callback instanceof Function?callback(index):null
    Story.ShowConversationPanel(array,index)
    }
    static async First()
    {
        Story.BasePlayConversation("first.txt")
        const second = await getQuests('?is_mainstory=2')[0]
        console.log(second);
        putQuest((await getQuests('?is_mainstory=1'))[0].QuestType.quest_id,{is_completed:true})
        putQuest(second.QuestType.quest_id,{is_active:true})
        for (const entity of this.gameController.currentBlock.entities)
        {
            if(entity.quest.QuestType.is_mainstory==1)
            {
                console.log(entity.id);
                console.log(second.QuestType.quest_id);
                putResident(entity.id,{quest_id:second.QuestType.quest_id})
                break
            }
        }
    }
    static async Second()
    {
        Story.BasePlayConversation("second.txt",async(index)=>{
            const game = Story.gameController
            if(index==0){
                Story.MoveEntity(Story.gameController.player,Story.gameController.width*0.5,Story.gameController.height*0.5)
            }
if(index==3){
}
        })
    }
    static Third()
    {
        Story.BasePlayConversation("third.txt")
    }

    static MoveEntity(entity, x, y){
        Story.gameView.context.clearRect(entity.spriteX, entity.spriteY, entity.width, entity.height)
        entity.objX = x
        entity.objY = y
        Story.gameView.RenderEntity(entity)
    }
}