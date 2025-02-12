<template>
  <div class="searchBar-div">
    <input
      class="searchBar"
      type="search"
      placeholder="Search drivers/teams"
      v-model="searchQuery"
    />
  </div>
  <div class="grid">
    <template v-if="filteredItems.length">
      <!-- Afficher les pilotes et les équipes filtrés -->
      <followBlock
        v-for="item in filteredItems"
        :key="item.id || item.team"
        :firstname="item.firstname || item.team"
        :img="item.img || item.team_img"
        :isTeam="item.isTeam"
      />
    </template>
    <p v-else>Aucun résultat trouvé.</p>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import followBlock from '../components/followBlock.vue';
import dataStanding from '../assets/f1.json';

 
const drivers = ref(dataStanding.pilotes.map(driver => ({ ...driver, isTeam: false })));
const teams = ref(dataStanding.teams.map(team => ({ ...team, isTeam: true })));


const searchQuery = ref('');


const filteredItems = computed(() => {
  const query = searchQuery.value.toLowerCase();


  const filteredDrivers = drivers.value.filter(driver =>
    driver.firstname.toLowerCase().includes(query) ||
    driver.surname.toLowerCase().includes(query) ||
    driver.team.toLowerCase().includes(query)
  );


  const filteredTeams = teams.value.filter(team =>
    team.team.toLowerCase().includes(query)
  );

 
  return [...filteredDrivers, ...filteredTeams];
});
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
