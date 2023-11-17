import axios from 'axios'


const FormRegistration = (name, email, password, callback) => {
  axios.post('/api/regisztracio', ({ "name": name, "email": email, "password": password }))
    .then(response => { callback(null, response) })
    .catch(error => {callback(error, null) })
}

const FormLogin=(email,password,callback)=>{
  axios.post('/api/login',({"email":email,"password":password}))
  .then(response=>{callback(null,response)})
  .catch(error=>{callback(error,null)})
}

export { FormRegistration,FormLogin }