  <script setup>
  import { RouterLink, RouterView } from 'vue-router'
  import navigationBar from './components/navBar.vue'
  import variableHeader from './components/header.vue'
 
  </script>

  <template>
    <header>
      <variableHeader/> 
    </header>
    
    <RouterView/>


    <navigationBar/>
  </template>

  <style scoped>

  header {
    height: 18vh;
    max-height: 100vh;
  }



  .logo {
    display: block;
    margin: 0 auto 2rem;
  }



  @media (min-width: 1024px) {
    header {
      display: flex;
      place-items: center;
      padding-right: calc(var(--section-gap) / 2);
    }

    .logo {
      margin: 0 2rem 0 0;
    }

    header .wrapper {
      display: flex;
      place-items: flex-start;
      flex-wrap: wrap;
    }

    nav {
      text-align: left;
      margin-left: -1rem;
      font-size: 1rem;

      padding: 1rem 0;
      margin-top: 1rem;
    }
  }
  </style>
