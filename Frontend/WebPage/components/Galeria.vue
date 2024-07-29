<template>
  <div v-for="i in jsonData" id="app">
    <div class="container">
      <div class="image-block">
        <img :src="i.src" alt="Kép">
      </div>
      <div class="text-block">
        <h2>{{ i.title }}</h2>
        <p>{{ i.description }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import jsonData from "../assets/galeria.json";
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  border-radius: 10px;
  color: gold;
  border-bottom: 10px solid;
  border-image: url(../assets/border2.png) 70 repeat;
}

.image-block {
  flex: 1;
  margin-right: 20px;
}

.image-block img {
  max-width: 100%;
  height: auto;
  border-radius: 10px;
}

.text-block {
  flex: 2;
}

.text-block h2 {
  font-size: 25px;
  font-weight: bold;
  margin-bottom: 10px;
}

.text-block p {
  font-size: 20px;
  font-weight: bold;
  line-height: 1.6;
}
</style>