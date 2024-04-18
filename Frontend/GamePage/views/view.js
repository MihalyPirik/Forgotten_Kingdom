import { getQuests, putQuest } from '../../services/questService.js'
import { GameController } from '../controllers/Game.js'
import { PanelController } from '../controllers/Panel.js'
import { ConversationQuests, IsTargetResident } from '../controllers/Quest.js'
import { Story } from '../controllers/Story.js'
import { Circle } from '../models/Circle.js'
import { Line } from '../models/Line.js'
import { getAllOffer } from '../../services/marketService.js'
import { getAllItems } from '../../services/playerService.js'
import { AddNewOffer, BuyOffer } from '../controllers/PublicMarket.js'
import { Panel } from '../models/Panel.js'
import { Entity } from '../models/Entity.js'
export class GameView {
  constructor(canvas, game) {
    /**
     * @type {HTMLCanvasElement}
     */
    this.canvas = canvas
    /**
     * @type {CanvasRenderingContext2D}
     */
    this.context = canvas.getContext('2d')
    this.game = game
    this.#InitCanvas()
  }
  /**
 * 
 * @param {GameController} game 
 */
  RenderEntity = (entity) => {
    entity.spriteX = entity.objX - entity.width * 0.5
    entity.spriteY = entity.objY - entity.height * 0.5 - entity.radius
    this.context.drawImage(
      entity.sprite,
      entity.frameX * entity.spriteWidth,
      entity.frameY * entity.spriteHeight,
      entity.spriteWidth,
      entity.spriteHeight,
      entity.spriteX,
      entity.spriteY,
      entity.width,
      entity.height
    )
    if (this.game.debug.key == 'f') {
      this.context.beginPath()
      this.context.arc(
        entity.objX,
        entity.objY,
        entity.radius,
        0,
        Math.PI * 2
      )
      this.context.save()
      this.context.globalAlpha = 0.5
      this.context.fill()
      this.context.restore()
      this.context.stroke()
      this.context.strokeRect(entity.spriteX, entity.spriteY, entity.width, entity.height)
      for (const barrier of this.game.currentBlock.barriers) {
        if (barrier instanceof Circle) {
          this.context.beginPath()
          this.context.arc(
            barrier.x,
            barrier.y,
            barrier.radius,
            0,
            Math.PI * 2
          )
          this.context.save()
          this.context.globalAlpha = 0.5
          this.context.fill()
          this.context.restore()
          this.context.stroke()
        }
        if (barrier instanceof Line) {
          this.context.moveTo(barrier.startPoint.x, barrier.startPoint.y)
          this.context.lineTo(barrier.endPoint.x, barrier.endPoint.y)
          this.context.stroke()
        }
      }
    }
  }
  /**
   * 
   * @param {Panel} panel 
   */
  RenderPanel(panel) {
    if (panel.image) {
      this.context.drawImage(
        panel.image,
        0,
        0,
        panel.image.width,
        panel.image.height,
        panel.x - this.game.currentBlock.entityWidth * this.game.width * 0.5,
        panel.y - this.game.currentBlock.entityHeight * this.game.height * 0.5,
        this.game.currentBlock.entityWidth * this.game.width,
        this.game.currentBlock.entityHeight * this.game.height
      )
    }

    if (this.game.debug.key == 'f') {
      this.context.fillStyle = 'black'
      this.context.beginPath()
      this.context.arc(
        panel.x,
        panel.y,
        panel.radius,
        0,
        Math.PI * 2
      )
      this.context.save()
      this.context.globalAlpha = 0.5
      this.context.fill()
      this.context.restore()
      this.context.stroke()
    }
  }

/**
 * 
 * @param {Entity} entity 
 */
  ClearEntity(entity)
  {
    this.context.clearRect(
      entity.spriteX,
      entity.spriteY,
      entity.width,
      entity.height
    )
  }


  #InitCanvas() {
    this.canvas.width = innerWidth * 0.5
    this.canvas.height = innerHeight
    this.context.fillStyle = 'white'
    this.context.strokeStyle = 'white'
    this.context.lineWidth = 4
  }
  BindPlayerHealth = (player) => {

    if (player.HP >= 0) {
      const bar = document.querySelector(".bar");
      bar.style.width = player.HP + '%'
      bar.innerHTML = player.HP + '/100'
    }
  }

  BindMoney(money) {
    document.querySelector('#money span').innerHTML = ' ' + money
  }

  ClearContext = () => {
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height)
  }
  SetBackGround = (imageUrl) => {
    this.canvas.style.backgroundImage = `url(${imageUrl})`
  }

  static BindMonsterHP(monster) {
    const el = document.getElementById(monster.id)
    if (el) {
      document.getElementById(monster.id).querySelector('div#HP div').style.width = monster.HP + '%'
    }
  }
}

