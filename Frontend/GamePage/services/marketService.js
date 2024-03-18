axios.defaults.baseURL = "https://forgottenkingdom.cyclic.app";
axios.defaults.headers.common['Authorization'] = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjI5MThiYTIwLWUxZTktMTFlZS1hYWJiLWIxNWIxZTAyYTRhNiIsImlhdCI6MTcxMDc1NTg5NSwiZXhwIjoxNzEwNzU5NDk1fQ.BVcXVYBkLzfi6-zk8uUpBsE_lCrw5KdwSbb1HM9aoDw";

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

export const getPlayerOffer = () => {
  return axios
    .get("/market")
    .then(async (res) => {
      return await res.data.data;
    })
    .catch(async (err) => {
      return await err;
    });
};

// POST

export const postOffer = (data) => {
    return axios
    .post("/market", data)
    .then(async (res) => {
      return await res.data.data;
    })
    .catch(async (err) => {
      return await err.response.data.message;
    });
}

// PUT

export const putOffer = (offerId, data) => {
  return axios
    .put("/market/" + offerId, data)
    .then(async (res) => {
      return await res.data;
    })
    .catch(async (err) => {
      return await err.response.data.message;
    });
};

// DELETE

export const deleteOffer = (offerId) => {
  return axios
    .delete("/market/" + offerId)
    .then(async (res) => {
      return await res.data.data;
    })
    .catch(async (err) => {
      return await err;
    });
};