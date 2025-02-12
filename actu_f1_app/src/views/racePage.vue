<template>
    <header>
      <subHeader />
    </header>
    <div class="positions">
      <template v-if="races.length">
        <standingBlock
          v-for="race in races"
          :circuit="race.circuit"
          :country="race.country"
          :dateNumber="race.dateNumber"
          :dateMonth="race.dateMonth"
        />
      </template>
      <p v-else>Chargement des courses...</p>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import standingBlock from '../components/raceBlock.vue';
  import subHeader from '../components/subHeader.vue';
  import dataStanding from '../assets/f1.json';
  
  const races = ref(dataStanding.circuits); 
  </script>
  
  <style>
  .positions {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 20%;
    gap: 1rem;
  }
  </style>
  