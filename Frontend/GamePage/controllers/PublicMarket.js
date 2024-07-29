import { buyOffer, deleteOffer, getAllOffer, postOffer } from '../../services/marketService.js';
import { putPlayer } from '../../services/playerService.js';
import { PanelView } from '../views/view.js';

export function InputChange(e) {

}

export async function BuyOffer(offerId, game) {
    const offer = (await getAllOffer('offer_id=' + "'" + offerId + "'"))[0];
    const soughtValue = game.player.inventory[offer.soughtType] - offer.soughtAmount;
    const offeredValue = game.player.inventory[offer.offeredType] + offer.offeredAmount;

    buyOffer(offerId, {
        [offer.soughtType]: offer.soughtAmount,
        [offer.offeredType]: offer.offeredAmount
    })

    game.player.inventory[offer.soughtType] = soughtValue
    game.player.inventory[offer.offeredType] = offeredValue
    PanelView.DeleteOffer(offerId)
}

export async function AddNewOffer(event, game) {
    event.preventDefault()
    const data = {};
    new FormData(event.target).forEach((value, key) => {
        data[key] = value
    })
    game.player.inventory[data.offeredType] -= data.offeredAmount
    PanelView.AddNewOffer(await postOffer(data))
}

export async function DeleteOwnedOffer(offerID, game) {
    deleteOffer(offerID)
    PanelView.DeleteOffer(offerID)
    const offer = (await getAllOffer('offer_id=' + "'" + offerID + "'"))[0]
    game.player.inventory[offer.offeredType] += offer.offeredAmount
}