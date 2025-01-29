<script setup>
import classementPosition from '../components/classementBlock.vue'
const positions = [
  { id: 1, label: '1' },
  { id: 2, label: '2' },
  { id: 3, label: '3' },
  { id: 4, label: '4' },
  { id: 5, label: '5' }
];
</script>

<template>
    <div class="positions">
        <classementPosition v-for="position in positions" :key="position.id" :label="position.label"/>
    </div>
</template>

<style>
    .positions{
        display: flex; 
        flex-direction: column;
        align-items: center;
        gap: 1rem;
    }

</style>