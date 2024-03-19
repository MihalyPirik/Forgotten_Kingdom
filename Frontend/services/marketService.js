import { base } from "./base.js";

// GET

export const getAllOffer = () => {
  return base("/market",'GET')
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

// DELETE

export const deleteOffer = (offerId) => {
  return base("/market/" + offerId,'DELETE')
};