import config from './config.json' assert { type: 'json' }

export function base(url,method,data)
{
return fetch(config.URL+url,{
  method:method,
  headers:{
    'Authorization':config.developmentToken,
    'Content-Type':'application/json'
  },
  body:data?JSON.stringify(data):null
})
.then(async res=>{return await res.json()})
.then(res=>{return res.data})
.catch(err=>{return err.message})
}