export class Panel {
    constructor(name, id, x, y, radius, context = null) {
      this.name=name
      this.id=id
        this.x = x
        this.y = y
        this.isVisible=false
        this.context = context
        this.radius = radius
    }
    IsVisible=(player)=>
    {
        if(Math.abs(player.objX-this.x)<this.radius
  && 
  Math.abs(player.objY-this.y)<this.radius
  )
  {
    return true
  }
  return false
    }
}