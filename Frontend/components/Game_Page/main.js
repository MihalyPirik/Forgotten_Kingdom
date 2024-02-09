import { Game } from './classes/Game.js'
import { Player } from './classes/Player.js'
import { Malom } from './isometricBlocks/mill.js'
import {Kastély} from './isometricBlocks/castle.js'
import {Bánya} from './isometricBlocks/cave.js'
import {Kovács} from './isometricBlocks/blacksmith.js'
import {Farm} from './isometricBlocks/farm.js'
import {Horgásztó} from './isometricBlocks/fishingPond.js'
import {Erdő} from './isometricBlocks/forest.js'
import {Piac} from './isometricBlocks/market.js'
import {Szörny1} from './isometricBlocks/monsterOne.js'
import {Szörny2} from './isometricBlocks/monsterTwo.js'
import {Szörny3} from './isometricBlocks/monsterThree.js'
import {Szörny4} from './isometricBlocks/monsterFour.js'
import { getAllData, getInventory } from './services/playerService.js'
const gameCanvas = document.querySelector('canvas')




const urlparams=new URLSearchParams(window.location.search)
const token=urlparams.get("token")

const p = document.getElementById('mouseCoordinates')
const arrow1=document.getElementById('arrow1')
const arrow2=document.getElementById('arrow2')
 const parsedToken=token?JSON.parse(atob(token.split('.')[1])):'e8c92350-c59c-11ee-aab5-e980bbd7a2f9'
gameCanvas.width = innerWidth * 0.5
gameCanvas.height = innerHeight
window.addEventListener('resize', () => {
  gameCanvas.width = innerWidth * 0.5
  gameCanvas.height = innerHeight
})



const farm=new Image()
farm.src='./assets/blocks/Farm.png'
window.addEventListener('load', () => {
  const game = new Game(gameCanvas,[
    [Kastély,Malom,Bánya,Szörny1],
    [Kovács,Piac,Erdő,Szörny2],
    [Farm,Horgásztó,Szörny3],
    [Szörny4]
  ])
init(game)
// [['kastely','malom','banya','szörny1'],
// ['kovács','piac','erdo','szörny2'],
// ['farm','horgásztó','szörny3'],
// ['szörny4']]
/**
 * 
 * @param {Game} game
 */
async function init(game)
{
  const playerD=await getAllData(parsedToken.id)
  const inventory=await getInventory(parsedToken.id)
game.player=new Player(playerD.player_name,playerD.HP,playerD.money,inventory,game)


window.addEventListener('keydown', (e) => { game.player.move.event = e; game.debug = e })
      window.addEventListener('keyup', () => { game.player.move.event = null; game.debug = false })
  game.canvas.addEventListener('click',(e)=>{
    p.innerText='Percantage coordinates:\n\n'+'Xcoord:'+e.offsetX/game.width+'\n\nYcoord:'+e.offsetY/game.width
})

game.isometricBlocks[game.currentBlockX][1](game)

  arrow1.style.left=game.width/3/2-50+'px'
arrow1.style.top=game.height*0.86+'px'


arrow2.style.left=game.width/3*2+game.width/3/2-50+'px'
arrow2.style.top=game.height*0.86+'px'




let previousTime = 0
  const animate = (timeStamp) => {
    const deltaTime = timeStamp - previousTime
    previousTime = timeStamp
    game.Render(deltaTime)
    requestAnimationFrame(animate)
  }
  animate(0)
}

  
})