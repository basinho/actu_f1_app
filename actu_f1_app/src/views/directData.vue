<template>
    <subHeader
      title1="Circuit"
      title2="Classement"
      :link1="`/courses/${circuitName}/circuit`"
      :link2="`/courses/${circuitName}/classement`"
    />
    <div class="direct-container">
      <h1>Classement {{ sessions }}</h1>
      <table class="standings-table">
        <thead>
          <tr>
            <th>Position</th>
            <th>Pilote</th>
            <th>Équipe</th>
            <th>Temps</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(driver, index) in standings" :key="driver.id">
            <td>{{ index + 1 }}</td>
            <td>{{ driver.acronyme }}</td>
            <td>{{ driver.team }}</td>
            <td>{{ driver.time }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  import { useRoute } from 'vue-router';
  import subHeader from '../components/subHeader.vue';
  import f1Data from '../assets/f1.json';
  
  const standings = ref(f1Data.pilotes || []);
  const sessions = ref([]);
  const route = useRoute();
  const circuitName = ref(route.params.circuitName);
  const error = ref(null);
  const circuitData = ref(null);
  
  onMounted(() => {
    console.log("Route params:", route.params);
    
    if (!circuitName.value || circuitName.value.startsWith(":")) {
      error.value = "Nom du circuit invalide";
      return;
    }
  
    try {
      const data = f1Data.circuits.find(
        (circuit) => circuit.circuit === circuitName.value
      );
      if (!data) {
        throw new Error('Circuit introuvable');
      }
      circuitData.value = data;
      sessions.value = data.sessions;
    } catch (err) {
      error.value = 'Erreur lors de la récupération des données : ' + err.message;
    }
  });
  </script>
  
  <style scoped>
  .direct-container {
    padding: 1rem;
    background-color: #1d1d1d;
    color: #fff;
    text-align: center;
    min-height: 100vh;
  }
  
  .standings-table {
    width: 100%;
    border-collapse: collapse;
    margin-top: 1rem;
    margin-bottom: 20%;
  }
  
  .standings-table th,
  .standings-table td {
    border: 1px solid #444;
    padding: 0.75rem;
    text-align: center;
  }
  
  .standings-table th {
    background-color: #333;
    font-size: 1.1rem;
  }
  
  .standings-table tr:nth-child(even) {
    background-color: #2a2a2a;
  }
  
  .standings-table tr:hover {
    background-color: #3a3a3a;
  }
  </style>