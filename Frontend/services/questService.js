import { base } from './base.js';

// GET

export const getQuests = (query = '') => {
  // return base('/quest?is_active=false&withoutZero=0&sort_by=is_mainstory', 'GET')
  return base(`/quest?${query}`, 'GET')
};

// POST

export const postQuest = (data) => {
  return base('/quest', 'POST', data)
}

// PUT

export const putQuest = (questId, data) => {
  return base('/quest/' + questId, 'PUT', data)
};

// DELETE

export const deleteQuest = (questId) => {
  return base('/quest/' + questId, 'DELETE')
};
