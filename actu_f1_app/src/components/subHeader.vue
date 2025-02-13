<template>
  <div class="title-block">
    <router-link :to="link1" class="title-nav">
      <h3>{{ title1 }}</h3>
    </router-link>
    <router-link :to="link2" class="title-nav">
      <h3>{{ title2 }}</h3>
    </router-link>
  </div>
</template>

<script setup>
import { RouterLink } from 'vue-router';

const props = defineProps({
  title1: String,
  title2: String,
  link1: String,
  link2: String,
});
</script>

<style scoped>
.title-block {
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 20vw;
  margin-bottom: 4vh;
  align-items: center;
}

.title-nav {
  font-family: "Pathway Extreme", serif;
  font-optical-sizing: auto;
  font-style: normal;
  font-weight: bold;
  font-size: 1rem;
  font-variation-settings: "wdth" 100;
  color: #dddcc7;
  text-decoration: none;
}

.title-nav:hover {
  color: white;
}
</style>