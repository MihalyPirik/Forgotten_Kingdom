
axios.defaults.baseURL = "http://localhost:3000/player";

const getAllData = (playerId) => {
  return axios
    .get("/" + playerId)
    .then(async (res) => {
      return await res.data.data;
    })
    .catch(async (err) => {
      return await err;
    });
};

const getInventory = (playerId) => {
  return axios
    .get("/" + playerId + "/inventory")
    .then(async (res) => {
      return await res.data.data;
    })
    .catch(async (err) => {
      return await err.response.data.message;
    });
}






// PUT

const putInventory = (playerId,data) => {
    return axios
      .put("/" + playerId + "/inventory",data)
      .then(async (res) => {
        return await res.data;
      })
      .catch(async (err) => {
        return await err.response.data.message;
      });
  };
  
  const putHP = (playerId,data) => {
    return axios
      .put("/" + playerId + "/HP",data)
      .then(async (res) => {
        return await res.data;
      })
      .catch(async (err) => {
        return await err.response.data.message;
      });
  };
  
  const putMoney = (playerId,data) => {
    return axios
      .put("/" + playerId + "/money",data)
      .then(async (res) => {
        return await res.data;
      })
      .catch(async (err) => {
        return await err.response.data.message;
      });
  };
  
  const putPosition = (playerId,data) => {
    return axios
      .put("/" + playerId + "/position",data)
      .then(async (res) => {
        return await res.data;
      })
      .catch(async (err) => {
        return await err.response.data.message;
      });
  };



export { getAllData, getInventory,putHP,putInventory,putMoney,putPosition};
