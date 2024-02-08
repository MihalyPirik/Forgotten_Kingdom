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
if (direction == 'x') {
        
    if (game.currentBlockY == game.isometricBlocks[game.currentBlockX].length - 1) {
        forwardButton.value=game.isometricBlocks[game.currentBlockX][0]
    
    }
    else {
        forwardButton.value=game.isometricBlocks[game.currentBlockX][game.currentBlockY + 1]
    }


    if (game.currentBlockY == 0) {
        
        backwardButton.value=game.isometricBlocks[game.currentBlockX][game.isometricBlocks[game.currentBlockX].length - 1]
    }
    else {

        backwardButton.value=game.isometricBlocks[game.currentBlockX][game.currentBlockY - 1]
    }
}
if (direction == 'y') {

    if (game.currentBlockX == game.isometricBlocks.length - 1) {
        forwardButton.value=game.isometricBlocks[0][game.currentBlockY]
    }
    else {
        forwardButton.value=game.isometricBlocks[game.currentBlockX + 1][game.currentBlockY]
    }


    if (game.currentBlockX == 0) {
        backwardButton.value=game.isometricBlocks[game.isometricBlocks.length - 1][game.currentBlockY]
    }
    else {
        backwardButton.value=game.isometricBlocks[game.currentBlockX - 1][game.currentBlockY]
    }

}

if(backwardButton.value=='undefined')
{
    backwardButton.remove()
}
else
{
    forwardButton.addEventListener('click',()=>{
    })
}
if(forwardButton.value=='undefined')
{
    forwardButton.remove()
}
else
{
    backwardButton.addEventListener('click',()=>{
    })
}
}
