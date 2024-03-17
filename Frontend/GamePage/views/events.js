import { PanelController } from "../controllers/Panel.js";
import { Story } from "../controllers/Story.js";
import { GameView, PanelView } from "./view.js";


export const InitEvents=(game)=>
{

    const ShowPanel=(id,handler)=>
    {
        
            handler(game)
            const panel=document.getElementsByClassName('closeButton')[0]
            panel.addEventListener('click',()=>{HidePanel(id,panel,handler)},{once:true})

    }
    const HidePanel=(id,panel,handler)=>
    {
        panel.parentElement.remove()
        document.getElementById(id).addEventListener('click',()=>{ShowPanel(id,handler)},{once:true})
    }
    document.getElementById('inventory').addEventListener('click',()=>{ShowPanel('inventory',GameView.InventoryPanel)},{once:true})

    addEventListener('keydown',(e)=>{game.player.move.event=e})
    addEventListener('keyup',()=>{game.player.move.event=null})
    

    document.getElementById('game').addEventListener('mousemove',(e)=>{PanelController.GetEntityOnMouse(e,game.currentBlock.entities)})
    document.getElementById('game').addEventListener('click',(e)=>{game.player.Attack(e)})
    
    
    addEventListener("panelShowed",(e)=>{
        if(e.detail.panel.id=="Action")
        {
            if(game.currentBlockX == 2 && game.currentBlockY == 1)
          {
            
            e.target.querySelector('input[type=button]').addEventListener('click',game.player.Action)
          }
          else
          {
            e.target.querySelector('input[type=button]').remove()
            addEventListener('mousedown',game.player.Action)
          }
          PanelView.ShowProgress()
        }
        if(e.detail.panel.id=="NPCPanel")
        {
            PanelView.NPCPanel(e.detail.panel,e.target)
        }
    })
    addEventListener("panelHide",()=>{
        removeEventListener('mousedown',game.player.Action)
    })
    
}