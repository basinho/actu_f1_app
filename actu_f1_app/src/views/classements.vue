<template>
    <div class="positions">
      <template v-if="drivers.length">
        <classementPosition 
          v-for="driver in drivers" 
          :key="driver.id" 
          :label="`${driver.position} - ${driver.name} (${driver.team})`" 
          :team="driver.team"
          :points="driver.points"
          :nationality="driver.nationality"
          :driverId="driver.id"
        />
      </template>
      <p v-else>Chargement des classements...</p>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  import classementPosition from '../components/classementBlock.vue'; 
  
  // Importation du fichier JSON
  import classementData from '../assets/f1.json';
  
  const drivers = ref(classementData); // Charger les données dans 'drivers' directement
  
  </script>
  
  <style>
  .positions {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
  }
  </style>
  