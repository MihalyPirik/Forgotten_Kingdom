import { base } from "./base.js";

// GET

export const getAllEnemies = (query='') => {
  return base("/enemies?"+query,'GET')
};

// POST

export const postEnemy = (data) => {
    return base("/enemies", 'POST' ,data)
}

// PUT

export const putEnemy = (enemyId, data) => {
  return base("/enemies/" + enemyId, 'PUT' ,data)
};

// DELETE

export const deleteEnemy = (enemyId) => {
  return base("/enemies/" + enemyId, 'DELETE')
};
