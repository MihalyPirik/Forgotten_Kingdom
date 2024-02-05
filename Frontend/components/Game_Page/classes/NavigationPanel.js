import { Panel } from "./Panel.js"


export class NavigationPanel extends Panel {
    constructor(x, y, radius, template, eventName, game, direction, forwardId, backwardId) {
        super(x, y, radius, template, eventName)
        this.#SetContextX(game, direction)
        this.#SetButtons(game, direction, template, forwardId, backwardId)
    }
    #SetContextX(game, direction) {
        if (direction == 'y') {
            if (game.currentBlockX == game.isometricBlocks.length - 1) {
                this.context = game.isometricBlocks[0][game.currentBlockY]
            }
            else {
                this.context = game.isometricBlocks[game.currentBlockX + 1][game.currentBlockY]
            }
        }
        else if (direction = 'x') {
            if (game.currentBlockY == game.isometricBlocks[game.currentBlockX].length - 1) {
                this.context = game.isometricBlocks[game.currentBlockX][0]
            }
            else {
                this.context = game.isometricBlocks[game.currentBlockX][game.currentBlockY + 1]
            }
        }
    }
    #SetButtons(game, direction, template, forwardId, backwardId) {
        const templateContent = template.content.cloneNode(true)
        const forwardButton = templateContent.getElementById(forwardId)
        const backwardButton = templateContent.getElementById(backwardId)
        if (direction == 'x') {
            forwardButton.addEventListener('click', () => {
                if (game.currentBlockY == game.isometricBlocks[game.currentBlockX].length - 1) {
                    game.ChangeCurrentIsometricBlock(game.currentBlockX, 0)
                }
                else {
                    game.ChangeCurrentIsometricBlock(game.currentBlockX, game.currentBlockY + 1)
                }
            })
            backwardButton.addEventListener('click', () => {
                if (game.currentBlockY == 0) {
                    game.ChangeCurrentIsometricBlock(game.currentBlockX, game.isometricBlocks[game.currentBlockY].length - 1)
                }
                else {
                    game.ChangeCurrentIsometricBlock(game.currentBlockX, game.currentBlockY - 1)
                }
            })
        }
        if (direction = 'y') {
            forwardButton.addEventListener('click', () => {
                if (game.currentBlockX == game.isometricBlocks.length - 1) {
                    game.ChangeCurrentIsometricBlock(0, game.currentBlockY)
                }
                else {
                    game.ChangeCurrentIsometricBlock(game.currentBlockX + 1, game.currentBlockY)
                }
            })
            backwardButton.addEventListener('click', () => {
                if (game.currentBlockX == 0) {
                    game.ChangeCurrentIsometricBlock(game.isometricBlocks.length - 1, game.currentBlockY)
                }
                else {
                    game.ChangeCurrentIsometricBlock(game.currentBlockX - 1, game.currentBlockY)
                }
            })
        }
        this.element.innerHTML = ""
        this.element.append(templateContent)
    }
}