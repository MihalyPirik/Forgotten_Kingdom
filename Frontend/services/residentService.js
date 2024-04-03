import { base } from "./base.js";

// GET

export const getAllResidents = (query) => {
  return base("/residents?"+query,'GET')
};

// POST

export const postResident = (data) => {
    return base("/residents", "POST", data)
}

// PUT

export const putResident = (residentId, data) => {
  return base("/residents/" + residentId, "PUT", data)
};

// DELETE

export const deleteResident = (residentId) => {
  return base("/residents/" + residentId, 'DELETE')
};