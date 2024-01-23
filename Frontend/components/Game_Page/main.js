import { Game } from "./Game.js"
import { Line } from "./Line.js"
import { Player } from "./Player.js"
import { Point } from "./Point.js"
const gameCanvas = document.querySelector('canvas')

const panel = document.querySelector('template').content.querySelector('div#gamePanel')
const p = document.getElementById('mouseCoordinates')
const arrow1=document.getElementById('arrow1')
const arrow2=document.getElementById('arrow2')

gameCanvas.width = innerWidth * 0.5
gameCanvas.height = innerHeight
window.addEventListener('resize', () => {
  gameCanvas.width = innerWidth * 0.5
  gameCanvas.height = innerHeight
})

const mill=new Image()
mill.src='./assets/blocks/Mill.png'


window.addEventListener('load', () => {

  


  const game = new Game(gameCanvas,[[mill]])



game.canvas.style.backgroundImage=`url(${game.isometricBlocks[0][0].src})`

  window.addEventListener('keydown', (e) => { game.player.move.event = e; game.debug = e })
      window.addEventListener('keyup', () => { game.player.move.event = null; game.debug = false })
  game.canvas.addEventListener('click',(e)=>{
    p.innerText='Percantage coordinates:\n\n'+'Xcoord:'+e.offsetX/game.width+'\n\nYcoord:'+e.offsetY/game.width
})





game.barriers[0]=[
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
  ]
  

arrow1.style.left=game.width/3/2-50+'px'
arrow1.style.top=game.height*0.86+'px'


arrow2.style.left=game.width/3*2+game.width/3/2-50+'px'
arrow2.style.top=game.height*0.86+'px'




  /**
       * @param x Az objektum x koordinátája.
       */
  const IsOnLine = (a1, a2, b1, b2, x, y) => {
    const distance = (Math.abs((b2 - a2) * x - (b1 - a1) * y + b1 * a2 - b2 * a1)) / (Math.pow((Math.pow(b2 - a2, 2) + Math.pow(b1 - a1, 2)), 0.5))
    return distance < 20
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