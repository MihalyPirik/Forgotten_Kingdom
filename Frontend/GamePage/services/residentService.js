axios.defaults.baseURL = "https://forgottenkingdom.cyclic.app/";

// GET

export const getAllResidents = (playerId) => {
  return axios
    .get("/" + playerId + "/residents")
    .then(async (res) => {
      return await res.data.data;
    })
    .catch(async (err) => {
      return await err;
    });
};

export const getBlockResidents = (playerId, blockX, blockY) => {
  return axios
    .get("/" + playerId + "/residents/" + blockX + "/" + blockY)
    .then(async (res) => {
      return await res.data.data;
    })
    .catch(async (err) => {
      return await err;
    });
};

// POST

export const postResident = (playerId, data) => {
    return axios
    .post("/" + playerId + "/residents", data)
    .then(async (res) => {
      return await res.data.data;
    })
    .catch(async (err) => {
      return await err.response.data.message;
    });
}

// PUT

export const putResident = (playerId, residentId, data) => {
  return axios
    .put("/" + playerId + "/residents/" + residentId, data)
    .then(async (res) => {
      return await res.data;
    })
    .catch(async (err) => {
      return await err.response.data.message;
    });
};