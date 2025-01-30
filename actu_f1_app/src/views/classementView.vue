<template>
    <div>
      <h1>Classements</h1>
      <nav>
        <router-link to="/classements/pilotes"> Pilotes</router-link> |
        <router-link to="/classements/constructeurs">Constructeurs</router-link>
      </nav>
      <router-view />
    </div>
  </template>
  
  <style scoped>
  div{
    font-family: "Pathway Extreme", serif;
    font-optical-sizing: auto;
    font-style: normal;
    font-weight: bold;
    font-variation-settings:"wdth" 100;
    color:white;
  }
  </style>