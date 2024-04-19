import { postEnemy } from "../../services/enemyService.js"
import { getQuests, putQuest } from "../../services/questService.js"
import { getAllResidents, postResident, putResident } from "../../services/residentService.js"
import { Monster } from "../models/Monster.js"
import { NPC } from "../models/NPC.js"
import { GetPortrait, GetSprite } from "../utils/imageLoader.js"
import { GameView, PanelView } from "../views/view.js"
import { GameController } from "./Game.js"

export class Story {
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

    static async ShowConversationPanel(conversationtexts, currentDialogueIndex) {
        const game = document.querySelector('#game')
        game.classList.add('hide')
        
        const panel = document.createElement('div')
        panel.classList.add('conversationPanel')
        document.querySelector('body').append(panel)
        Story.currentConversationPanel = panel
        let index = 0
        const textList = conversationtexts[currentDialogueIndex].split(':')
        const speakerName = textList[0]
        const currentText = textList[1]
        try {
            panel.innerHTML = `
            
            <figure>
            <img class="portrait" src='./assets/portaits/${speakerName}.png'>
            <figcaption>${speakerName}</figcaption>
            </figure>
            <div></div>
          
            `
        } catch (error) {
            console.error(error)
        }
        const inter = setInterval(() => {
            const conversationHolderElement = panel.querySelector('div')
            conversationHolderElement.innerHTML +=
                currentText[index]
            index++
            if (index == currentText.length) {
                clearInterval(inter)
                const button = document.createElement('button')
                button.innerText = 'Következő'
                button.style.gridColumnStart = 2
                button.style.gridRowStart = 2
                conversationHolderElement.append(document.createElement('br'))
                conversationHolderElement.append(button)
                dispatchEvent(Story.conversationFinished)
            }
        }, currentText.length / 5)
    }
    static HideConversationPanel() {
        game.classList.remove('hide')
        Story.currentConversationPanel.remove()
    }
    static async LoadFile(filePath) {

        const res = await fetch(`/Frontend/GamePage/assets/conversations/${filePath}.txt`)
        if (!res.ok) {
            throw new Error('Conversation does not exist!')
        }
        let array = await res.text()

        array = array.split('\n')
        return array
    }

    static async BasePlayConversation(filePath, callback) {

        let index = 0
        let array = await Story.LoadFile(filePath)

        Story.gameController.player.isInConversation = true

        addEventListener('conversationFinished', () => {
            Story.currentConversationPanel.querySelector('button').addEventListener('click', () => {
                if (index == array.length - 1) {
                    Story.currentConversationPanel.querySelector('button').removeEventListener('click', Story)
                    Story.currentConversationPanel.remove()
                    callback instanceof Function ? callback(index) : null
                    Story.gameController.player.isInConversation = false
                    game.classList.remove('hide')
                    return
                }
                else
                {
                    Story.gameController.player.isInConversation = true
                }
                index++
                Story.HideConversationPanel()
                callback instanceof Function ? callback(index) : null
                Story.ShowConversationPanel(array, index)
            })
        })
        callback instanceof Function ? callback(index) : null
        Story.ShowConversationPanel(array, index)
    }

    static async StartConversation(filePath, completedQuest) {
        if (filePath.includes('after')) {
            putQuest(completedQuest.quest_id, { is_completed: true })
            completedQuest.is_completed = true
            this.gameController.player.quests.splice(this.gameController.player.quests.indexOf(completedQuest), 1)
            document.getElementById('quests').querySelector('#' + completedQuest.quest_id).remove()
        }

        if (filePath.includes('pre')) {
            putQuest(completedQuest.quest_id, { is_active: true })
            completedQuest.is_active = true
            this.gameController.player.quests.push(completedQuest)
            document.getElementById('quests').append(PanelView.GenerateQuestCard(completedQuest, this.gameController.isometricBlocks))
        }
        switch (completedQuest.Quest.is_mainstory) {
            case 1:
                await this.First(filePath, completedQuest)
                break;
            case 2:
                await this.Second(filePath, completedQuest)
                break;
            case 3:
                await this.Third(filePath, completedQuest);
                break;
            case 4:
                await this.Fourth(filePath, completedQuest)
                break;
            case 5:
                await this.Fifth(filePath, completedQuest)
                break;
            case 6:
                await this.Sixth(filePath, completedQuest)
                break;
            case 7:
                await this.Seventh(filePath, completedQuest)
                break;
            case 8:
                await this.Eight(filePath, completedQuest)
                break;
            case 9:
                await this.Ninth(filePath, completedQuest)
                break;
            default:
                await Story.BasePlayConversation(filePath);
        }
    }

