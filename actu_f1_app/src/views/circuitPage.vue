<template>
    <header>
      <subHeader
        title1="Circuit"
        title2="Classement"
        link1="/courses/:circuitName/circuit"
        link2="/courses/:circuitName/classement"
      />
    </header>
    <template v-if="weekEnds.length">
      <presBlock
        v-for="weekEnd in weekEnds"
        :key="weekEnd.circuit"
        :country="weekEnd.country"
        :circuit="weekEnd.circuit"
        :circuit_img="weekEnd.circuit_img"
        :sessions="formatSessions(weekEnd)"
      />
    </template>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import subHeader from '../components/subHeader.vue';
  import presBlock from '../components/presCircuitBlock.vue';
  import weekEndData from '../assets/f1.json';
  
  const weekEnds = ref(weekEndData.circuits.sessions);
  
  const formatSessions = (weekEnd) => {
    return `
      <p><strong>Vendredi:</strong> ${weekEnd.vendredi}</p>
      <p><strong>Samedi:</strong> ${weekEnd.samedi}</p>
      <p><strong>Dimanche:</strong> ${weekEnd.dimanche}</p>
    `;
  };
  </script>
  
  <style scoped>

  </style>
  