axios.defaults.baseURL = "https://forgottenkingdom.cyclic.app/";

// GET

export const getAllEnemies = (playerId) => {
  return axios
    .get("/" + playerId + "/enemies")
    .then(async (res) => {
      return await res.data.data;
    })
    .catch(async (err) => {
      return await err;
    });
};

export const getBlockEnemies = (playerId, blockX, blockY) => {
  return axios
    .get("/" + playerId + "/enemies/" + blockX + "/" + blockY)
    .then(async (res) => {
      return await res.data.data;
    })
    .catch(async (err) => {
      return await err;
    });
};

// POST

export const postEnemy = (playerId, data) => {
    return axios
    .post("/" + playerId + "/enemies", data)
    .then(async (res) => {
      return await res.data.data;
    })
    .catch(async (err) => {
      return await err.response.data.message;
    });
}

// PUT

export const putEnemy = (playerId, enemyId, data) => {
  return axios
    .put("/" + playerId + "/enemies/" + enemyId, data)
    .then(async (res) => {
      return await res.data;
    })
    .catch(async (err) => {
      return await err.response.data.message;
    });
};

// DELETE

export const deleteEnemy = (playerId, enemyId) => {
  return axios
    .delete("/" + playerId + "/enemies/" + enemyId)
    .then(async (res) => {
      return await res.data.data;
    })
    .catch(async (err) => {
      return await err;
    });
};
