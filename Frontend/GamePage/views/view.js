import { GameObject } from '../models/GameObject.js'
import {GameController} from '../controllers/Game.js'
export class GameView
{
  constructor(canvas)
  {
    /**
     * @type {HTMLCanvasElement}
     */
    this.canvas=canvas
    /**
     * @type {CanvasRenderingContext2D}
     */
    this.context=canvas.getContext('2d')
  }
  /**
 * 
 * @param {GameObject} entity 
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
      // if (this.debug.key == 'f') {
      //   this.context.beginPath()
      //   this.context.arc(
      //     entity.objX,
      //     entity.objY,
      //     entity.radius,
      //     0,
      //     Math.PI * 2
      //   )
      //   this.context.save()
      //   this.context.globalAlpha = 0.5
      //   this.context.fill()
      //   this.context.restore()
      //   this.context.stroke()
      //   this.context.strokeRect(entity.spriteX, entity.spriteY, entity.width, entity.height)
      // }
}
ClearContext=()=>
{
  this.context.clearRect(0,0,this.canvas.width,this.canvas.height)
}
SetBackGround=(imageUrl)=>
{
  this.canvas.style.backgroundImage=`url(${imageUrl})`
}
}



export class PanelView {


  static ShowPanel(panelInstance) {
    const div = document.createElement('div')
        div.id = panelInstance.id
        div.className = "gamePanel"
        div.append(this.GetOwnTemplate(panelInstance).content.cloneNode(true))
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
}