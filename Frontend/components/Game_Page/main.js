import { Game } from './classes/Game.js'
import { Line } from "./classes/Line.js"
import { NavigationPanel } from './classes/NavigationPanel.js'
import { Panel } from './classes/Panel.js'
import { Point } from "./classes/Point.js"
import {isometricBlock} from './classes/isometricBlock.js'
import { getAllData } from './services/playerService.js'
const gameCanvas = document.querySelector('canvas')




// const urlparams=new URLSearchParams(window.location.search)
// const token=urlparams.get("token")

const p = document.getElementById('mouseCoordinates')
const arrow1=document.getElementById('arrow1')
const arrow2=document.getElementById('arrow2')
//  const parsedToken=JSON.parse(atob(token.split('.')[1]))
//  console.log(parsedToken.id);
gameCanvas.width = innerWidth * 0.5
gameCanvas.height = innerHeight
window.addEventListener('resize', () => {
  gameCanvas.width = innerWidth * 0.5
  gameCanvas.height = innerHeight
})

const mill=new Image()
mill.src='./assets/blocks/Mill.png'
const farm=new Image()
farm.src='./assets/blocks/Farm.png'

window.addEventListener('load', () => {




  const game = new Game(gameCanvas,[[new isometricBlock('Mill',mill)]])



game.canvas.style.backgroundImage=`url(${game.isometricBlocks[game.currentBlockX][game.currentBlockY].backGround.src})`

  window.addEventListener('keydown', (e) => { game.player.move.event = e; game.debug = e })
      window.addEventListener('keyup', () => { game.player.move.event = null; game.debug = false })
  game.canvas.addEventListener('click',(e)=>{
    p.innerText='Percantage coordinates:\n\n'+'Xcoord:'+e.offsetX/game.width+'\n\nYcoord:'+e.offsetY/game.width
})





game.isometricBlocks[game.currentBlockX][game.currentBlockY].barriers.push(
  new Line(
    new Point(game.canvas.width * 0.2,game.canvas.height * 0.775),
    new Point(game.canvas.width * 0.5, game.canvas.height * 0.94)
    ),
  new Line(
    new Point(game.canvas.width * 0.2, game.canvas.height * 0.775),
    new Point(game.canvas.width * 0.5, game.canvas.height * 0.67)
    ),
    new Line(
      new Point(game.canvas.width * 0.5, game.canvas.height * 0.67),
      new Point(game.canvas.width * 0.78, game.canvas.height * 0.78)
    ),
    new Line(
      new Point(game.canvas.width * 0.78, game.canvas.height * 0.78),
      new Point(game.canvas.width * 0.5, game.canvas.height * 0.938)
    )
  )
  


arrow1.style.left=game.width/3/2-50+'px'
arrow1.style.top=game.height*0.86+'px'


arrow2.style.left=game.width/3*2+game.width/3/2-50+'px'
arrow2.style.top=game.height*0.86+'px'


game.isometricBlocks[game.currentBlockX].push(new isometricBlock('Farm',farm))
game.isometricBlocks[game.currentBlockX][game.currentBlockY].panels.push(new Panel(game.width*0.3,game.height*0.66,100,document.querySelector('template'),'pop-up',game))

// arrow1.addEventListener('click',()=>
// {
//   if(game.currentBlockY==game.isometricBlocks[game.currentBlockX].length-1)
//   {
//     game.ChangeCurrentIsometricBlock(game.currentBlockX,0)
//   }
//   else
//   {
//     game.ChangeCurrentIsometricBlock(game.currentBlockX,game.currentBlockY+1)
//   }
// })

// arrow2.addEventListener('click',()=>
// {
//   if(game.currentBlockX==game.isometricBlocks.length-1)
//   {
//     game.ChangeCurrentIsometricBlock(0,game.currentBlockY)
//   }
//   else
//   {
//     game.ChangeCurrentIsometricBlock(game.currentBlockX+1,game.currentBlockY)
//   }
// })


game.isometricBlocks[game.currentBlockX][game.currentBlockY].panels.push
(
  new NavigationPanel(0.32*game.width,0.82*game.height,50,document.getElementById('navigationPanel'),'navigationX',game,'x','forward','backward')
)
const s=async()=>{

console.log(await getAllData(parsedToken.id))
}



  let previousTime = 0
  const animate = (timeStamp) => {
    const deltaTime = timeStamp - previousTime
    previousTime = timeStamp
    game.Render(deltaTime)

    requestAnimationFrame(animate)
  }
  animate(0)


})