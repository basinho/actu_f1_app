<template>
  <div>
    <h2>{{ title }}</h2>
    <table>
      <thead>
        <tr>
          <th>#</th>
          <th v-if="type === 'pilotes'">Pilote</th>
          <th v-else>Équipe</th>
          <th>Points</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in sortedItems" :key="index">
          <td>{{ index + 1 }}</td>
          <td v-if="type === 'pilotes'">
            {{ item.firstname }} {{ item.surname }}
          </td>
          <td v-else>
            {{ item.team }}
          </td>
          <td>{{ item.points }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    items: Array,
    type: String // "pilotes" ou "constructeurs"
  },
  computed: {
    sortedItems() {
      return this.items.sort((a, b) => b.points - a.points);
    }
  }
};
</script>

<style scoped>
table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 10px;
}
th, td {
  border: 1px solid #ddd;
  padding: 8px;
  text-align: center;
}
th {
  background-color: #f4f4f4;
}
</style>
