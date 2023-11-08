<script setup>
import axios from '../node_modules/axios/index'
let errorMessage=null;
let name,email,password;
const FormRegistration=()=>{
  axios.post('/api/regisztracio',{
    name:name,
    email:email,
    password:password
})
.then((response)=>{
  errorMessage=response.data
}).catch((error)=>{
  errorMessage=error.message
})

}



</script>
<template>
  <div class="col">

    <form @submit.prevent="FormRegistration" class="d-flex flex-column justify-content-evenly align-items-center" method="POST">

      <h3>Regisztráció</h3>
      <div class="w-100">
        <input v-model="name" placeholder="name" type="text" class="form-control mx-auto" aria-describedby="nameHelp">
        <input v-model="password" placeholder="name@example.com" type="email" class="form-control mx-auto" aria-describedby="emailHelp">
        <input v-model="email" placeholder="Password" type="password" class="form-control mx-auto" aria-describedby="passwordHelp">
          <p style="color: red" v-show="errorMessage!=null">{{ errorMessage }}</p>
      </div>

      <button type="submit" class="btn btn-primary">REGISZTRÁCIÓ</button>
    </form>

  </div>
</template>
<style scoped>
form {
  color: gold;
  min-height: 300px;
}

input {
  width: 50%;
  max-width: 250px;
  min-width: var(--inputminwidth);
}

button {
  background-image: url(../assets/buttons/button3.png);
  background-color: transparent;
  border-style: none;
  background-size: 100% 100%;
  background-position: center;
  background-repeat: no-repeat;
  transition-duration: 0.4s;
  color: white;
}

button:hover {
  background-image: url(../assets/buttons/button3H.png);
  color: rgb(255, 255, 162);
}

form * {
  margin: 0;
  margin-bottom: 5px;
}
</style>