<template>
    <div class="block" @click="toggleFollow">
        <div class="infos-date">
            <p class="date">{{ dateNumber }} </p>
            <div class="dateMonth-block">
              <p class="date">{{ dateMonth }} </p>
            </div>
      </div>
      <div class="info">
        <h2>{{ country }}</h2>
        <h3>{{ circuit }}</h3>
      </div>
    </div>
  </template>
  
  <script setup>
  const props = defineProps({
    circuit: String,
    country: String,      
    dateNumber: String,
    dateMonth: String
  });
  
  </script>
  
  <style scoped>
  .block {
    display: flex;
    align-items: center;
    background: rgba(255, 255, 255, 0.1);
    padding: 1rem;
    border-radius: 16px;
    width: 90vw;
    max-width: 400px;
    height: auto;
    margin-right: 0;
    gap: 30%;
  }
  

  .dateMonth-block{
    width: 100%;
    height: 25%;
    background-color: rgba(255, 255, 255, 0.5);
    padding: 5px;
    border-radius: 25px;
  }


  .info {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 45%;
  }

  .infos-date{
    display: flex;
    flex-direction: column;
    align-items: center;
    object-fit: cover;
  }
  
  p, h2, h3{
    font-family: "Pathway Extreme", serif;
    font-optical-sizing: auto;
    font-style: normal;
    font-weight: bold;
    font-variation-settings:"wdth" 100;
  }

  h2, .date {
    font-size: 1.75rem;
    margin: 0;
    color: white;
  }

  h3 {
    font-size: 1rem;
    margin: 0;
    color: #cccdd7;;
  }
  
  p {
    font-size: 0.5rem;
    margin: 5px 0;
    color: #cccdd7;
    font-weight: bold;
  }

  .dateMonth-block p {
    font-size: 1rem;
    margin: 5px 0;
    color: #cccdd7;
  }
  </style>
  