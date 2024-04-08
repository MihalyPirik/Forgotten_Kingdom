import { base } from './base.js'

export const getAllEnemyType = (query='') => {
    return base("/enemyType?"+query,'GET')
  };