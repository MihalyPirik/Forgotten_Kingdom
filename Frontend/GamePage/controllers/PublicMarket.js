import { deleteOffer, getAllOffer, postOffer } from "../../services/marketService.js";
import { putPlayer } from "../../services/playerService.js";
import { PanelView } from "../views/view.js";

export function InputChange(e) {
    
}

export async function BuyOffer(offerId,game) {
    const offer = (await getAllOffer('offer_id='+"'"+offerId+"'"))[0]

    deleteOffer(offerId)
    const soughtValue = game.player.inventory[offer.soughtType]-offer.soughtAmount
    const offeredValue = game.player.inventory[offer.offeredType]+offer.offeredAmount
    putPlayer({
        [offer.soughtType]:soughtValue,
        [offer.offeredType]:offeredValue
    })
    game.player.inventory[offer.soughtType]=soughtValue
    game.player.inventory[offer.offeredType]=offeredValue
    PanelView.DeleteOffer(offer.offer_id)
}

export async function AddNewOffer(event) {
    event.preventDefault()
    const data = {}
    new FormData(event.target).forEach((value,key)=>{
data[key] = value
    })
   PanelView.AddNewOffer(await postOffer(data))
}