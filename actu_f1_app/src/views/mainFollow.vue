<template>
  <div>
    <div class="searchBar-div">
      <input
        class="searchBar"
        type="search"
        placeholder="Search drivers/teams"
        v-model="searchQuery"
      />
    </div>
    <div class="grid">
      <template v-if="sortedItems.length">
        <followBlock
          v-for="item in sortedItems"
          :key="item.id || item.team"
          :firstname="item.firstname || item.team"
          :img="item.img || item.team_img"
          :isTeam="item.isTeam"
          :id="item.id || item.team"
        />
      </template>
      <p v-else>Aucun résultat trouvé.</p>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';
import followBlock from '../components/followBlock.vue';
import dataStanding from '../assets/f1.json';

// Données des pilotes et des équipes
const drivers = ref(dataStanding.pilotes.map(driver => ({ ...driver, isTeam: false })));
const teams = ref(dataStanding.teams.map(team => ({ ...team, isTeam: true })));

// État de recherche
const searchQuery = ref('');
const follows = ref([]);

// Charger les follows depuis le localStorage
const loadFollows = () => {
  follows.value = JSON.parse(localStorage.getItem('follows')) || [];
};

// Propriété calculée pour filtrer et trier les éléments
const sortedItems = computed(() => {
  const query = searchQuery.value.toLowerCase();

  // Filtrer et trier les pilotes
  const filteredDrivers = drivers.value
    .filter(driver =>
      driver.firstname.toLowerCase().includes(query) ||
      driver.surname.toLowerCase().includes(query) ||
      driver.team.toLowerCase().includes(query)
    )
    .sort((a, b) => {
      // Placer les suivis en premier
      return follows.value.includes(b.id) - follows.value.includes(a.id);
    });

  // Filtrer et trier les équipes
  const filteredTeams = teams.value
    .filter(team =>
      team.team.toLowerCase().includes(query)
    )
    .sort((a, b) => {
      // Placer les suivis en premier
      return follows.value.includes(b.team) - follows.value.includes(a.team);
    });

  return [...filteredDrivers, ...filteredTeams];
});

// Charger les follows au montage du composant
onMounted(() => {
  loadFollows();
});
</script>

<style scoped>
.searchBar-div {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
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
