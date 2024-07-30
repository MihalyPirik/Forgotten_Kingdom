<script setup>
import { ref } from "vue";
import { sendEmail } from "../services/apiService";

const mess = ref("");
const from = ref("");
const subject = ref("");
const text = ref("");

const SendEmail = async () => {
  mess.value = await sendEmail(from.value, subject.value, text.value);
};
</script>

<template>
  <div class="col">

    <form @submit.prevent="SendEmail" class="d-flex flex-column justify-content-evenly align-items-center"
      method="POST">

      <h3>Hibajelentő</h3>
      <div class="w-100">
        <input placeholder="valami@valami.hu" id="to" type="email" class="reportForm form-control mx-auto"
          v-model="from" required>
        <input placeholder="tárgy" id="subject" type="text" class="reportForm form-control mx-auto" v-model="subject"
          required>
        <textarea placeholder="üzenet" id="text" class="reportForm form-control mx-auto" v-model="text"
          required></textarea>
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
  max-width: 500px;
  min-width: var(--inputminwidth);
}

textarea {
  width: 50%;
  max-width: 500px;
  min-width: var(--inputminwidth);
  height: 200px !important;
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
  margin-top: 4px;
  margin-bottom: 6px;
}
</style>