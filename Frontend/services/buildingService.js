import { base } from "./base.js";

// GET

export const getAllBuilding = () => {
  return base("/buildings",'GET')
};

// POST

export const postBuilding = (data) => {
  return base("/buildings", 'POST', data)
};

// PUT

export const putBuilding = (buildingId, data) => {
  return base("/buildings/" + buildingId, 'PUT' ,data)
};

// DELETE

export const deleteBuilding = (buildingId) => {
  return base("/buildings/" + buildingId, 'DELETE')
};
