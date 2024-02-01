import axios from "axios";
axios.defaults.baseURL = "localhost:8100/player";

const getAllData = (playerId) => {
  return axios
    .get("/" + playerId)
    .then(async (res) => {
      return await res.data;
    })
    .catch(async (err) => {
      return await err.response.data.message;
    });
};

const getInventory = (playerId) => {
  return axios
    .get("/" + playerId + "/inventory")
    .then(async (res) => {
      return await res.data;
    })
    .catch(async (err) => {
      return await err.response.data.message;
    });
};

const getHP = (playerId) => {
  return axios
    .get("/" + playerId + "/HP")
    .then(async (res) => {
      return await res.data;
    })
    .catch(async (err) => {
      return await err.response.data.message;
    });
};

const getMoney = (playerId) => {
  return axios
    .get("/" + playerId + "/money")
    .then(async (res) => {
      return await res.data;
    })
    .catch(async (err) => {
      return await err.response.data.message;
    });
};

const getPosition = (playerId) => {
  return axios
    .get("/" + playerId + "/position")
    .then(async (res) => {
      return await res.data;
    })
    .catch(async (err) => {
      return await err.response.data.message;
    });
};


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



export { getAllData, getInventory, getHP, getMoney,getPosition,putHP,putInventory,putMoney,putPosition};
