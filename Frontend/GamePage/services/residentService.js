axios.defaults.baseURL = "https://forgottenkingdom.cyclic.app";
axios.defaults.headers.common['Authorization'] = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjI5MThiYTIwLWUxZTktMTFlZS1hYWJiLWIxNWIxZTAyYTRhNiIsImlhdCI6MTcxMDc1NTg5NSwiZXhwIjoxNzEwNzU5NDk1fQ.BVcXVYBkLzfi6-zk8uUpBsE_lCrw5KdwSbb1HM9aoDw";

// GET

export const getAllResidents = () => {
  return axios
    .get("/residents")
    .then(async (res) => {
      return await res.data.data;
    })
    .catch(async (err) => {
      return await err;
    });
};

export const getBlockResidents = (blockX, blockY) => {
  return axios
    .get("/residents/" + blockX + "/" + blockY)
    .then(async (res) => {
      return await res.data.data;
    })
    .catch(async (err) => {
      return await err;
    });
};

// POST

export const postResident = (data) => {
    return axios
    .post("/residents", data)
    .then(async (res) => {
      return await res.data.data;
    })
    .catch(async (err) => {
      return await err.response.data.message;
    });
}

// PUT

export const putResident = (residentId, data) => {
  return axios
    .put("/residents/" + residentId, data)
    .then(async (res) => {
      return await res.data;
    })
    .catch(async (err) => {
      return await err.response.data.message;
    });
};