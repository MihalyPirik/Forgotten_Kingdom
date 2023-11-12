import axios from 'axios'

export default{
    FormRegistration(name,email,password,callback){
      if(name==undefined){name=null}
      else if(email==undefined){email=null}
      else if(password==undefined){password=null}
      axios.post('/api/regisztracio',({"name":name,"email":email,"password":password}))
      .then(response=>{callback(null,response)})
      .catch(error=>{callback(error,null)})
}}