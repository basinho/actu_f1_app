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
    <PositionStanding
      v-for="team in sortedTeams"
      :key="team.team"
      :team="team.engine"
      :surname="team.team"
      :points="team.points"
      :team_img="team.team_img"
    />
  </div>
</template>

<script>
import PositionStanding from "../components/standingBlock.vue";
import dataStanding from "../assets/f1.json";
import subHeader from '../components/subHeader.vue';

export default {
  components: {
    PositionStanding,
    subHeader
  },
  data() {
    return {
      teams: dataStanding.teams 
    };
  },
  computed: {
    sortedTeams() {
      return this.teams.sort((a, b) => b.points - a.points);
    }
  }
};
</script>

<style scoped>
.positions {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 25%;
  gap: 1rem;
}
</style>
