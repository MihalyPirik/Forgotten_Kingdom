import { base } from "./base.js";

// GET

export const getAllOffer = (query) => {
  return base("/market?"+query,'GET')
};

export const getPlayerOffer = () => {
  return base("/market/playerOffer",'GET')
};

// POST

export const postOffer = (data) => {
    return base("/market", 'POST' ,data)
}

// PUT

export const putOffer = (offerId, data) => {
  return base("/market/" + offerId, 'PUT', data)
};


export const buyOffer = (offerId, data) => {
  return base("/market/buy/"+offerId, 'PUT', data)
}


// DELETE

export const deleteOffer = (offerId) => {
  return base("/market/" + offerId,'DELETE')
};