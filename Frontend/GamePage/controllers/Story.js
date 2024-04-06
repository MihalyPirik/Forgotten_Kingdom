import { getQuests, putQuest } from "../../services/questService.js"
import { getAllResidents, postResident, putResident } from "../../services/residentService.js"
import { NPC } from "../models/NPC.js"
import { GetSprite } from "../utils/imageLoader.js"
import { GameView, PanelView } from "../views/view.js"
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
    static async LoadFile(filePath)
    {
        
            const res = await fetch(`/Frontend/GamePage/assets/conversations/${filePath}.txt`)
            if(!res.ok)
            {
                throw new Error('Conversation does not exist!')
            }
            let array = await res.text()


  
        
        array = array.split('\n')
        return array
    }

    static async BasePlayConversation(filePath,callback)
    {
       
        let index = 0
           let array = await Story.LoadFile(filePath)

        Story.gameController.player.isInConversation = true
        
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




    static async StartConversation(filePath,completedQuest)
    {
        if(filePath.includes('after'))
{
    putQuest(completedQuest.quest_id,{is_completed:true})
    completedQuest.is_completed=true
    this.gameController.player.quests.splice(this.gameController.player.quests.indexOf(completedQuest),1)
    document.getElementById('quests').querySelector('#'+completedQuest.quest_id).remove()
}

if(filePath.includes('pre'))
{
    putQuest(completedQuest.quest_id,{is_active:true})
    completedQuest.is_active=true
    this.gameController.player.quests.push(completedQuest)
    document.getElementById('quests').append(PanelView.GenerateQuestCard(completedQuest,this.gameController.isometricBlocks))
}
        switch (completedQuest.Quest.is_mainstory) {
            case 1:
                await this.First(filePath,completedQuest)
                break;
            case 2:
                await this.Second(filePath,completedQuest)
                break;
            case 3:
                await this.Third(filePath,completedQuest);
                break;
            case 4:
                await this.Fourth(filePath,completedQuest)
                break;
            case 5:
                await this.Fifth(filePath,completedQuest)
                break;
            case 6:
                await this.Sixth(filePath,completedQuest)
                break;
            case 7:
                await this.Seventh(filePath,completedQuest)
                break;
            case 8:
                await this.Eight(filePath,completedQuest)
                break;
            case 9:
                await this.Ninth(filePath,completedQuest)
                break;
            default:
                await Story.BasePlayConversation(filePath);
        }

    }


    static async First(filePath,completedQuest)
    {
        Story.BasePlayConversation(filePath)

        if(filePath.includes("during"))
        {
            const secondmainQuest = (await getQuests('is_mainstory=2'))[0]
        completedQuest.is_completed=true
        document.getElementById('quests').append(PanelView.GenerateQuestCard(secondmainQuest,this.gameController.isometricBlocks))
        document.getElementById('quests').querySelector('#'+completedQuest.quest_id).remove()
        putResident(completedQuest.Resident.resident_id,{quest_id:secondmainQuest.quest_id})
        putQuest(completedQuest.quest_id,{is_completed:true})
        putQuest(secondmainQuest.quest_id,{is_active:true})
        this.gameController.player.quests.push(secondmainQuest)
        this.gameController.player.quests.splice(this.gameController.player.quests.indexOf(completedQuest),1)
        }
        

    }
    static async Second(filePath,completedQuest)
    {
        if(filePath.includes('after'))
        {
            const thirdMainQuest=(await getQuests('is_mainstory=3'))[0]
            await putResident(completedQuest.Resident.resident_id,{quest_id:thirdMainQuest.quest_id})
thirdMainQuest.Resident=completedQuest.Resident
            document.getElementById('quests').append(PanelView.GenerateQuestCard(thirdMainQuest,this.gameController.isometricBlocks))
putQuest(thirdMainQuest.quest_id,{is_active:true})
this.gameController.player.quests.push(thirdMainQuest)

        }
        Story.BasePlayConversation(filePath,async(index)=>{
            const game = Story.gameController
            if(index==0){
                Story.MoveEntity(Story.gameController.player,Story.gameController.width*0.5,Story.gameController.height*0.5)
            }
if(index==3){
const urlicSprite = await GetSprite('Ulric')

const dominikSprite = await GetSprite('Dominik')
    const ulric = new NPC(game,'Ulric',urlicSprite,game.width*0.32,game.height*0.64,'Kovács')
    const dominik = new NPC(game,'Dominik',dominikSprite,game.width*0.72,game.height*0.52,'Szörnyvadász')
    this.MoveEntity(dominik,dominik.objX,dominik.objY)
    this.MoveEntity(ulric,ulric.objX,ulric.objY)
postResident({
    objX:0.72,
    objY:0.52,
    blockX:1,
    blockY:1,
    resident_name:dominik.name,
    profession:dominik.profession
})
postResident({
    objX:0.32,
    objY:0.64,
    blockX:1,
    blockY:0,
    resident_name:ulric.name,
    profession:ulric.profession
})
}
        })
    }
    static async Third(filePath,completedQuest)
    {
        Story.BasePlayConversation("third.txt")
        const fourthMainQuest = (await getQuests('is_mainstory=4'))[0]

        const urlic = this.gameController.currentBlock.entities.find(resident=>{
            return resident.name=='Ulric'
        })
        putQuest(completedQuest.quest_id,{is_completed:true})
        this.gameController.player.quests.splice(this.gameController.player.quests.indexOf(completedQuest),1)
        document.getElementById('quests').querySelector('#'+completedQuest.quest_id).remove()
        putResident(completedQuest.Resident.resident_id,{quest_id:null})

        putResident(urlic.id,{quest_id:fourthMainQuest.quest_id})
        document.getElementById('quests').append(PanelView.GenerateQuestCard(fourthMainQuest,this.gameController.isometricBlocks))
        this.gameController.player.quests.push(fourthMainQuest)
putQuest(fourthMainQuest.quest_id,{is_active:true})
    }


    static async Fourth(filePath,completedQuest)
    {
Story.BasePlayConversation(filePath,(index=>{

}))
if(filePath.includes('after'))
{
    const fifthMainStory = (await getQuests('is_mainstory=5'))[0]
    putResident(completedQuest.Resident.resident_id,{quest_id:fifthMainStory.quest_id})

    putQuest(fifthMainStory.quest_id,{is_active:true})
fifthMainStory.is_active=true
      this.gameController.player.quests.push(fifthMainStory)
fifthMainStory.Resident=completedQuest.Resident
      document.getElementById('quests').append(PanelView.GenerateQuestCard(fifthMainStory,this.gameController.isometricBlocks))
}
    }
static async Fifth(filePath,completedQuest)
{
    
Story.BasePlayConversation(filePath)
if(filePath.includes('after'))
{
    const sixthMainStory = (await getQuests('is_mainstory=6'))[0]
    putResident(completedQuest.Resident.resident_id,{quest_id:sixthMainStory.quest_id})

    putQuest(sixthMainStory.quest_id,{is_active:true})
sixthMainStory.is_active=true
      this.gameController.player.quests.push(sixthMainStory)
sixthMainStory.Resident=completedQuest.Resident
      document.getElementById('quests').append(PanelView.GenerateQuestCard(sixthMainStory,this.gameController.isometricBlocks))
}
}
static async Sixth(filePath,completedQuest)
{
    Story.BasePlayConversation(filePath)
    if(filePath.includes('after'))
{
    const seventhMainStory = (await getQuests('is_mainstory=7'))[0]
    putResident(completedQuest.Resident.resident_id,{quest_id:seventhMainStory.quest_id})

    putQuest(seventhMainStory.quest_id,{is_active:true})
seventhMainStory.is_active=true
      this.gameController.player.quests.push(seventhMainStory)
seventhMainStory.Resident=completedQuest.Resident
      document.getElementById('quests').append(PanelView.GenerateQuestCard(seventhMainStory,this.gameController.isometricBlocks))
}
}

static async Seventh(filePath,completedQuest)
{
    Story.BasePlayConversation(filePath)
    if(filePath.includes('during'))
    {
        const eightMainQuest = (await getQuests('is_mainstory=8'))[0]
        putResident(completedQuest.Resident.resident_id,{quest_id:eightMainQuest.quest_id})
        putQuest(completedQuest.quest_id,{is_completed:true})
        putQuest(eightMainQuest.quest_id,{is_active:true})
        this.gameController.player.quests.splice(this.gameController.player.quests.indexOf(completedQuest),1)
        document.getElementById('quests').querySelector('#'+completedQuest.quest_id).remove()
        this.gameController.player.quests.push(eightMainQuest)
        document.getElementById('quests').append(PanelView.GenerateQuestCard(eightMainQuest,this.gameController.isometricBlocks))
    }
}

static async Eight(filePath,completedQuest)
{
    Story.BasePlayConversation(filePath)
    if(filePath.includes('after'))
    {
        const ninthMainStory = (await getQuests('is_mainstory=9'))[0]
    putResident(completedQuest.Resident.resident_id,{quest_id:ninthMainStory.quest_id})

    putQuest(ninthMainStory.quest_id,{is_active:true})
ninthMainStory.is_active=true
      this.gameController.player.quests.push(ninthMainStory)
ninthMainStory.Resident=completedQuest.Resident
      document.getElementById('quests').append(PanelView.GenerateQuestCard(ninthMainStory,this.gameController.isometricBlocks))
    }
}


static async Ninth(filePath,completedQuest)
{
    Story.BasePlayConversation(filePath)
    if(filePath.includes('during'))
    {
        console.log(completedQuest);
        const tenthMainStory = (await getQuests('is_mainstory=10'))[0]
        putResident(completedQuest.Resident.resident_id,{quest_id:tenthMainStory.quest_id})
        putQuest(completedQuest.quest_id,{is_completed:true})
        putQuest(tenthMainStory.quest_id,{is_active:true})
        this.gameController.player.quests.splice(this.gameController.player.quests.indexOf(completedQuest),1)
        document.getElementById('quests').querySelector('#'+completedQuest.quest_id).remove()
        this.gameController.player.quests.push(tenthMainStory)
        document.getElementById('quests').append(PanelView.GenerateQuestCard(tenthMainStory,this.gameController.isometricBlocks))
    }
}


    static MoveEntity(entity, x, y){
        Story.gameView.context.clearRect(entity.spriteX, entity.spriteY, entity.width, entity.height)
        entity.objX = x
        entity.objY = y
        Story.gameView.RenderEntity(entity)
    }
}