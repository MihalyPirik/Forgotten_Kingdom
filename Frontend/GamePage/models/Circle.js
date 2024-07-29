import { Point } from "./Point.js"

export class Circle {
    constructor(x, y, radius) {
        this.x = x
        this.y = y
        this.radius = radius
        this.a = y + radius
        this.b = y - radius
        this.c = x + radius
        this.d = x - radius
    }
    CheckCollision(entity) {
        if
            (
            entity.objY < this.a && entity.objY > this.b
            &&
            entity.objX < this.c && entity.objX > this.d
        ) {
            const dx = this.x - entity.objX
            const dy = this.y - entity.objY
            const distance = Math.hypot(dx, dy)
            const sumOfRadius = this.radius + entity.radius
            if (distance < sumOfRadius) {
                const unitX = dx / distance
                const unitY = dy / distance
                return new Point(entity.objX - 0.5 * unitX, entity.objY - 0.5 * unitY)
            }
        }
        return false
    }
}