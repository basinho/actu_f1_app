<template>
    <div class="block">
      <div class="info">
        <h3>{{ firstname }}</h3> 
        <h2>{{ surname }}</h2>
        <p>{{ team }}</p>
      </div>
      <div class="infos-points">
        <img v-if="img || team_img" :src="computedImg" :alt="firstname" class="driver-img" />
        <p class="points">{{ points }} pts</p>
      </div>
    </div>
  </template>
  
  <script setup>
  import { useRoute } from 'vue-router';
  import { computed } from 'vue';
  const props = defineProps({
    firstname: String,
    surname: String,      
    team: String,
    points: Number,
    img: String,  
    team_img: String
  });
  
  const route = useRoute();

const computedImg = computed(() => {

  if (route.name === '/classements/pilotes') {
    return props.img;  
  } else if (route.name === '/classements/constructeurs') {
    return props.team_img;
  }
  return props.img || props.team_img;
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
    gap: 30%;;
    box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.2);
    transition: transform 0.2s ease-in-out;
  }
  
  .block:hover {
    transform: scale(1.05);
  }
  
  .driver-img {
    width: 80px;
    height: 80px;
    object-fit: cover;
    margin-right: 1rem;
  }

  .info {
    display: flex;
    flex-direction: column;
    width: 45%;
  }

  .infos-points{
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  
  p, h2, h3{
    font-family: "Pathway Extreme", serif;
    font-optical-sizing: auto;
    font-style: normal;
    font-weight: bold;
    font-variation-settings:"wdth" 100;
  }

  h2, .points {
    font-size: 1.75rem;
    margin: 0;
    color: white;
  }

  h3 {
    font-size: 1.25rem;
    margin: 0;
    color: white;
  }
  
  p {
    font-size: 0.75rem;
    margin: 5px 0;
    color: #cccdd7;
    font-weight: bold;
  }
  </style>
  