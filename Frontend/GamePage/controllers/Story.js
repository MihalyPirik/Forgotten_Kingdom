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
        this.currentConversationPanel = panel
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
                    dispatchEvent(this.conversationFinished)

            }
        },conversationtexts[currentDialogueIndex].length/5)

    }
    static HideConversationPanel()
    {
        this.currentConversationPanel.remove()
    }
    static async LoadFile(fileName)
    {
        let array = await (await fetch(`/Frontend/GamePage/assets/conversations/${fileName}`)).text()
        array = array.split('\n')
        return array
    }

    static async First()
    {
        let index = 0
        this.gameController.player.isInConversation = true
        const array = await this.LoadFile('first.txt')
addEventListener('conversationFinished',()=>{
    this.currentConversationPanel.querySelector('button').addEventListener('click',()=>{
        if(index == array.length-1)
        {
            this.currentConversationPanel.querySelector('button').removeEventListener('click',this)
            this.currentConversationPanel.remove()
            this.gameController.player.isInConversation = false
        }
        index++
        this.HideConversationPanel()
        this.ShowConversationPanel(array,index)
    })
})
    this.ShowConversationPanel(array,index)
    }
}