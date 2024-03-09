import {GameController} from '../controllers/Game.js'
import { PanelController } from '../controllers/Panel.js'
import { Circle } from '../models/Circle.js'
import { Line } from '../models/Line.js'
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
    this.#InitCanvas()
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
      if (this.game.debug.key == 'f' || true) {
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
        for (const barrier of this.game.currentBlock.barriers)
        {
          if(barrier instanceof Circle)
          {
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
          if(barrier instanceof Line)
          {
            this.context.moveTo(barrier.startPoint.x,barrier.startPoint.y)
        this.context.lineTo(barrier.endPoint.x,barrier.endPoint.y)
        this.context.stroke()
          }
        }
      }
}


#InitCanvas()
{
this.canvas.width = innerWidth * 0.5
this.canvas.height = innerHeight
this.context.fillStyle='white'
  this.context.strokeStyle='white'
  this.context.lineWidth=4
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



BindMoney(player)
  {
    document.querySelector('#money span').innerHTML=' '+player.money
  }




ClearContext=()=>
{
  this.context.clearRect(0,0,this.canvas.width,this.canvas.height)
}
SetBackGround=(imageUrl)=>
{
  this.canvas.style.backgroundImage=`url(${imageUrl})`
}


static #createTemplate()
{

  const div=document.createElement('div')
  div.classList.add('globalPanel')
  
  const closeElement=document.createElement('button')
closeElement.classList.add('closeButton')

div.append(closeElement)
return div
}
static InventoryPanel=(game)=>
{ 
  const div=this.#createTemplate()
  div.id='inventory'
  const player=game.player
let counter=0
for (const item in player.inventory)
{
  const img=document.createElement('img')
  img.src=`./assets/icons/${item}.png`
  img.classList.add('navIMG')
  const span=document.createElement('span')
  span.setAttribute('data-title',item)
  span.append(img)
  const div1=document.createElement('div')
  div1.append(span)
  div1.append(document.createElement('br'))
  div1.append(player.inventory[item])
  if(counter==3)
  {
    div.append(document.createElement('br'))
  }
  const div2=document.createElement('div')
  div2.append(div1)
  div.append(div2)
  counter++
}

  document.querySelector('body').append(div)

}

static BindMonsterHP(monster)
{
  const el=document.getElementById(monster.id)
  if(el){
  document.getElementById(monster.id).querySelector('div#HP div').style.width=monster.HP+'%'
}
}


}






export class PanelView {

static #CreatePanelElement(panelInstance)
{
  const div = document.createElement('div')
  div.id = panelInstance.id || panelInstance
  div.className = "gamePanel"
  div.append(PanelView.GetOwnTemplate(panelInstance).content.cloneNode(true))
  return div
}
  static ShowPanel(panelInstance, game) {
    const div=PanelView.#CreatePanelElement(panelInstance)
    if(panelInstance.isNavigationPanel)
    {
      const {direction, forwardId, backwardId}=panelInstance.isNavigationPanel
      PanelView.#SetButtons(game, direction, forwardId, backwardId, div)
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
    if(panelInstance.id){
    return document.querySelector('template#'+panelInstance.id)
  }
  return document.querySelector('template#'+panelInstance)
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
static #SetButtons = (game, direction, forwardId,backwardId, element) => {
  const [y,x]=PanelController.SetNavigationPanelValues(direction,game)
  const forwardButton = element.querySelector('#' + forwardId)
  const backwardButton = element.querySelector('#' + backwardId)
const funcOne=game.isometricBlocks[game.currentBlockX][y]
const funcTwo=game.isometricBlocks[x]?game.isometricBlocks[x][game.currentBlockY]:undefined
      if (funcTwo == undefined) {
          backwardButton.remove()
      }
      else {
        backwardButton.value=funcTwo.name
        backwardButton.addEventListener('click',()=>{document.querySelector('div.gamePanel').remove();funcTwo(game)})
          
      }
      if (funcOne == undefined) {
          forwardButton.remove()
      }
      else {
        forwardButton.value=funcOne.name
        forwardButton.addEventListener('click',()=>{document.querySelector('div.gamePanel').remove();funcOne(game)})
      }
  }

  static ShowHighlight(context)
  {
    if(document.getElementById(context.id))
    {
      return
    }
    const div=this.#CreatePanelElement("HighlightEntities")
    div.id=context.id
    this.#processElement(div,context)
    div.querySelector('div#HP div').style.width=context.HP+'%'
    document.querySelector('body').append(div)
  }
  static HideHighlight(id)
  {
    const el=document.getElementById(id)
if(el){
    el.remove()
}
  }


  static ShowDeathDialog(player)
  {
    if(document.querySelector("div#dead"))
    {
      return
    }

const div=this.#CreatePanelElement("dead")
console.log(div);
const button=div.querySelector('input[type="button"]')
console.log(button);
button.addEventListener('click',player.Respawn,{once:true})
button.addEventListener('click',this.HideDeathDialog,{once:true})
document.querySelector('body').append(div)

  }
  static HideDeathDialog()
  {
    const el=document.querySelector("div#dead")
    if(el)
    {
      el.remove()
    }
  }



}