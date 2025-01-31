<template>
  <div>
    <classementPosition 
      v-for="team in sortedTeams" 
      :key="team.team"
      :team="team.team" 
      :surname="team.engine"
      :points="team.points"
    />
  </div>
</template>

<script>
import ClassementPosition from "@/components/classementBlock.vue";

export default {
  components: {
    ClassementPosition,
  },
  props: {
    teams: {
      type: Array,
      default: () => [] // Évite l'erreur si `teams` n'est pas fourni
    }
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

<style scoped>
h1 {
  text-align: center;
  margin-bottom: 20px;
}
</style>
