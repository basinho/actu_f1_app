<template>
  <subHeader
    title1="Circuit"
    title2="Classement"
    link1="/courses/:circuitName/circuit"
    link2="/courses/:circuitName/classement"
    />
  <div class="circuit-container">
    <div v-if="circuitData" class="header-container">
      <img
        :src="circuitData.circuit_img"
        alt="Image du circuit"
        class="circuit-image-header"
      />
    </div>
    <p v-if="error">{{ error }}</p>
    <div v-else-if="circuitData">
      <div v-if="circuitData.sessions" class="sessions-container">
        <div
          v-for="(sessionGroup, day) in circuitData.sessions"
          :key="day"
          class="session-group"
        >
          <h3 class="session-day">{{ day }}</h3>
          <ul class="session-list">
            <li
              v-for="(time, sessionName) in sessionGroup"
              :key="sessionName"
              class="session-item"
            >
              {{ sessionName }} : {{ time }}
            </li>
          </ul>
        </div>
      </div>
      <div v-else>
        <p>Aucune séance trouvée.</p>
      </div>
    </div>
    <p v-else>Chargement des données...</p>
  </div>
</template>

<script setup>
import subHeader from '../components/subHeader.vue';
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';
import circuitDataJson from '../assets/f1.json'; // Importez le fichier JSON

const route = useRoute();
const circuitName = route.params.circuitName;
const error = ref(null);
const circuitData = ref(null);

onMounted(() => {
  try {
    const data = circuitDataJson.circuits.find(
      (circuit) => circuit.circuit === circuitName
    );
    if (!data) {
      throw new Error('Circuit data not found');
    }
    circuitData.value = data;
  } catch (err) {
    error.value =
      'Erreur lors de la récupération des données : ' + err.message;
  }
});
</script>

<style scoped>

.circuit-container {
  padding: 1rem;
  margin-bottom: 4rem;
  text-align: center;
  background-color: #1d1d1d;
  color: #fff;
  margin-bottom: 20%;
}


.header-container {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  flex-wrap: wrap;
}


.rectangle1 {
  max-width: 150px;
}


.circuit-image-header {
  width: 80%;
  max-width: 100%;
  height: auto;
  max-height: 200px;
  display: block;
  margin: 0 auto 1rem;
}


.sessions-container {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
  margin-top: 1rem;
}


.session-group {
  background-color: #292929;
  padding: 1rem;
  border-radius: 8px;
}


.session-day {
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
  color: #ffffff;
}


.session-list {
  list-style: none;
  padding: 0;
  margin: 0;
}


.session-item {
  font-size: 1rem;
  margin: 0.25rem 0;
  color: #cccdd7;
  font-weight: bold;
}

h3, ul, li{
  font-family: "Pathway Extreme", serif;
  font-optical-sizing: auto;
  font-style: normal;
  font-weight: bold;
  font-variation-settings: "wdth" 100;
}

</style>