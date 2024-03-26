<script setup>
</script>

<template>
  <div class="col">

    <form @submit.prevent="" class="d-flex flex-column justify-content-evenly align-items-center"
      method="POST">

      <h3>Report</h3>
      <div class="w-100">
        <input placeholder="name@example.com" type="email" class="reportForm form-control mx-auto">
        <input placeholder="Title" type="text" class="reportForm form-control mx-auto">
        <textarea placeholder="Text" class="reportForm form-control mx-auto"></textarea>
        <p>{{  }}</p>
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

textarea {
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
  background-color: transparent;
  color: rgb(255, 255, 162);
}

form * {
  margin: 0;
  margin-bottom: 5px;
}
</style>