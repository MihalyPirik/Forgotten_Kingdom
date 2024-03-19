import { base } from "./base.js";


// GET

export const getAllEnemies = () => {
  return base("/enemies",'GET')
};

export const getBlockEnemies = (blockX, blockY) => {
  return base("/enemies/" + blockX + "/" + blockY,'GET')
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
