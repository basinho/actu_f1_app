<template>
  <header>
    <subHeader/>
  </header>
  
  <div class="positions">
      <PositionStanding 
        v-for="team in sortedTeams" 
        :team="team.engine" 
        :surname="team.team"
        :points="team.points"
      />
  </div>
</template>

<script>
import PositionStanding from "../components/standingBlock.vue";
import dataStanding from "../assets/f1.json";
import subHeader from '../components/subHeader.vue'

export default {
  components: {
    PositionStanding,
    subHeader
  },
  data() {
    return {
      teams: dataStanding // Définir les données importées dans la propriété `teams`
    };
  },
  computed: {
    groupedTeams() {
      if (!Array.isArray(this.teams)) {
        return {}; // Retourne un objet vide si `teams` est undefined
      }
      
      return this.teams.reduce((acc, team) => {
        if (!acc[team.team]) {
          acc[team.team] = {
            team: team.team,
            engine: team.engine,
            points: 0
          };
        }
        acc[team.team].points += team.points;
        return acc;
      }, {});
    },
    
    sortedTeams() {
      return Object.values(this.groupedTeams).sort((a, b) => b.points - a.points);
    }
  }
};
</script>

<style>
.positions {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom:25%;
  gap: 1rem;
}
</style>

