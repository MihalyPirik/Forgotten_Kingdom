import axios from 'axios'
// https://bgs.jedlik.eu/81000
axios.defaults.baseURL='http://127.0.0.1:3000'

export const FormRegistration = async(name, email, password) => {
  return axios.post('/user/registration', ({ "name": name, "email": email, "password": password }))
  .then(async res=>{return await res.data.data.message})
  .catch(async err=>{return await err.response.data.message})
}

export const FormLogin=async(email,password)=>{
  return axios.post('/user/login',({"email":email,"password":password}))
  .then(async res=>{
    localStorage.setItem('token',res.headers.authorization)
    window.location.href='http://127.0.0.1:5500/Frontend/GamePage/index.html'
  ;return await res.data.message})
  .catch(async err=>{console.log(err);return await err.response.data.message})
}

export const putUser = (playerId, data) => {
  return axios
    .put("/user/" + playerId, data)
    .then(async (res) => {
      return await res.data;
    })
    .catch(async (err) => {
      return await err.response.data.message;
    });
};

// window.location.href="http://127.0.0.1:5500/Frontend/components/Game_Page/Game.html"