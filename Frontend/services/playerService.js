import { base } from "./base.js";

// GET

export const getAllData = () => {
  return base('/player','GET')
};

export const getInventory = () => {
  return base("/player" + "/inventory", 'GET')
};

export const getQuests = () => {
  // return base("/quest?is_active=false&withoutZero=0&sort_by=is_mainstory", 'GET')
  return base("/quest",'GET')
};

// PUT

export const putPlayer = (data) => {
  return base("/player", 'PUT', data)
};

// DELETE

export const deletePlayer = () => {
  return base("/player", 'DELETE')
};