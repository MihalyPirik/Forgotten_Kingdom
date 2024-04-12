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
import { getAllData, getInventory } from '../services/playerService.js'
import { GameView, PanelView } from './views/view.js'
import { Story } from './controllers/Story.js'
import { InitEvents } from './views/events.js'
import { getQuests } from '../services/questService.js'
import { getAllTools } from '../services/toolService.js'
// import {createApp, ref} from './node_modules/vue/dist/vue.esm-browser.js'

const gameCanvas = document.querySelector('canvas')



// const app = createApp({
//   setup()
//   {
//     const a = ref("safsdff")
//     return {a}
//   }
// }
// ).mount('#mouseCoordinates')

// const token = localStorage.getItem('token')
// if(!token)
// {
//   document.querySelector('body').innerHTML = '<h1>Nem vagy bejelentkezve</h1>'
//   throw new Error('Script execution was terminated due to the absence of an auetntication token!')
// }

const p = document.getElementById('mouseCoordinates')

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

Story.gameController = game
Story.gameView = gameView

async function init(game)
{
  
const playerData = await getAllData()
const inventory = await getInventory()

game.player = new Player(playerData.player_name,character,playerData.HP,playerData.money,inventory,game,playerData.tools)
game.player.tools = playerData.ToolTypes

  // game.player=new Player('valami',character,100,100,{stone:100,wood:100,fish:100,coal:100,iron:100,wheat:100},game)
InitEvents(game)


addEventListener('keydown', (e) => {if(e.key=='f'){if(game.debug){game.debug = false}else{game.debug=e}} })
  gameView.canvas.addEventListener('click',(e)=>{
    p.innerText='Percantage coordinates:\n\n'+'Xcoord:'+e.offsetX/game.width+'\n\nYcoord:'+e.offsetY/game.height
})

await game.isometricBlocks[playerData.blockX][playerData.blockY](game)

game.gameView.BindPlayerHealth(game.player)
const questList = await getQuests("is_active=true&is_completed=false")

game.player.quests=questList
console.log(questList);
PanelView.QuestPanelShow(questList,game.isometricBlocks)




let previousTime = 0
  const animate = (timeStamp) => {
    const deltaTime = timeStamp - previousTime
    previousTime = timeStamp
    game.gameLoop(deltaTime)
    requestAnimationFrame(animate)
  }
  animate(0)
}

  
},{once:true})