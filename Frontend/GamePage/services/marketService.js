axios.defaults.baseURL = "https://forgottenkingdom.cyclic.app/";

// axios.defaults.headers.common["Authorization"] = "Bearer " + localStorage.getItem("token");
axios.defaults.headers.common["Authorization"] = "Bearer " + "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjI5MThiYTIwLWUxZTktMTFlZS1hYWJiLWIxNWIxZTAyYTRhNiIsImlhdCI6MTcxMDc0NTU3MSwiZXhwIjoxNzEwNzQ5MTcxfQ.nTAw5XSmebQopq_DJShmLRQt0BHnZRvMVt4ZOM3d3aY";

// GET

export const getAllOffer = () => {
  return axios
    .get("/market")
    .then(async (res) => {
      return await res.data.data;
    })
    .catch(async (err) => {
      return await err;
    });
};

export const getPlayerOffer = (playerId) => {
  return axios
    .get("/market/" + playerId)
    .then(async (res) => {
      return await res.data.data;
    })
    .catch(async (err) => {
      return await err;
    });
};

// POST

export const postOffer = (playerId, data) => {
    return axios
    .post("/market/" + playerId, data)
    .then(async (res) => {
      return await res.data.data;
    })
    .catch(async (err) => {
      return await err.response.data.message;
    });
}

// PUT

export const putOffer = (playerId, offerId, data) => {
  return axios
    .put("/market/" + playerId + "/" + offerId, data)
    .then(async (res) => {
      return await res.data;
    })
    .catch(async (err) => {
      return await err.response.data.message;
    });
};

// DELETE

export const deleteOffer = (playerId, offerId) => {
  return axios
    .delete("/market/" + playerId + "/" + offerId)
    .then(async (res) => {
      return await res.data.data;
    })
    .catch(async (err) => {
      return await err;
    });
};