
<template>
    <nav>
        <div class="button-navBar">
            <RouterLink to="/recents" class="nav-link">
                <img src="../assets/recent_icon.svg">

            </RouterLink>
            <RouterLink to="/suivis" class="nav-link">
                <img src="../assets/suivis_icon.svg">
            </RouterLink>
            <RouterLink to="/courses" class="nav-link">
                <img src="../assets/course_icon.svg">  
            </RouterLink>
            <RouterLink to="/classements/Pilotes" class="nav-link">
                <img src="../assets/classement_icon.svg">
            </RouterLink>
        </div>
    </nav>
</template>

<script>
import {RouterLink, RouterView } from 'vue-router'
</script>

<style scoped>
nav{
    background-color: red;
    height: 10%;
    width: 100vw;
    position: fixed;
    border-radius: 15px 15px 0px 0px;
    bottom: 0;
    margin: 0;
    right: 0;
    padding: 0;
}

img{
    width: 30px;
    height: 30px;
    transition: opacity 0.3s, filter 0.3s;
}

.button-navBar{
    position: relative;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    top: 20%;
    gap: 3rem;
}

.nav-link img {
    opacity: 0.5;
}
    
.router-link-active img {
    opacity: 1;
    filter: brightness(0) saturate(100%) invert(1);
}
</style>