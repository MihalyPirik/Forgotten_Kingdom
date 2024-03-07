import { PanelController } from "../controllers/Panel.js";
import { GameView } from "./view.js";


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

    window.addEventListener('keydown',(e)=>{game.player.move.event=e})
    window.addEventListener('keyup',()=>{game.player.move.event=null})
    document.getElementById('game').addEventListener('mousemove',(e)=>{PanelController.GetEntityOnMouse(e,game.currentBlock.entities)})
    document.getElementById('game').addEventListener('click',(e)=>{game.player.Attack(e)})
}