axios.defaults.baseURL = "http://localhost:3000/";

// GET

export const getAllBuilding = (playerId) => {
  return axios
    .get("/" + playerId + "/buildings")
    .then(async (res) => {
      return await res.data.data;
    })
    .catch(async (err) => {
      return await err;
    });
};

// PUT

export const putBuilding = (playerId, buildingId, data) => {
  return axios
    .put("/" + playerId + "/buildings/" + buildingId, data)
    .then(async (res) => {
      return await res.data;
    })
    .catch(async (err) => {
      return await err.response.data.message;
    });
};