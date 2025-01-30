<script setup>
import { useRoute } from 'vue-router'
import { computed } from 'vue'

const route = useRoute()
const pageTitle = computed(() => route.meta.title || 'Default Title')
const pagesubTitle = computed(() => route.meta.title || 'Default Title')
</script>

<template>
    <header>
      <nav>
        <h1>{{ pageTitle }}</h1>
        <router-link to="/classements/pilotes">Classements</router-link>
      </nav>
    </header>
  </template>
  
