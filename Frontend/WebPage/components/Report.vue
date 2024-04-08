<script setup>
  const email = {
    from: '',
    subject: '',
    text: ''
  };

  async function sendEmail() {
    try {
      const response = await fetch('http://127.0.0.1:3000/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(email)
      });
      const result = await response.text();
      alert(result);
    } catch (error) {
      console.error('Error:', error);
    }
  }
</script>

<template>
  <div class="col">

    <form @submit.prevent="sendEmail" class="d-flex flex-column justify-content-evenly align-items-center"
      method="POST">

      <h3>Report</h3>
      <div class="w-100">
        <input placeholder="name@example.com" id="to" type="email" class="reportForm form-control mx-auto" v-model="email.from" required>
        <input placeholder="Title" id="subject" type="text" class="reportForm form-control mx-auto" v-model="email.subject" required>
        <textarea placeholder="Text" id="text" class="reportForm form-control mx-auto" v-model="email.text" required></textarea>
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