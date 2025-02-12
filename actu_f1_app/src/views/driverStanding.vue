<template>
  <header>
    <subHeader
      title1="Pilotes"
      title2="Constructeurs"
      link1="/classements/pilotes"
      link2="/classements/constructeurs"
    />
  </header>
  <div class="positions">
    <template v-if="drivers.length">
      <standingBlock
        v-for="driver in drivers"
        :key="driver.id"
        :firstname="driver.firstname"
        :surname="driver.surname"
        :team="driver.team"
        :points="driver.points"
        :img="driver.img"
      />
    </template>
    <p v-else>Chargement des classements...</p>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import standingBlock from '../components/standingBlock.vue';
import subHeader from '../components/subHeader.vue';
import dataStanding from '../assets/f1.json';

const drivers = ref(dataStanding.pilotes); // Accéder directement aux pilotes
</script>

<style scoped>
.positions {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20%;
  gap: 1rem;
}
</style>
