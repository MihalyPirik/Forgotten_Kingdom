import {GameController} from '../controllers/Game.js'
export class GameView
{
  constructor(canvas,game)
  {
    /**
     * @type {HTMLCanvasElement}
     */
    this.canvas=canvas
    /**
     * @type {CanvasRenderingContext2D}
     */
    this.context=canvas.getContext('2d')
    this.game=game
  }
  /**
 * 
 * @param {GameController} game 
 */
RenderEntity=(entity)=>
{
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
      }
}
BindPlayerHealth=(player)=>
{

  if(player.HP>=0)
  {
    const bar = document.querySelector(".bar");


  bar.style.width=player.HP+'%'
  bar.innerHTML=player.HP+'/100'

  }
  

}
ClearContext=()=>
{
  this.context.clearRect(0,0,this.canvas.width,this.canvas.height)
}
SetBackGround=(imageUrl)=>
{
  this.canvas.style.backgroundImage=`url(${imageUrl})`
}

static Inventory(game)
{
  const player=game.player
  const element=document.getElementById('inventoryTemplate').content.cloneNode(true)
const div=document.createElement('div')
div.classList.add('globalPanel')
for (const item in player.inventory)
{
  const span=document.createElement('div')
  span.innerText=`${item} - ${player.inventory[item]}`
  div.append(span)
}
const closeElement=document.createElement('button')
closeElement.classList.add('closeButton')

div.append(closeElement)
div.draggable=true
element.append(div)
  document.querySelector('body').append(element)

}




}






export class PanelView {

  constructor()
  {
  }
static #CreatePanelElement(panelInstance)
{
  const div = document.createElement('div')
  div.id = panelInstance.id
  div.className = "gamePanel"
  div.append(PanelView.GetOwnTemplate(panelInstance).content.cloneNode(true))
  return div
}
  static ShowPanel(panelInstance, game) {
    const div=PanelView.#CreatePanelElement(panelInstance)
    if(panelInstance.isNavigationPanel)
    {
      const {direction, forwardId, backwardId}=panelInstance.isNavigationPanel
      PanelView.#SetButtons(game, direction,div,forwardId,backwardId)
    }
        PanelView.#processElement(div, panelInstance.context)
      
        document.querySelector('body').append(div);
      div.style.top = panelInstance.y - div.offsetHeight + 'px';
      div.style.left = panelInstance.x + 'px';
  }
  static HidePanel(panelInstance)
  {
    document.querySelector('div#'+panelInstance.id).remove()
  }
  static GetOwnTemplate(panelInstance)
  {
    return document.querySelector('template#'+panelInstance.id)
  }
  static #processElement(element,context) {
    if(context)
    {
    if (element.nodeType === Node.TEXT_NODE) {
        element.nodeValue = PanelView.#getMatches(element.nodeValue, /{{(.*?)}}/g, context);
    } else if (element.nodeType === Node.ELEMENT_NODE) {
        for (const attr of element.attributes) {
            const attrValue = PanelView.#getMatches(attr.value, /{{(.*?)}}/g, context);
            element.setAttribute(attr.name, attrValue);
        }
        for (const child of element.childNodes) {
            PanelView.#processElement(child,context);
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
            return context[variable] || match
        })
    }
}
static #SetButtons = (game, direction, element, forwardId, backwardId) => {
  const forwardButton = element.querySelector('#' + forwardId)
  const backwardButton = element.querySelector('#' + backwardId)
  let nextX
  let nextY
  let previousX
  let previousY
  if (direction == 'x') {
      if (game.currentBlockY == game.isometricBlocks[game.currentBlockX].length - 1) {
          nextY = 0
      }
      else {
          nextY = game.currentBlockY + 1
      }
      if (game.currentBlockY == 0) {
          previousY = game.isometricBlocks[game.currentBlockX].length - 1
      }
      else {
          previousY = game.currentBlockY - 1
      }
      forwardButton.value=game.isometricBlocks[game.currentBlockX][nextY].name
      backwardButton.value=game.isometricBlocks[game.currentBlockX][previousY].name
      if (backwardButton.value == 'undefined') {
          backwardButton.remove()
      }
      else {
          forwardButton.addEventListener('click',game.isometricBlocks[game.currentBlockX][nextY].bind())
      }
      if (forwardButton.value == 'undefined') {
          forwardButton.remove()
      }
      else {
          backwardButton.addEventListener('click',game.isometricBlocks[game.currentBlockX][previousY].bind())
      }
  }
  if (direction == 'y') {
      if (game.currentBlockX == game.isometricBlocks.length - 1) {
          nextX = 0
      }
      else {
          nextX = game.currentBlockX + 1
      }
      if (game.currentBlockX == 0) {
          previousX = game.isometricBlocks.length - 1
      }
      else {
          previousX = game.currentBlockX - 1
      }
      forwardButton.value=game.isometricBlocks[nextX][game.currentBlockY]?game.isometricBlocks[nextX][game.currentBlockY].name:undefined
      backwardButton.value=game.isometricBlocks[previousX][game.currentBlockY]?game.isometricBlocks[previousX][game.currentBlockY].name:undefined
      if (backwardButton.value == 'undefined') {
          backwardButton.remove()
      }
      else {
          backwardButton.addEventListener('click',game.isometricBlocks[previousX][game.currentBlockY].bind())
      }
      if (forwardButton.value == 'undefined') {
          forwardButton.remove()
      }
      else {
          forwardButton.addEventListener('click',game.isometricBlocks[nextX][game.currentBlockY].bind())
      }
  }
}
}