    static async First(filePath, completedQuest) {
        Story.BasePlayConversation(filePath)

        if (filePath.includes("during")) {
            const secondmainQuest = (await getQuests('is_mainstory=2'))[0]
            completedQuest.is_completed = true
            secondmainQuest.Resident = completedQuest.Resident
            document.getElementById('quests').append(PanelView.GenerateQuestCard(secondmainQuest, this.gameController.isometricBlocks))
            document.getElementById('quests').querySelector('#' + completedQuest.quest_id).remove()
            putResident(completedQuest.Resident.resident_id, { quest_id: secondmainQuest.quest_id })
            putQuest(completedQuest.quest_id, { is_completed: true })
            putQuest(secondmainQuest.quest_id, { is_active: true })
            this.gameController.player.quests.push(secondmainQuest)
            this.gameController.player.quests.splice(this.gameController.player.quests.indexOf(completedQuest), 1)
        }


    }
    static async Second(filePath, completedQuest) {
        if (filePath.includes('after')) {
            const thirdMainQuest = (await getQuests('is_mainstory=3'))[0]
            await putResident(completedQuest.Resident.resident_id, { quest_id: thirdMainQuest.quest_id })
            thirdMainQuest.Resident = completedQuest.Resident
            document.getElementById('quests').append(PanelView.GenerateQuestCard(thirdMainQuest, this.gameController.isometricBlocks))
            putQuest(thirdMainQuest.quest_id, { is_active: true })
            this.gameController.player.quests.push(thirdMainQuest)

        }
        Story.BasePlayConversation(filePath, async (index) => {
            const game = Story.gameController
            if (index == 0 && filePath.includes('during')) {
                Story.MoveEntity(Story.gameController.player, Story.gameController.width * 0.5, Story.gameController.height * 0.5)
            }
            if (index == 3 && filePath.includes('during')) {
                const urlicSprite = await GetSprite('Ulric')
                const dominikSprite = await GetSprite('Dominik')
                const ulric = new NPC(game, 'Ulric', urlicSprite, game.width * 0.32, game.height * 0.64, 'Kovács')
                const dominik = new NPC(game, 'Dominik', dominikSprite, game.width * 0.72, game.height * 0.52, 'Szörnyvadász')
                ulric.blockX = 1
                ulric.blockY = 0
                ulric.isInterior = true
                dominik.blockX = 1
                dominik.blockY = 1
                this.AddEntitiesToScene([ulric, dominik])
                ulric.objX = this.gameController.width * 0.32
                ulric.objY = this.gameController.height * 0.64
                dominik.objX = this.gameController.width * 0.2
                dominik.objY = this.gameController.height * 0.52
                this.PostEntitis([ulric, dominik])
            }
        })
    }
    static async Third(filePath, completedQuest) {
        Story.BasePlayConversation(filePath)
        if (filePath.includes('during')) {
            const fourthMainQuest = (await getQuests('is_mainstory=4'))[0]

            const urlic = this.gameController.currentBlock.entities.find(resident => {
                return resident.name == 'Ulric'
            })
            putQuest(completedQuest.quest_id, { is_completed: true })
            this.gameController.player.quests.splice(this.gameController.player.quests.indexOf(completedQuest), 1)
            document.getElementById('quests').querySelector('#' + completedQuest.quest_id).remove()
            putResident(completedQuest.Resident.resident_id, { quest_id: null })

            putResident(urlic.id, { quest_id: fourthMainQuest.quest_id })
            document.getElementById('quests').append(PanelView.GenerateQuestCard(fourthMainQuest, this.gameController.isometricBlocks))
            this.gameController.player.quests.push(fourthMainQuest)
            putQuest(fourthMainQuest.quest_id, { is_active: true })
        }
    }


