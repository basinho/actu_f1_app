<template>
  <div class="block" @click="toggleFollow">
    <div class="infos-date">
      <p class="date">{{ dateNumber }}</p>
      <div class="dateMonth-block">
        <p class="date">{{ dateMonth }}</p>
      </div>
    </div>
    <div class="info">
      <h2>{{ country }}</h2>
      <h3 class="circuit-name">{{ circuit }}</h3>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';

const props = defineProps({
  circuit: String,
  country: String,      
  dateNumber: String,
  dateMonth: String
});

const router = useRouter();

function toggleFollow() {
  router.push({ name: 'circuit', params: { circuitName: props.circuit } });
}
</script>

<style scoped>
.block {
  display: flex;
  align-items: center;
  background: rgba(255, 255, 255, 0.1);
  padding: 1rem;
  border-radius: 16px;
  width: 90vw;
  max-width: 400px;
  height: auto;
  margin-right: 0;
  gap: 30%;
}

.dateMonth-block {
  width: 100%;
  height: 25%;
  background-color: rgba(255, 255, 255, 0.5);
  padding: 5px;
  border-radius: 25px;
  display: flex;
  justify-content: center; /* Center the text horizontally */
  align-items: center; /* Center the text vertically */
}

.info {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%; /* Ensure the info section takes full width */
}

.infos-date {
  display: flex;
  flex-direction: column;
  align-items: center;
  object-fit: cover;
  width: 100px; /* Fixed width for date section */
}

.circuit-name {
  width: 100%; /* Ensure the circuit name takes full width */
  text-align: left; /* Align text to the left */
}

p, h2, h3 {
  font-family: "Pathway Extreme", serif;
  font-optical-sizing: auto;
  font-style: normal;
  font-weight: bold;
  font-variation-settings: "wdth" 100;
}

h2, .date {
  font-size: 1.75rem;
  margin: 0;
  color: white;
}

h3 {
  font-size: 1rem;
  margin: 0;
  color: #cccdd7;
}

p {
  font-size: 0.5rem;
  margin: 5px 0;
  color: #cccdd7;
  font-weight: bold;
}

.dateMonth-block p {
  font-size: 1rem;
  margin: 5px 0;
  color: #cccdd7;
}
</style>