<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
    <header>
        <nav class="navbar-brand d-flex flex-row-reverse">
            <RouterLink to="/" class="me-3" href=""><img src="./assets/ig_logo.png" alt="" width="30" height="30">
            </RouterLink>
            <RouterLink to="/" class="me-3" href=""><img src="./assets/fb_logo.png" alt="" width="30" height="30">
            </RouterLink>
        </nav>
    </header>

    <img id="gameLogo" src="./assets/LOGOv6.png" alt="Logo">
    <div class="container w-50 p-0 text-center" id="border">
        <div class="row p-3" id="buttonPanel">
            <div class="col-xl col-md-6 col-sm-12">
                <RouterLink to="/">FŐOLDAL</RouterLink>
            </div>

            <div class="col-xl col-md-6 col-sm-12">
                <RouterLink to="/about-us">RÓLUNK</RouterLink>
            </div>

            <div class="col-xl col-md-6 col-sm-12">
                <RouterLink to="/gallery">GALÉRIA</RouterLink>
            </div>

            <div class="col-xl col-md-6 col-sm-12">
                <RouterLink to="/report">HIBAJELENTŐ</RouterLink>
            </div>
        </div>
        <main>
            <RouterView></RouterView>
        </main>
    </div>
    <div class="w-50" id="lanc"></div>

    <footer>
        <div class="container w-50" id="footer">
            <h1>KAPCSOLAT</h1>
            <p>forgottenkingdom887@gmail.com</p>
            <p>Győr, Szent István út 7.</p>
        </div>
    </footer>
</template>

<style scoped></style>