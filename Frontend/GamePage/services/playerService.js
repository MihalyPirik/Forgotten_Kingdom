axios.defaults.baseURL = "https://forgottenkingdom.cyclic.app";
axios.defaults.headers.common['Authorization'] = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjI5MThiYTIwLWUxZTktMTFlZS1hYWJiLWIxNWIxZTAyYTRhNiIsImlhdCI6MTcxMDc1NTg5NSwiZXhwIjoxNzEwNzU5NDk1fQ.BVcXVYBkLzfi6-zk8uUpBsE_lCrw5KdwSbb1HM9aoDw"

// GET

export const getAllData = () => {
  return axios
    .get("/player")
    .then(async (res) => {
      return await res.data.data;
    })
    .catch(async (err) => {
      return await err;
    });
};

export const getInventory = () => {
  return axios
    .get("/player" + "/inventory")
    .then(async (res) => {
      return await res.data.data;
    })
    .catch(async (err) => {
      return await err.response.data.message;
    });
};

export const getQuests = () => {
  return axios
    .get("/quest?is_active=false&&withoutZero=0&sort_by=is_mainstory")
    .then(async (res) => {
      return await res.data.data;
    })
    .catch(async (err) => {
      return await err.response.data.message;
    });
};

// PUT

export const putPlayer = (data) => {
  return axios
    .put("/player", data)
    .then(async (res) => {
      return await res.data;
    })
    .catch(async (err) => {
      return await err.response.data.message;
    });
};

// DELETE

export const deletePlayer = () => {
  return axios
    .delete("/player")
    .then(async (res) => {
      return await res.data.data;
    })
    .catch(async (err) => {
      return await err;
    });
};