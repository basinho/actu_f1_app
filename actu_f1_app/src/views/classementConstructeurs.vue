<template>
  <ClassementBlock title="Classement Constructeurs" :items="constructeurs" type="constructeurs" />
</template>

<script>
import ClassementBlock from "../components/classementBlock.vue";

export default {
  components: { ClassementBlock },
  data() {
    return {
      constructeurs: [
        { team: "Red Bull Racing", points: 170 },
        { team: "Ferrari", points: 220 }
      ]
    };
  }
};
</script>


  <style scoped>
  .positions {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 20%;
    gap: 1rem;
  }

  .team-block {
    background: rgba(255, 255, 255, 0.1);
    padding: 15px;
    border-radius: 16px;
    width: 90vw;
    text-align: center;
  }

  .info {
    margin-top: 10px;
  }
  </style>
