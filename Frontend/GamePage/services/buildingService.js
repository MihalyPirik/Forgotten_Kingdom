axios.defaults.baseURL = "http://localhost:3000/";

// GET

export const getAllBuilding = (token) => {
  return axios
    .get("/buildings", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then(async (res) => {
      return await res.data.data;
    })
    .catch(async (err) => {
      return await err;
    });
};

// POST

export const postBuilding = (data) => {
  return axios
    .post("/buildings", data)
    .then(async (res) => {
      return await res.data.data;
    })
    .catch(async (err) => {
      return await err.response.data.message;
    });
};

// PUT

export const putBuilding = (buildingId, data) => {
  return axios
    .put("/buildings/" + buildingId, data)
    .then(async (res) => {
      return await res.data;
    })
    .catch(async (err) => {
      return await err.response.data.message;
    });
};

// DELETE

export const deleteBuilding = (buildingId) => {
  return axios
    .delete("/buildings/" + buildingId)
    .then(async (res) => {
      return await res.data.data;
    })
    .catch(async (err) => {
      return await err;
    });
};
