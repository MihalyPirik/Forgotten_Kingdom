import axios from 'axios'

export default{
    FormRegistration(name,email,password,callback){
      axios.post('/api/regisztracio',({name:name,email:email,password:password}))
      .then(response=>{callback(null,response)})
      .catch(error=>{callback(error,null)})
}}