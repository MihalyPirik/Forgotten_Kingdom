<script setup>
import { ref } from "vue";
import { FormLogin } from "../services/apiService";

let email, password;
let mess = ref();
const Login = async () => {
    mess.value = await FormLogin(email, password)
};

</script>
<template>
    <div class="row m-2">
        <div class="col-xl-7 col-lg-12 first_paper">
            <p>A Forgotten Kingdom egy középkorban játszódó szerepjáték, stratégiai elemekkel vegyítve. A játékos saját
                karakterével fedezhet fel egy rég elfeledett királyságot.
            </p>
        </div>
        <div class="col-xl-5 col-lg-12 pt-4" id="forms">
            <div class="d-flex flex-column justify-content-evenly align-items-center pt-3">
                <h3 id="login">BEJELENTKEZÉS</h3>
                <form class="d-flex flex-column justify-content-evenly align-items-center" @submit.prevent="Login">
                    <div class="w-100">
                        <input v-model="email" placeholder="name@example.com" type="email" class="form-control mx-auto"
                            id="InputEmail" aria-describedby="emailHelp">
                        <input v-model="password" placeholder="Password" type="password" class="form-control mx-auto"
                            id="InputPassword" aria-describedby="passwordHelp">
                    </div>
                    <button class="px-1 btn button" type="submit">BELÉPÉS</button>
                </form>
                <p>{{ mess }}</p>
                <RouterLink id="forgetPass" to="/forget-password">Elfelejtett jelszó</RouterLink>
                <div id="borderLine"></div>
                <p>NINCS MÉG FIÓKOD?</p>
                <RouterLink class="button btn" to="/regisztracio">REGISZTRÁCIÓ</RouterLink>
            </div>
        </div>
    </div>
    <div class="row m-2">
        <div class="col-xl-12 col-lg-12 second_row">
            <h1>Használati útmutató a játékhoz</h1>
            <p><br><br>-Irányítás: W, A, S, D, Q, E, C, í, illetve a billentyűzeten található nyilak.</p>
            <p>-Küldetések elkezdéséhez vagy befejezéséhez, keresd az adott témájú pályarészhez kapcsolódó karaktert.
                (pl.: a kovácsot a Kovács nevű pályarészen találod)</p>
            <p>-Pályarészek közötti közlekedéshez vidd a karaktert a pályák szélein látható nyilak közelébe.</p>
            <p>-Különböző alapanyagok megszerzéséhez, juss el az adott alapanyag típusához kapcsolódó pályarészre, majd
                keresd a felkiáltójel ikont és vidd a karaktert ahoz közel. Ezután a felugró ablakon található gombra
                kattintva vagy hosszan rányomva megszerezhető az alapanyag.</p>
            <p>-Ellenségek leküzdéséhez vidd a karaktert az ellenfél közelébe, majd rá való kattintással sebezheted meg.
            </p>
            <p>-A térképet és a táskádban fellelhető tartalmakat bármikor megnézheted, a hozzájuk kapcsolódó ikonokra
                való kattintással.</p>
            <p>-Ha játék során, esetleges hibával találkoznál, akkor frissítsd az oldalt, vagy lépj be ismét a játékba.
            </p>
        </div>
    </div>
</template>