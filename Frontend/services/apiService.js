import axios from 'axios'

axios.defaults.baseURL='http://localhost:3000'

const FormRegistration = async(name, email, password) => {
  return axios.post('/user/registration', ({ "name": name, "email": email, "password": password }))
  .then(async res=>{return await res.data.message})
  .catch(async err=>{return await err.response.data.message})
}

const FormLogin=async(email,password)=>{
  return axios.post('/user/login',({"email":email,"password":password}))
  .then(async res=>{return await res.data.message})
  .catch(async err=>{return await err.response.data.message})
}

export { FormRegistration,FormLogin }