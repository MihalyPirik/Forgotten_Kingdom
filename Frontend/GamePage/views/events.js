import { PanelController } from "../controllers/Panel.js";
import { InputChange } from "../controllers/PublicMarket.js";
import { Story } from "../controllers/Story.js";
import { GameView, PanelView } from "./view.js";


export const InitEvents=(game)=>
{

    const ShowPanel=async(id,handler,params=[])=>
    {
      let panel
        if(!(params instanceof Array)){
          panel = await handler(game)
        }
            else
            {
              console.log(params);
              panel = await handler(game,...params)
            }
            const btn=panel.querySelector('.closeButton')
            btn.addEventListener('click',()=>{HidePanel(id,panel,handler)},{once:true})

    }
    const HidePanel=(id,panel,handler)=>
    {
        panel.remove()
        document.getElementById(id).addEventListener('click',()=>{ShowPanel(id,handler)},{once:true})
    }
    document.getElementById('inventory').addEventListener('click',()=>{ShowPanel('inventory',PanelView.InventoryPanel)},{once:true})

    addEventListener('keydown',(e)=>{game.player.move.event=e})
    addEventListener('keyup',()=>{game.player.move.event=null})
    

    document.getElementById('game').addEventListener('mousemove',(e)=>{PanelController.GetEntityOnMouse(e,game.currentBlock.entities)})
    document.getElementById('game').addEventListener('click',(e)=>{game.player.Attack(e)})
    
    let TogglePlayerActionWrapperReference
    function TogglePlayerAction(e,action,game) {
  let isInAction = game.player.isAction.is
      game.player.isAction.is = isInAction = !isInAction
      if(isInAction)
      {
        game.player.isAction.action=action
      }
    }
    addEventListener("panelShowed",(e)=>{
      
        if(e.detail.panel.id=="Action")
        {
          PanelView.BindProgress(game.player.isAction.timer)
          // if(game.player.tools.length==0)
          // {
          //   e.target.innerHTML='<p>Flash tanárúr üzenete:</p><p>Szükséged lesz egy eszközre, hogy ezt csináld</p>'
          //   return
          // }
          if(e.detail.panel.context.action=='Fish')
          {
            const but = PanelView.SetFishActionView(e.target)
            game.player.isAction.action='Fish'
            but.addEventListener('click',game.player.Action)
          }
          else{
          function TogglePlayerActionWrapper(eMouse)
    {
TogglePlayerAction(eMouse,e.detail.panel.context.action,game)
    }
    TogglePlayerActionWrapperReference=TogglePlayerActionWrapper
    
          // Favágás, Horgászás, Bányászás, Farmolás
    
          addEventListener('mousedown',TogglePlayerActionWrapper)
          addEventListener('mouseup',TogglePlayerActionWrapper)
  }
        }
        if(e.detail.panel.id=="NPCPanel")
        {
            PanelView.NPCPanel(e.detail.panel,e.target)
        }
        if(e.detail.panel.id=="enterInterior")
        {
          document.querySelector('#enterInterior input[type=button]').addEventListener('click',()=>{
            game.currentBlock = game.currentBlock.interior(game)
          },{once:true})
        }
        if(e.detail.panel.id=="leaveInterior")
        {
          document.querySelector('#leaveInterior input[type=button]').addEventListener('click',()=>{
            game.currentBlock = game.isometricBlocks[game.currentBlockX][game.currentBlockY](game)
          },{once:true})
        }
        if(e.detail.panel.id=='shop')
        {
          e.target.querySelectorAll('input[type=number]').forEach(el=>{
            el.addEventListener('change',InputChange)
          })
          PanelView.ShowShopItems(e.target,game)
          e.target.querySelector('#newOffer').addEventListener('click',(e)=>ShowPanel('newOffer',PanelView.ShowAddNewOfferPanel,[e]))
        }
    })
    addEventListener("panelHide",(e)=>{
      if(e.detail.panel.id=="Action")
      {
        removeEventListener('mousedown',TogglePlayerActionWrapperReference)
        removeEventListener('mouseup',TogglePlayerActionWrapperReference)
      }
    })

    document.getElementById('sword').addEventListener('click',(e)=>{ShowPanel('sword',PanelView.ToolPanel,e.target)},{once:true})
}