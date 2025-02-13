<template>
  <div class="driver-container" v-if="driver">
    <h1>{{ driver.firstname }} {{ driver.surname }}</h1>
    <img :src="driver.img" :alt="driver.name" class="driver-image" />
    <p><strong>Équipe :</strong> {{ driver.team }}</p>
    <p><strong>Date de naissance :</strong> {{ driver.date_of_birth }}</p>
    <p><strong>Pays :</strong> {{ driver.nationality }}</p>
    <p><strong>Numéro :</strong> {{ driver.number }}</p>
    <p><strong>Courses disputées :</strong> {{ driver.races_entered }}</p>
    <p><strong>Podiums :</strong> {{ driver.podiums }}</p>
    <p><strong>Titres :</strong> {{ driver.titles }}</p>
  </div>
  <p v-else>Chargement des données...</p>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import f1Data from '../assets/f1.json';

const route = useRoute();
const driverId = route.params.pilotId;
const driver = ref(null);
const error = ref(null);

onMounted(() => {
  try {
    const data = f1Data.pilotes.find(pilot => pilot.id == driverId);
    if (!data) {
      throw new Error('Pilot data not found');
    }
    driver.value = data;
  } catch (err) {
    error.value = 'Erreur lors de la récupération des données : ' + err.message;
  }
});
</script>

<style scoped>
.driver-container {
  padding: 1rem;
  background-color: #1d1d1d;
  color: #fff;
  text-align: center;
  min-height: 100vh;
}

.driver-image {
  max-width: 100%;
  height: auto;
  border-radius: 10px;
  margin-bottom: 1rem;
}

h1{
  display: flex;
  justify-content: center;
  gap: 1rem;
}
p {
  font-size: 1.2rem;
  margin: 0.5rem 0;
}
h1, p {
    font-family: "Pathway Extreme", serif;
    font-optical-sizing: auto;
    font-style: normal;
    font-weight: bold;
    font-variation-settings:"wdth" 100;
}                     
</style>