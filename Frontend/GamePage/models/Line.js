import { Point } from "./Point.js";

export class Line {
    /**
     * 
     * @param {Point} startPoint 
     * @param {Point} endPoint 
     * @param {number} width 
     */
    constructor(startPoint, endPoint, width = 10) {
        this.startPoint = startPoint
        this.endPoint = endPoint
        this.width = width
    }
    CheckCollision(entity) {
        const x = entity.objX
        const y = entity.objY
        const a1 = this.startPoint.x;
        const a2 = this.startPoint.y;
        const b1 = this.endPoint.x;
        const b2 = this.endPoint.y;

        if (

            ((x >= a1 && x <= b1) || (x >= b1 && x <= a1)) && ((y >= a2 && y <= b2) || (y >= b2 && y <= a2))) {
            const p1 = entity.objX;
            const p2 = entity.objY;
            const n1 = b1 - a1
            const n2 = b2 - a2
            const x = ((n2 * n1 * (p2 - a2) + n2 * n2 * a1 + n1 * n1 * p1) / (n2 * n2 + n1 * n1))
            const y = (n2 * (x - a1) / n1) + a2
            const distance = Math.hypot(p1 - x, p2 - y)
            if (distance < this.width) {
                const dx = p1 - x
                const dy = p2 - y
                const unitX = dx / distance
                const unitY = dy / distance
                return new Point(p1 + 0.5 * unitX, p2 + 0.5 * unitY)
            }
        }
        return false
    }

}