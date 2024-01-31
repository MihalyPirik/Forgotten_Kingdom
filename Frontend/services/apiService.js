import axios from 'axios'
// https://bgs.jedlik.eu/81000
axios.defaults.baseURL='http://127.0.0.1:8100'

const FormRegistration = async(name, email, password) => {
  return axios.post('/user/registration', ({ "name": name, "email": email, "password": password }))
  .then(async res=>{return await res.data.message})
  .catch(async err=>{return await err.response.data.message})
}

const FormLogin=async(email,password)=>{
  return axios.post('/user/login',({"email":email,"password":password}))
  .then(async res=>{window.location.href=`http://127.0.0.1:5500/Frontend/components/Game_Page/Game.html?token=${res.headers.authorization}`
  ;return await res.data.message})
  .catch(async err=>{console.log(err);return await err.response.data.message})
}

export { FormRegistration,FormLogin }

// window.location.href="http://127.0.0.1:5500/Frontend/components/Game_Page/Game.html"