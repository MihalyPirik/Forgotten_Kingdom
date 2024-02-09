import { Game } from "../classes/Game.js"
import { Panel } from "../classes/Panel.js"

/**
 * 
 * @param {Game} game
 * @param {string} direction 
* @param {Panel} panel 
 * @param {string} forwardId 
 * @param {string} backwardId
 */
export const SetButtons=(game, direction, panel, forwardId, backwardId)=>
{
const forwardButton=panel.element.querySelector('#'+forwardId)
const backwardButton=panel.element.querySelector('#'+backwardId)
let nextX
let nextY
let previousX
let previousY
if (direction == 'x') {
        
    if (game.currentBlockY == game.isometricBlocks[game.currentBlockX].length - 1) {
        forwardButton.value=game.isometricBlocks[game.currentBlockX][0]
        nextY=0
    }
    else {
        forwardButton.value=game.isometricBlocks[game.currentBlockX][game.currentBlockY + 1]
        nextY=game.currentBlockY + 1
    }


    if (game.currentBlockY == 0) {
        
        backwardButton.value=game.isometricBlocks[game.currentBlockX][game.isometricBlocks[game.currentBlockX].length - 1]
        previousY=game.isometricBlocks[game.currentBlockX].length - 1
    }
    else {

        backwardButton.value=game.isometricBlocks[game.currentBlockX][game.currentBlockY - 1]
        previousY=game.currentBlockY - 1
    }
}
if (direction == 'y') {

    if (game.currentBlockX == game.isometricBlocks.length - 1) {
        forwardButton.value=game.isometricBlocks[0][game.currentBlockY]
        nextX=0
    }
    else {
        forwardButton.value=game.isometricBlocks[game.currentBlockX + 1][game.currentBlockY]
        nextX=game.currentBlockX + 1
    }


    if (game.currentBlockX == 0) {
        backwardButton.value=game.isometricBlocks[game.isometricBlocks.length - 1][game.currentBlockY]
        previousX=game.isometricBlocks.length - 1
    }
    else {
        backwardButton.value=game.isometricBlocks[game.currentBlockX - 1][game.currentBlockY]
        previousX=game.currentBlockX - 1
    }

}
if(backwardButton.value=='undefined')
{
    backwardButton.remove()
}
else
{
    forwardButton.addEventListener('click',()=>{
        console.log(game.isometricBlocks[nextX][nextY])
    })
}
if(forwardButton.value=='undefined')
{
    forwardButton.remove()
}
else
{
    backwardButton.addEventListener('click',()=>{
        console.log(game.isometricBlocks[previousX][previousY])
    })
}

}
