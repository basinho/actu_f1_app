<template>
  <div class="searchBar-div">
    <input class="searchBar" type="search" placeholder="Search drivers/teams">
  </div>
  <div class="grid">
    <template v-if="drivers.length && teams.length">
      <followBlock
        v-for="driver in drivers"
        :surname="driver.surname"
        :img="driver.img"
      />
      <followBlock
        v-for="team in teams"
        :team="team.team"
        :team_img="team.team_img"
      />
    </template>
    <p v-else>Aucun résultat trouvé.</p>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import followBlock from '../components/followBlock.vue';
import dataStanding from '../assets/f1.json';

const drivers = ref(dataStanding.pilotes);
const teams = ref(dataStanding.teams);
</script>

<style scoped>
.searchBar-div {
  display: flex;
  justify-content: center;
}

.searchBar {
  width: 75%;
  height: 5vh;
  background-color: rgba(255, 255, 255, 0.3);
  padding: 10px;
  border-radius: 25px;
  color: white;
}

.searchBar::placeholder {
  color: #ffffff;
  font-style: italic;
}

.grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  row-gap: 2rem;
  justify-content: center;
  margin-top: 4vh;
  margin-bottom: 30%;
}
</style>
