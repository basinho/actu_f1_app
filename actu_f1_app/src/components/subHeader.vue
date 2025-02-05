<template>
    <div class="title-block">
        <RouterLink to="/classements/pilotes" class="title-nav">
            <h3>Pilotes</h3>
        </RouterLink>
        <RouterLink to="/classements/constructeurs" class="title-nav">
            <h3>Constructeurs</h3>
        </RouterLink>
    </div>
</template>

<script>
import { RouterLink } from 'vue-router';
</script>

<style>
.title-block{
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 20vw;
    margin-bottom: 4vh;
    
}

.title-nav {
    font-family: "Pathway Extreme", serif;
    font-optical-sizing: auto;
    font-style: normal;
    font-weight: bold;
    font-size: 1rem;
    font-variation-settings:"wdth" 100;
    color:#dddcc7;
}

a :hover{
    color: white;
}
</style>