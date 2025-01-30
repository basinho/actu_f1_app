<template>
  <ClassementBlock title="Classement Pilotes" :items="pilotes" type="pilotes" />
</template>

<script>
import ClassementBlock from "../components/classementBlock.vue";

export default {
  components: { ClassementBlock },
  data() {
    return {
      pilotes: [
        { id: 1, firstname: "Max", surname: "Verstappen", points: 150 },
        { id: 2, firstname: "Lewis", surname: "Hamilton", points: 120 }
      ]
    };
  }
};
</script>


<style>
.positions {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20%;
  gap: 1rem;
}
</style>
