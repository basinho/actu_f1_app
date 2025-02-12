<template>
    <div class="circleDiv" @click="toggleFollow">
      <img v-if="img" :src="img" :alt="firstname" />
      <div class="follow-indicator" :class="{ followed: isFollowed }">
        {{ isFollowed ? '-' : '+' }}
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  
  const props = defineProps({
    firstname: String,
    img: String,
    img_team: String,
    isTeam: {
      type: Boolean,
      default: false,
    },
    id: [String, Number], // Ajoutez un identifiant unique pour chaque élément
  });
  
  const isFollowed = ref(false);
  
  // Charger l'état des follows depuis le localStorage
  const loadFollows = () => {
    const follows = JSON.parse(localStorage.getItem('follows')) || [];
    isFollowed.value = follows.includes(props.id);
  };
  
  // Mettre à jour l'état des follows dans le localStorage
  const updateFollows = (follows) => {
    localStorage.setItem('follows', JSON.stringify(follows));
  };
  
  const toggleFollow = () => {
    isFollowed.value = !isFollowed.value;
  
    let follows = JSON.parse(localStorage.getItem('follows')) || [];
    if (isFollowed.value) {
      follows.push(props.id);
    } else {
      follows = follows.filter((itemId) => itemId !== props.id);
    }
  
    updateFollows(follows);
  };
  
  // Charger les follows au montage du composant
  onMounted(() => {
    loadFollows();
  });
  </script>
  
  <style scoped>
  .circleDiv {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 25vw;
    height: 12vh;
    border-radius: 50%;
    background-color: rgba(255, 255, 255, 0.7);
    overflow: visible; /* Assurez-vous que les éléments peuvent dépasser */
    margin: 0 auto;
    padding: 10%;
    box-sizing: border-box;
    cursor: pointer;
    transition: transform 0.2s;
    position: relative;
  }
  
  .circleDiv:hover {
    transform: scale(1.1);
  }
  
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
  
  .follow-indicator {
    position: absolute;
    bottom: -10px; /* Ajustez pour faire ressortir le cercle */
    right: -10px; /* Ajustez pour faire ressortir le cercle */
    background-color: rgba(0, 0, 0, 0.7);
    color: white;
    border-radius: 50%;
    width: 30px; /* Augmentez la taille pour mieux voir */
    height: 30px; /* Augmentez la taille pour mieux voir */
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 18px; /* Augmentez la taille du texte */
    transition: background-color 0.3s;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3); /* Ajoutez une ombre pour mieux voir */
  }
  
  .follow-indicator.followed {
    background-color: #4CAF50; /* Vert pour indiquer le suivi */
  }
  </style>
  