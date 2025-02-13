<template>
  <div v-if="circuitDetails">
    <h1>{{ circuitDetails.circuit }}</h1>
    <p>Pays: {{ circuitDetails.country }}</p>
    <img :src="circuitDetails.circuit_img" alt="Circuit Image" />
    <div v-html="circuitDetails.sessions"></div>
  </div>
  <div v-else>
    <p>Chargement des détails du circuit...</p>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const circuitDetails = ref(null);

const fetchCircuitDetails = async (circuitName) => {
  try {
    const response = await fetch('../assets/f1.json'); 
    const data = await response.json();
    const details = data.find(circuit => circuit.circuit === circuitName);
    if (details) {
      circuitDetails.value = details;
    } else {
      console.log('Circuit non trouvé');
    }
  } catch (error) {
    console.error('Erreur lors de la récupération des données :', error);
  }
};

onMounted(() => {
  const circuitName = route.params.circuitName;
  fetchCircuitDetails(circuitName);
});
</script>

<style scoped>

</style>
