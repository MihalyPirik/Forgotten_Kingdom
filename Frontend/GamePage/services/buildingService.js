axios.defaults.baseURL = "https://forgottenkingdom.cyclic.app/";

// axios.defaults.headers.common["Authorization"] = "Bearer " + localStorage.getItem("token");
axios.defaults.headers.common["Authorization"] = "Bearer " + "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjI5MThiYTIwLWUxZTktMTFlZS1hYWJiLWIxNWIxZTAyYTRhNiIsImlhdCI6MTcxMDc0NTU3MSwiZXhwIjoxNzEwNzQ5MTcxfQ.nTAw5XSmebQopq_DJShmLRQt0BHnZRvMVt4ZOM3d3aY";

// GET

export const getAllBuilding = () => {
  return axios
    .get("/buildings")
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
