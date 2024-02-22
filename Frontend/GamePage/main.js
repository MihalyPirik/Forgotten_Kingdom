import { GameController } from './controllers/Game.js'
import { Player } from './models/Player.js'
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
import { GameView, PanelView } from './views/view.js'
import { InitEvents } from './controllers/UI.js'
const gameCanvas = document.querySelector('canvas')




const urlparams=new URLSearchParams(window.location.search)
const token=urlparams.get("token")

const p = document.getElementById('mouseCoordinates')
const arrow1=document.getElementById('arrow1')
const arrow2=document.getElementById('arrow2')
 const parsedToken=token?JSON.parse(atob(token.split('.')[1])):'e8c92350-c59c-11ee-aab5-e980bbd7a2f9'
gameCanvas.width = innerWidth * 0.5
gameCanvas.height = innerHeight

const character=new Image()
character.src='./assets/maincharacters/char_a_p1_0bas_humn_v01.png'


window.addEventListener('load', () => {
  const gameView=new GameView(gameCanvas)
  const game= new GameController([
    [Kastély,Malom,Bánya,Szörny1],
    [Kovács,Piac,Erdő,Szörny2],
    [Farm,Horgásztó,Szörny3],
    [Szörny4]
  ],gameView)
gameView.game=game

  
init(game)

async function init(game)
{
  const playerD=await getAllData(parsedToken)
  const inventory=await getInventory(parsedToken)

game.player=new Player(playerD.player_name,character,playerD.HP,playerD.money,inventory,game)
InitEvents(game)
// game.player=new Player('valami',character,100,100,{},game)

window.addEventListener('keydown', (e) => {if(e.key=='f'){if(game.debug){game.debug = false}else{game.debug=e}} })
  gameView.canvas.addEventListener('click',(e)=>{
    p.innerText='Percantage coordinates:\n\n'+'Xcoord:'+e.offsetX/game.width+'\n\nYcoord:'+e.offsetY/game.width
})

game.isometricBlocks[game.currentBlockX][1](game)

gameView.SetBackGround(game.currentBlock.backGround.src)
  arrow1.style.left=game.width/3/2-50+'px'
arrow1.style.top=game.height*0.86+'px'


arrow2.style.left=game.width/3*2+game.width/3/2-50+'px'
arrow2.style.top=game.height*0.86+'px'




let previousTime = 0
  const animate = (timeStamp) => {
    const deltaTime = timeStamp - previousTime
    previousTime = timeStamp
    game.gameLoop(deltaTime)
    requestAnimationFrame(animate)
  }
  animate(0)
}

  
})