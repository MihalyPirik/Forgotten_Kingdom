
axios.defaults.baseURL = "https://forgottenkingdom.cyclic.app";
axios.defaults.headers.common['Authorization'] = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Ijk3NDE4NzkwLWU1MDctMTFlZS1hNjJiLTZmYmQ0MDFiM2RjMyIsImlhdCI6MTcxMDc1MzE0NCwiZXhwIjoxNzEwNzU2NzQ0fQ.c_nxYhR8uk7yQROPQRXfSwikrobRSZ5pjZKn3cB9hrY"
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

export const getQuests = (playerId) => {
  return axios
    .get("/" + playerId + "/player" + "/quests")
    .then(async (res) => {
      return await res.data.data;
    })
    .catch(async (err) => {
      return await err.response.data.message;
    });
};

export const getQuestsIsActive = (playerId, boolean) => {
  return axios
    .get("/" + playerId + "/player" + "/quests/" + boolean)
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

export const deletePlayer = (playerId) => {
  return axios
    .delete("/" + playerId + "/player")
    .then(async (res) => {
      return await res.data.data;
    })
    .catch(async (err) => {
      return await err;
    });
};