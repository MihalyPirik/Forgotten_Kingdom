axios.defaults.baseURL = "https://forgottenkingdom.cyclic.app/";

// axios.defaults.headers.common["Authorization"] = "Bearer " + localStorage.getItem("token");
axios.defaults.headers.common["Authorization"] = "Bearer " + "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjI5MThiYTIwLWUxZTktMTFlZS1hYWJiLWIxNWIxZTAyYTRhNiIsImlhdCI6MTcxMDc0NTU3MSwiZXhwIjoxNzEwNzQ5MTcxfQ.nTAw5XSmebQopq_DJShmLRQt0BHnZRvMVt4ZOM3d3aY";

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
