<script setup>
import { useRoute } from 'vue-router'
import { computed } from 'vue'
const route = useRoute()
const pageTitle = computed(() => route.meta.title || 'Default Title')
</script>
<template>
    <h1>{{ pageTitle }}</h1>
</template>
<style scoped>
h1 {
    font-family: "Pathway Extreme", serif;
    font-optical-sizing: auto;
    font-style: normal;
    font-weight: bold;
    font-size: 34px;
    font-variation-settings:"wdth" 100;
    color:white;
    margin-left: 4vw;
}
</style>