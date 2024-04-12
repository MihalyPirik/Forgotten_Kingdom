import { base } from "./base.js";

// GET

export const getAllData = () => {
  return base('/player','GET')
};

export const getAllItems = () => 
{
  return base('/player/items', 'GET')
}

export const getInventory = () => {
  return base("/player" + "/inventory", 'GET')
};

// PUT

export const putPlayer = (data) => {
  return base("/player", 'PUT', data)
};

// DELETE

export const deletePlayer = () => {
  return base("/player", 'DELETE')
};