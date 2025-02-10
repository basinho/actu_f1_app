<template>
        <div class="circleDiv">
            <img v-if="img" :src="img" :alt="firstname" />
        </div>
</template>

<script setup>
    const props = defineProps ({
        firstname: String,
        img : String,
        img_team : String,
    })

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
    overflow: hidden; 
    margin: 0 auto;
}

img {
    width: 100%; 
    height: 100%;
    object-fit: cover; 
}
</style>    