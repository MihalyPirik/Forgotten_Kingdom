import { PanelController } from "../controllers/Panel.js";
import { Story } from "../controllers/Story.js";
import { GameView, PanelView } from "./view.js";


export const InitEvents=(game)=>
{

    const ShowPanel=(id,handler)=>
    {
        
            const panel = handler(game)
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
    
    
    addEventListener("panelShowed",(e)=>{
        if(e.detail.panel.id=="Action")
        {
          const action = e.detail.panel.context.action
          // Favágás, Horgászás, Bányászás, Farmolás
          switch (action) {
            case "Favágás":
              
              break;
          
            default:
              break;
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
    })
    addEventListener("panelHide",()=>{
        removeEventListener('mousedown',game.player.Action)
    })


    document.getElementById('sword').addEventListener('click',(e)=>{ShowPanel('sword',PanelView.ToolPanel,e.target)},{once:true})
    
}