<template>
    <div class="block">
      <!-- Affichage de l'image du pilote si disponible -->
      <img v-if="driverImage" :src="driverImage" :alt="label" class="driver-img" />
      <div class="info">
        <h2>{{ label }}</h2> <!-- Affiche la position, le nom et l'équipe -->
        <p><strong>Équipe :</strong> {{ team }}</p>
        <p><strong>Points :</strong> {{ points }}</p>
        <p><strong>Nationalité :</strong> {{ nationality }}</p>
      </div>
    </div>
  </template>
  
  <script setup>
  import { computed } from 'vue';
  
  const props = defineProps({
    label: String,      // Affiche la position, le nom et l'équipe dans le composant parent
    team: String,
    points: String,
    nationality: String,
    driverId: String,   // Utilisé pour l'image
  });
  
  // Calculer l'URL de l'image du pilote en utilisant driverId
  const driverImage = computed(() => {
    if (props.driverId) {
      // Utilisez l'ID du pilote pour générer l'URL de l'image
      return `https://www.formula1.com/content/dam/fom-website/2023/drivers/${props.driverId}.png.transform/2col/image.png`;
    }
    return '';  // Si pas d'ID, retourner une chaîne vide pour ne pas afficher d'image
  });
  </script>
  
  <style>
  .block {
    display: flex;
    align-items: center;
    background: rgba(255, 255, 255, 0.1);
    padding: 1rem;
    border-radius: 16px;
    width: 90vw;
    max-width: 400px;
    height: auto;
    box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.2);
    transition: transform 0.2s ease-in-out;
  }
  
  .block:hover {
    transform: scale(1.05);
  }
  
  .driver-img {
    width: 80px;
    height: 80px;
    border-radius: 50%;
    object-fit: cover;
    margin-right: 1rem;
  }
  
  .info {
    display: flex;
    flex-direction: column;
  }
  
  h2 {
    font-size: 1.2rem;
    margin: 0;
    color: white;
  }
  
  p {
    margin: 5px 0;
    color: white;
    font-weight: bold;
  }
  </style>
  