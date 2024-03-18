axios.defaults.baseURL = "https://forgottenkingdom.cyclic.app";
axios.defaults.headers.common['Authorization'] = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjI5MThiYTIwLWUxZTktMTFlZS1hYWJiLWIxNWIxZTAyYTRhNiIsImlhdCI6MTcxMDc1NTg5NSwiZXhwIjoxNzEwNzU5NDk1fQ.BVcXVYBkLzfi6-zk8uUpBsE_lCrw5KdwSbb1HM9aoDw";

// GET

export const getAllEnemies = () => {
  return axios
    .get("/enemies")
    .then(async (res) => {
      return await res.data.data;
    })
    .catch(async (err) => {
      return await err;
    });
};

export const getBlockEnemies = (blockX, blockY) => {
  return axios
    .get("/enemies/" + blockX + "/" + blockY)
    .then(async (res) => {
      return await res.data.data;
    })
    .catch(async (err) => {
      return await err;
    });
};

// POST

export const postEnemy = (data) => {
    return axios
    .post("/enemies", data)
    .then(async (res) => {
      return await res.data.data;
    })
    .catch(async (err) => {
      return await err.response.data.message;
    });
}

// PUT

export const putEnemy = (enemyId, data) => {
  return axios
    .put("/enemies/" + enemyId, data)
    .then(async (res) => {
      return await res.data;
    })
    .catch(async (err) => {
      return await err.response.data.message;
    });
};

// DELETE

export const deleteEnemy = (enemyId) => {
  return axios
    .delete("/enemies/" + enemyId)
    .then(async (res) => {
      return await res.data.data;
    })
    .catch(async (err) => {
      return await err;
    });
};
