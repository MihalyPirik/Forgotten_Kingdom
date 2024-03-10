export class Panel {
    constructor(id, x, y, radius, isNavigationPanel ,context = null) {
      this.id=id
        this.x = x
        this.y = y
        this.isVisible=false
        this.isNavigationPanel=isNavigationPanel
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