<script setup>
import { ref } from "vue";
import { forgetPassword } from "../services/apiService";

const mess = ref("");
const email = ref("");
const newPassword = ref("");
const newPasswordAgain = ref("");

const Reset = async () => {
  mess.value = await forgetPassword(email.value, newPassword.value, newPasswordAgain.value);
};
</script>

<template>
  <div class="col">

    <form @submit.prevent="Reset" class="d-flex flex-column justify-content-evenly align-items-center" method="POST">

      <h3>Új jelszó igénylése</h3>
      <div class="w-100">
        <input placeholder="valami@valami.hu" id="to" type="email" class="newPassForm form-control mx-auto"
          v-model="email" required>
        <input placeholder="új jelszó" id="newPassword" type="password" class="newPassForm form-control mx-auto"
          v-model="newPassword" required>
        <input placeholder="új jelszó megint" id="newPasswordAgain" type="password"
          class="newPassForm form-control mx-auto" v-model="newPasswordAgain" required>
          <p>{{ mess }}</p>
      </div>

      <button type="submit" class="btn btn-primary">Küldés</button>
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
  width: var(--buttonminwidth);
  font-size: var(--buttonfontsize);
}

button:hover {
  background-image: url(../assets/buttons/button3H.png);
  background-color: transparent;
  color: rgb(255, 255, 162);
}

form * {
  margin: 0;
  margin-bottom: 5px;
}
</style>