    static async Fourth(filePath, completedQuest) {
        Story.BasePlayConversation(filePath)
        if (filePath.includes('after')) {
            const fifthMainStory = (await getQuests('is_mainstory=5'))[0]
            putResident(completedQuest.Resident.resident_id, { quest_id: fifthMainStory.quest_id })

            putQuest(fifthMainStory.quest_id, { is_active: true })
            fifthMainStory.is_active = true
            this.gameController.player.quests.push(fifthMainStory)
            fifthMainStory.Resident = completedQuest.Resident
            document.getElementById('quests').append(PanelView.GenerateQuestCard(fifthMainStory, this.gameController.isometricBlocks))
        }
    }
    static async Fifth(filePath, completedQuest) {

        Story.BasePlayConversation(filePath, async (index) => {
            const game = Story.gameController
            if (index == 2 && filePath.includes('during')) {
                const emmaSprite = await GetSprite('Emma')
                const arminSprite = await GetSprite('Ármin')
                const emma = new NPC(game, 'Emma', emmaSprite, game.width * 0.32, game.height * 0.64, 'Farmer')
                const armin = new NPC(game, 'Ármin', arminSprite, game.width * 0.72, game.height * 0.52, 'Mágus')
                armin.isInterior = true
                armin.blockX = 0
                armin.blockY = 1
                emma.isInterior = true
                emma.blockX = 2
                emma.blockY = 0
                this.AddEntitiesToScene([emma, armin])
                armin.objX = game.width * 0.49
                armin.objY = game.height * 0.63
                emma.objX = game.width * 0.49
                emma.objY = game.height * 0.54
                this.PostEntitis([emma, armin])
            }
        })
        if (filePath.includes('after')) {
            const sixthMainStory = (await getQuests('is_mainstory=6'))[0]
            putResident(completedQuest.Resident.resident_id, { quest_id: sixthMainStory.quest_id })

            putQuest(sixthMainStory.quest_id, { is_active: true })
            sixthMainStory.is_active = true
            this.gameController.player.quests.push(sixthMainStory)
            sixthMainStory.Resident = completedQuest.Resident
            document.getElementById('quests').append(PanelView.GenerateQuestCard(sixthMainStory, this.gameController.isometricBlocks))
        }
    }
    static async Sixth(filePath, completedQuest) {
        Story.BasePlayConversation(filePath)
        if (filePath.includes('after')) {
            const seventhMainStory = (await getQuests('is_mainstory=7'))[0]
            putResident(completedQuest.Resident.resident_id, { quest_id: seventhMainStory.quest_id })

            putQuest(seventhMainStory.quest_id, { is_active: true })
            seventhMainStory.is_active = true
            this.gameController.player.quests.push(seventhMainStory)
            seventhMainStory.Resident = completedQuest.Resident
            document.getElementById('quests').append(PanelView.GenerateQuestCard(seventhMainStory, this.gameController.isometricBlocks))
        }
    }

    static async Seventh(filePath, completedQuest) {
        Story.BasePlayConversation(filePath, async (index) => {
            const game = Story.gameController
            if (index == 1) {
                const michailSprite = await GetSprite('Michail')
                const billySprite = await GetSprite('Billy')

                const michail = new NPC(game, 'Michail', michailSprite, game.width * 0.32, game.height * 0.64, 'Lovag')
                const billy = new NPC(game, 'Billy', billySprite, game.width * 0.72, game.height * 0.52, 'Horgász')
                michail.blockX = 0
                michail.blockY = 0
                billy.blockX = 2
                billy.blockY = 1
                billy.objX = game.width * 0.25
                billy.objY = game.height * 0.4
                michail.objX = game.width * 0.26
                michail.objY = game.height * 0.67
                this.AddEntitiesToScene([michail, billy])
                this.PostEntitis([michail, billy])
            }
        })
        if (filePath.includes('during')) {
            const eightMainQuest = (await getQuests('is_mainstory=8'))[0]
            putResident(completedQuest.Resident.resident_id, { quest_id: eightMainQuest.quest_id })
            putQuest(completedQuest.quest_id, { is_completed: true })
            putQuest(eightMainQuest.quest_id, { is_active: true })
            this.gameController.player.quests.splice(this.gameController.player.quests.indexOf(completedQuest), 1)
            document.getElementById('quests').querySelector('#' + completedQuest.quest_id).remove()
            this.gameController.player.quests.push(eightMainQuest)
            document.getElementById('quests').append(PanelView.GenerateQuestCard(eightMainQuest, this.gameController.isometricBlocks))
        }
    }

