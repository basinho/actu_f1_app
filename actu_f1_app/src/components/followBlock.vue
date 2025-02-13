<template>
    <div class="circleDiv">
      <img v-if="img" :src="img" :alt="firstname" />
      <div class="follow-indicator" :class="{ followed: isFollowed }" @click="toggleFollow">
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
    id: [String, Number],
  });
  
  const isFollowed = ref(false);
  
  const loadFollows = () => {
    const follows = JSON.parse(localStorage.getItem('follows')) || [];
    isFollowed.value = follows.includes(props.id);
  };
  

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
    overflow: visible; 
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
    bottom: -10px; 
    right: -10px; 
    background-color: rgba(0, 0, 0, 0.7);
    color: white;
    border-radius: 50%;
    width: 30px; 
    height: 30px; 
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 18px; 
    transition: background-color 0.3s;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
  }
  
  .follow-indicator.followed {
    background-color: #4CAF50; 
  }
  </style>
  