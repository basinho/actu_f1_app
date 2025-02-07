<template>
    <div class="searchBar-div">
        <input class="searchBar" type="search" placeholder="Search drivers/teams">
    </div>
    <div class="circleDiv">
        <img v-if="img" :src="img" :alt="firstname" />
    </div>
</template>

<script setup>
    const props = defineProps ({
        img : String,
        img_team : String,
    })

</script>
<style scoped>
.searchBar-div{
    display: flex;
    justify-content: center;
}
.searchBar {
    width: 75%;
    height: 5vh;
  background-color: rgba(255,255,255,0.3);      
  padding: 10px;
  border-radius: 25px;
  color: white;
}

.searchBar::placeholder {
  color: #ffffff;  
  font-style: italic;
}

.circleDiv{
    margin-top: 2vh;
    background-color: rgba(255,255,255,0.7);
    width: 25vw;
    height: 11.5vh;
    border-radius: 50px;
    z-index: 1;
}
</style>    