export class PanelView {

  static panelShowed = new CustomEvent('panelShowed', {
    bubbles: true, detail:
    {
      panel: undefined
    }
  })
  static panelHide = new CustomEvent('panelHide', {
    bubbles: true, detail:
    {
      panel: undefined
    }
  })
  static #CreatePanelElement(panelInstance) {
    const div = document.createElement('div')
    div.id = panelInstance.id || panelInstance
    div.className = "gamePanel"
    div.append(PanelView.GetOwnTemplate(panelInstance).content.cloneNode(true))
    return div
  }
  static ShowPanel(panelInstance, game) {
    const div = PanelView.#CreatePanelElement(panelInstance)
    if (panelInstance.isNavigationPanel) {
      const { direction, forwardId, backwardId } = panelInstance.isNavigationPanel
      PanelView.#SetButtons(game, direction, forwardId, backwardId, div)
    }
    PanelView.#processElement(div, panelInstance.context)

    document.querySelector('body').append(div);
    this.panelShowed.detail.panel = panelInstance
    div.dispatchEvent(this.panelShowed)
    div.style.top = panelInstance.y - div.offsetHeight + 'px';
    div.style.left = panelInstance.x + 'px';
  }
  static HidePanel(panelInstance) {
    const el = document.querySelector('div#' + panelInstance.id)
    this.panelHide.detail.panel = panelInstance
    if (el) {
      el.dispatchEvent(this.panelHide)
      el.remove()
    }
  }
  static GetOwnTemplate(panelInstance) {
    if (panelInstance.id) {
      return document.querySelector('template#' + panelInstance.id)
    }
    return document.querySelector('template#' + panelInstance)
  }
  static #processElement(element, context) {

    if (context) {
      if (element.nodeType === Node.TEXT_NODE) {
        element.nodeValue = PanelView.#getMatches(element.nodeValue, /{{(.*?)}}/g, context);
      } else if (element.nodeType === Node.ELEMENT_NODE) {
        for (const attr of element.attributes) {
          const attrValue = PanelView.#getMatches(attr.value, /{{(.*?)}}/g, context);
          element.setAttribute(attr.name, attrValue);
        }
        for (const child of element.childNodes) {
          PanelView.#processElement(child, context);
        }
      }
    }
  }
  static #getMatches = (str, regex, context) => {
    if (context) {
      const matches = []
      let match
      while ((match = regex.exec(str)) !== null) {
        matches.push(match[1])
      }
      return str.replace(regex, (match, variable) => {
        if (variable.includes('.')) {
          let newContext = context
          let newKey = variable
          const list = variable.split('.')
          for (let i = 0; i < list.length - 1; i++) {
            newContext = newContext[list[i]]
            newKey = list[i + 1]
          }
          return newContext[newKey] == undefined ? match : newContext[newKey]
        }
        return context[variable] == undefined ? match : context[variable]
      })
    }
  }
  static #SetButtons = (game, direction, forwardId, backwardId, element) => {
    const [y, x] = PanelController.SetNavigationPanelValues(direction, game)
    const forwardButton = element.querySelector('#' + forwardId)
    const backwardButton = element.querySelector('#' + backwardId)
    const funcOne = game.isometricBlocks[game.currentBlockX][y]
    const funcTwo = game.isometricBlocks[x] ? game.isometricBlocks[x][game.currentBlockY] : undefined
    if (funcTwo == undefined) {
      backwardButton.remove()
    }
    else {
      backwardButton.value = funcTwo.name
      backwardButton.addEventListener('click', () => { document.querySelector('div.gamePanel').remove(); funcTwo(game) })

    }
    if (funcOne == undefined) {
      forwardButton.remove()
    }
    else {
      forwardButton.value = funcOne.name
      forwardButton.addEventListener('click', () => { document.querySelector('div.gamePanel').remove(); funcOne(game) })
    }
  }

  static ShowHighlight(context) {
    if (document.getElementById(context.id)) {
      return
    }
    const div = this.#CreatePanelElement("HighlightEntities")
    div.id = context.id
    div.classList.add("HighlightEntities")
    this.#processElement(div, context)
    div.querySelector('div#HP div').style.width = context.HP + '%'
    document.querySelector('body').append(div)
  }
  static HideHighlight(id) {
    const el = document.getElementById(id)
    if (el) {
      el.remove()
    }
  }

  static ShowDeathDialog(player) {
    if (document.querySelector("div#dead")) {
      return
    }

    const div = this.#CreatePanelElement("dead")
    const button = div.querySelector('input[type="button"]')
    button.addEventListener('click', player.Respawn, { once: true })
    button.addEventListener('click', this.HideDeathDialog, { once: true })
    document.querySelector('body').append(div)

  }
  static HideDeathDialog() {
    const el = document.querySelector("div#dead")
    if (el) {
      el.remove()
    }
  }

  static BindProgress(value, interval) {
    const el = document.getElementById('ActionProgress')
    let width = el.parentElement.offsetWidth * value / interval
    if (width > 100) { width = 100 }
    el.style.width = width + '%'
  }

  static SetFishActionView(element) {
    const but = document.createElement('input')
    but.type = 'button'
    but.value = 'Horgászsás'
    element.append(but)
    return but
  }

  static #createTemplate() {

    const div = document.createElement('div')
    div.classList.add('globalPanel')

    const closeElement = document.createElement('button')
    closeElement.classList.add('closeButton')

    div.append(closeElement)
    return div
  }
  static InventoryPanel = (game) => {
    const div = PanelView.#createTemplate()
    div.id = 'inventory'
    const player = game.player
    let counter = 0
    for (const item in player.inventory) {
      const img = document.createElement('img')
      img.src = `./assets/icons/${item}.png`
      img.classList.add('IMG')
      const span = document.createElement('span')
      span.append(img)
      const div1 = document.createElement('div')
      div1.append(span)
      div1.append(document.createElement('br'))
      div1.append(player.inventory[item])
      if (counter == 3) {
        div.append(document.createElement('br'))
      }
      div1.id=item
      const div2 = document.createElement('div')
      div2.append(div1)
      div.append(div2)
      counter++
    }

    document.querySelector('body').append(div)
    return div
  }

  static BindInventoryItem(itemType,value)
  {
    let element = document.querySelector('div#inventory')
    if(!element)
    {
      return
    }
      element = element.querySelector('#'+itemType)
      element = element.childNodes
      element = element[element.length-1]
      element.nodeValue = value
  }


  static QuestPanelShow(questList, isometricBlocks) {
    const questPanel = document.getElementById('quests')

    questList.forEach(quest => {
      const div2 = this.GenerateQuestCard(quest, isometricBlocks)
      questPanel.append(div2)
    });
  }

  static async ShowShopItems(element, game) {
    const offers = await getAllOffer()
    const itemsContainer = element.querySelector('#items')
    itemsContainer.innerHTML = ''
    offers.forEach(offer => {
      itemsContainer.innerHTML += `<div id=${offer.offer_id}><img src='./assets/icons/${offer.offeredType}.png'> ${offer.offeredAmount} <img src='./assets/icons/${offer.soughtType}.png'> ${offer.soughtAmount} <input class='buyBtn' type="button" value="Buy"></div>`
    })
    itemsContainer.addEventListener('click', (e) => {
      if (e.target instanceof HTMLInputElement) {
        BuyOffer(e.target.parentElement.id, game)
      }
    }
    )
  }

  static AddNewOffer(offer) {
    const itemsContainer = document.getElementById('items')
    itemsContainer.innerHTML = `<div id=${offer.offer_id}><img src='./assets/icons/${offer.offeredType}.png'> ${offer.offeredAmount} <img src='./assets/icons/${offer.soughtType}.png'> ${offer.soughtAmount} <input type="button" value="Buy"><br></div>` + itemsContainer.innerHTML
  }


  static DeleteOffer(offerId) {
    const offer = document.getElementById(offerId)
    if (offer) {
      offer.remove()
    }
  }

  static async ShowAddNewOfferPanel(game, e) {
    const tem = PanelView.GetOwnTemplate('newOffer')
    const container = PanelView.#createTemplate()
    container.innerHTML += tem.cloneNode(true).innerHTML
    container.id = 'newOffer'
    const resources = await getAllItems()
    const selects = container.querySelectorAll('select')
    resources.forEach(item => {
      selects.forEach(el => {
        el.innerHTML += `<option value='${item.name}'>${item.name}</option>`
      })

    })
    container.addEventListener('submit', (e) => AddNewOffer(e, game))
    e.target.parentElement.prepend(container)

    return container
  }

  static GenerateQuestCard(quest, isometricBlocks) {
    let div2 = document.getElementById('quests').querySelector('#' + quest.quest_id)
    if (div2) { div2.innerHTML = "" }
    if (!div2) {
      div2 = document.createElement('div')
    }
    div2.classList.add("questCard")
    div2.id = quest.quest_id
    div2.innerHTML += `<p>${quest.quest_id}</p>`
    if (quest.currentProgress >= quest.Quest.target_amount) {
      div2.innerHTML += 'Térj vissza ' + quest.Resident.resident_name + ' - hoz'
    }
    else {
      switch (quest.Quest.category) {
        case "Killer":
          div2.innerHTML += `<p>Ölj meg ${quest.Quest.target_amount} db ${quest.Quest.EnemyType.enemy_name} - t</p><p>${quest.currentProgress}/${quest.Quest.target_amount}</p>`
          break;
        case "Conversation":
          div2.innerHTML += `<p>Beszélj ${quest.Quest.target_resident} - ral</p>`
          break;
        case "Collector":
          div2.innerHTML += `<p>Szerezz ${quest.Quest.target_amount} db ${quest.Quest.Item.name} - t</p>`
          break;
        case "Exploring":
          div2.innerHTML += `<p>Juss el a ${isometricBlocks[quest.Quest.blockX][quest.Quest.blockY].name} - re</p>`
          break;
        default:
          break;
      }
      div2.innerHTML += `<p><span id="progress">${quest.currentProgress}</span>/${quest.Quest.target_amount}</p>`
    }

    this.#processElement(div2, quest)
    return div2
  }

  static ModifyQuestProgress(quest_id, newProgress) {
    const progressHolder = document.getElementById(quest_id).querySelector('#progress')
    if (progressHolder) {
      progressHolder.innerHTML = newProgress
    }
  }

  static NPCPanel(panel, element) {
    const resident = panel.context
    const quest = panel.context.quest
    const el = element
    if (quest) {
      if (quest.is_completed) {
        el.id = 'message'
        el.innerHTML = 'Generate new quest'
        return
      }
      if (quest.is_active) {
        if (quest.currentProgress >= quest.Quest.target_amount) {
          const but = document.createElement('input')
          but.id = 'messageButton'
          but.type = 'button'
          but.value = "Küldetés leadás"
          but.addEventListener('click', () => {
            Story.StartConversation('after/' + quest.Quest.quest_name, quest)
          }, { once: true })
          el.append(but)
        }
        else {
          el.id = 'message'
          el.innerHTML = '<p>Sok sikert kedves utazó!</p>'
        }
      }
      else {
        el.innerHTML += `<p>Szia van egy küldetésem számodra</p>`
        const but = document.createElement('input')
        but.id = 'messageButton'
        but.type = 'button'
        but.value = "Küldetés felvétele"
        but.addEventListener('click', () => {
          Story.StartConversation('pre/' + quest.Quest.quest_name, quest)
        }, { once: true }
        )
        el.append(but)
      }
    }
    else {
      el.id = 'message'
      el.innerHTML = '<p>Üdvözöllek bátor utazó!</p>'
    }
    const anotherQuest = IsTargetResident(resident, resident.game.player.quests)
    if (anotherQuest) {
      if (anotherQuest.currentProgress < anotherQuest.Quest.target_amount) {
        const but = document.createElement('input')
        but.id = 'messageButton'
        but.type = 'button'
        but.value = 'Párbeszéd indítása' + '(' + anotherQuest.Quest.quest_name + ')'
        but.addEventListener('click', () => {
          ConversationQuests(anotherQuest)
          Story.StartConversation('during/' + anotherQuest.Quest.quest_name, anotherQuest)
        }, { once: true }
        )
        el.innerHTML = ""
        el.append(but)
      }
    }
  }

  static ToolPanel(game) {
    const div = PanelView.#createTemplate()
    div.id = 'sword'
    game.player.tools.forEach(tool => {
      const card = PanelView.GetOwnTemplate('toolPanel').content.cloneNode(true)
      const div2 = document.createElement('div')
      div2.classList.add("toolCard")
      div2.append(card)
      PanelView.#processElement(div2, tool)
      div.append(div2)
    })
    document.querySelector('body').append(div)
    return div
  }
}