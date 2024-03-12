axios.defaults.baseURL = "https://forgottenkingdom.cyclic.app/";

// GET

export const getAllData = (playerId) => {
  return axios
    .get("/" + playerId + "/player")
    .then(async (res) => {
      return await res.data.data;
    })
    .catch(async (err) => {
      return await err;
    });
};

export const getInventory = (playerId) => {
  return axios
    .get("/" + playerId + "/player" + "/inventory")
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

export const putPlayer = (playerId, data) => {
  return axios
    .put("/" + playerId + "/player", data)
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