    static async Eight(filePath, completedQuest) {
        Story.BasePlayConversation(filePath, async (index) => {
            if (index == 0 && filePath.includes('after')) {


                this.MoveEntity(this.gameController.player, this.gameController.width * 0.41, this.gameController.height * 0.78)
                const dominik = (await getAllResidents("resident_name='Dominik'"))[0]
                const armin = (await getAllResidents("resident_name='Ármin'"))[0]
                const michail = (await getAllResidents("resident_name='Michail'"))[0]


                const arminNPC = new NPC(this.gameController, armin.resident_name, await GetSprite(armin.resident_name), game.width * armin.objX, game.height * armin.objY, armin.profession)
                const dominikNPC = new NPC(this.gameController, dominik.resident_name, await GetSprite(dominik.resident_name), game.width * dominik.objX, game.height * dominik.objY, dominik.profession)
                const michailNPC = new NPC(this.gameController, michail.resident_name, await GetSprite(michail.resident_name), game.width * michail.objX, game.height * michail.objY, michail.profession)

                arminNPC.id = armin.resident_id
                arminNPC.isInterior = armin.isInterior

                dominik.id = dominik.resident_id
                dominikNPC.isInterior = dominik.isInterior

                michailNPC.id = michail.resident_id
                michailNPC.isInterior = michail.isInterior

                michailNPC.objX = this.gameController.width * 0.57
                michailNPC.objY = this.gameController.height * 0.65

                arminNPC.objX = this.gameController.width * 0.64
                arminNPC.objY = this.gameController.height * 0.7

                dominikNPC.objX = this.gameController.width * 0.74
                dominikNPC.objY = this.gameController.height * 0.74


                this.AddEntitiesToScene([dominikNPC, arminNPC, michailNPC])
            }
        })
        if (filePath.includes('after')) {
            const ninthMainStory = (await getQuests('is_mainstory=9'))[0]
            putResident(completedQuest.Resident.resident_id, { quest_id: ninthMainStory.quest_id })

            putQuest(ninthMainStory.quest_id, { is_active: true })
            ninthMainStory.is_active = true
            this.gameController.player.quests.push(ninthMainStory)
            ninthMainStory.Resident = completedQuest.Resident
            document.getElementById('quests').append(PanelView.GenerateQuestCard(ninthMainStory, this.gameController.isometricBlocks))
        }
    }


    static async Ninth(filePath, completedQuest) {
        Story.BasePlayConversation(filePath, async (index) => {
            const game = this.gameController
            if (index == 0 && filePath.includes('during')) {

                this.MoveEntity(game.player, game.width * 0.53, game.height * 0.86)
            }
            if (index == 2 && filePath.includes('during')) {
                const minerva = new NPC(game, 'Minerva', await GetSprite('Minerva'), game.width * 0.35, game.height * 0.73, 'Boszorkány')
                minerva.blockX = 3
                minerva.blockY = 0
                const henry = new NPC(game, 'Henry', await GetSprite('Henry'), game.width * 0.49, game.height * 0.78, 'Favágó')
                henry.blockX = 1
                henry.blockY = 2
                minerva.isInterior = true
                this.AddEntitiesToScene([minerva, henry])
                this.PostEntitis([minerva, henry])
            }
        })
        if (filePath.includes('during')) {
            const tenthMainStory = (await getQuests('is_mainstory=10'))[0]
            putResident(completedQuest.Resident.resident_id, { quest_id: tenthMainStory.quest_id })
            putQuest(completedQuest.quest_id, { is_completed: true })
            putQuest(tenthMainStory.quest_id, { is_active: true })
            this.gameController.player.quests.splice(this.gameController.player.quests.indexOf(completedQuest), 1)
            document.getElementById('quests').querySelector('#' + completedQuest.quest_id).remove()
            this.gameController.player.quests.push(tenthMainStory)
            document.getElementById('quests').append(PanelView.GenerateQuestCard(tenthMainStory, this.gameController.isometricBlocks))
        }
    }


    static MoveEntity(entity, x, y) {
        Story.gameView.context.clearRect(entity.spriteX, entity.spriteY, entity.width, entity.height)
        entity.objX = x
        entity.objY = y
        Story.gameView.RenderEntity(entity)
    }
    /**
     * 
     * @param {Array<Monster | NPC>} entitiesList 
     */
    static AddEntitiesToScene(entitiesList) {
        entitiesList.forEach(async entity => {
            entity.spriteHeight = entity.sprite.height
            entity.spriteWidth = entity.sprite.width
            entity.width = this.gameController.width * this.gameController.currentBlock.entityWidth
            entity.height = this.gameController.height * this.gameController.currentBlock.entityHeight
            this.gameController.currentBlock.entities.push(entity)
            this.MoveEntity(entity, entity.objX, entity.objY)

        });
    }
    /**
     * 
     * @param {Array<Monster | NPC>} entitiesList 
     */
    static PostEntitis(entitiesList) {
        entitiesList.forEach(async entity => {
            if (entity instanceof NPC) {
                postResident({
                    objX: entity.objX / this.gameController.width,
                    objY: entity.objY / this.gameController.height,
                    blockX: entity.blockX,
                    blockY: entity.blockY,
                    resident_name: entity.name,
                    profession: entity.profession,
                    isInterior: entity.isInterior
                })
            }
            else if (entity instanceof Monster) {
                // Coming soon
            }
        })
    }
}