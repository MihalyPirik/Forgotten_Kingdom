axios.defaults.baseURL = "https://forgottenkingdom.cyclic.app/";

// axios.defaults.headers.common["Authorization"] = "Bearer " + localStorage.getItem("token");
axios.defaults.headers.common["Authorization"] = "Bearer " + "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjI5MThiYTIwLWUxZTktMTFlZS1hYWJiLWIxNWIxZTAyYTRhNiIsImlhdCI6MTcxMDc1MDE5OSwiZXhwIjoxNzEwNzUzNzk5fQ.wvNAY4S3vcxuWjx5muoZGgQcxsSeITDRmRQ8247fCi8";

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
    .get("/player" + "/quests")
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
      console.log(res.request)
      return await res.data;
    })
    .catch(async (err) => {
      console.log(err);
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