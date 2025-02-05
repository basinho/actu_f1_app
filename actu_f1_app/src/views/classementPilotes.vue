
<template>
    <header>
        <subHeader/>
    </header>
  <div class="positions">
    <template v-if="drivers.length">
      <classementPosition 
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
import { ref, onMounted } from 'vue';
import classementPosition from '../components/classementBlock.vue'; 
import subHeader from '../components/subHeader.vue'
import classementData from '../assets/f1.json';

const drivers = ref(classementData); 

</script>

<style>
.positions {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom:20%;
  gap: 1rem;
}
</style>