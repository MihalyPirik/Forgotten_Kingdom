<script setup>
import { ref } from 'vue';
import {FormLogin} from '../DataService/DataService'

let email,password;

let errorMessage=ref()
const Login=()=>{
    FormLogin(email,password,(err,response)=>
    {
        if(err){errorMessage.value=err.response.data}
        else{errorMessage.value=response.data}
        console.log(errorMessage.value)
    })
}

</script>
<template>
    <div class="row m-2">
        <div class="col-xl-7 col-lg-12 paper">
            <h4 class="text-danger">A JÁTÉKRÓL</h4>
            <p>A Forgotten Kingdom egy középkorban játszódó szerepjáték, stratégiai
                elemekkel vegyítve.
                A játékos saját kiválasztott karakterével fedezhet fel
                egy rég elfeledett királyságot ...</p>
            <a href="">Bővebben</a>
        </div>
        <div class="col-xl-5 col-lg-12 pt-4" id="forms">
            <div class="d-flex flex-column justify-content-evenly align-items-center pt-3">
                <h3>BEJELENTKEZÉS</h3>
                <form class="d-flex flex-column justify-content-evenly align-items-center" @submit.prevent="Login">
                    <div class="w-100">
                        <input v-model="email" placeholder="name@example.com" type="email" class="form-control mx-auto" id="InputEmail"
                            aria-describedby="emailHelp">
                        <input v-model="password" placeholder="Password" type="password" class="form-control mx-auto" id="InputPassword"
                            aria-describedby="passwordHelp">
                            <p v-if="typeof errorMessage=='object'" v-for="msg in errorMessage">{{ msg.msg }}</p>
                            <p v-else>{{ errorMessage }}</p>
                    </div>
                    <button class="px-1 btn button" type="submit">BELÉPÉS</button>
                </form>
                <RouterLink to="/home">Elfelejtett jelszó</RouterLink>
                <div id="borderLine"></div>
                <p>NINCS MÉG FIÓKOD?</p>
                <RouterLink class="button btn" to="/regisztracio">REGISZTRÁCIÓ</RouterLink>
            </div>
        </div>
    </div>
    <div class="row m-2">
        <div class="col-xl-7 col-lg-12 paper">
            <h4 class="text-danger">MOBIL ALKALMAZÁS</h4>
            <p>Töltsd le mobil alkalmazásunlat, és nézd meg, hogy más játékosok hogyan haladnak királyságuk felépítésével.
            </p>
            <a href="">Bővebben</a>
        </div>
        <div class="col-xl-5 col-lg-12 pt-4" id="mobilePanel">
            <div>
                <h3>MANUAL ALKALMAZÁS!</h3>
                <img width="100%" src="../assets/android.png"/>
                <p>↑ K A T T I N T S ↑</p>
            </div>
        </div>
    </div>
    <div class="row m-2">
        <div class="col-xl-7 col-lg-12 paper">
            <h4 class="text-danger">A TE KIRÁLYSÁGOD</h4>
            <p>Te leszel a király, a saját stílusod, saját királyságod!</p>
            <a href="">Bővebben</a>
        </div>
    </div>
</template>