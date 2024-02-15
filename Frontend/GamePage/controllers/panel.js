export class PanelController
{
    /**
 * 
 * @param {GameController} game
 * @param {string} direction 
* @param {Panel} panel 
 * @param {string} forwardId 
 * @param {string} backwardId
 */
    static SetButtons = (game, direction, panelId, forwardId, backwardId) => {
        
        const forwardButton = panelView.panelElement.querySelector('#' + forwardId)
        const backwardButton = panelView.panelElement.querySelector('#' + backwardId)
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