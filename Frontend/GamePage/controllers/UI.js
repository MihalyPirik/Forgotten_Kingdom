import { GameView } from "../views/view.js";
export const Events=(game)=>
{




document.getElementById('inventory').addEventListener('click',(e)=>
{
    GameView.Inventory(game)
    document.getElementsByClassName('closeButton')[0].addEventListener('click',(e)=>
    {
        e.target.parentElement.remove()
    },{once:true})
    
}
    
)
}
