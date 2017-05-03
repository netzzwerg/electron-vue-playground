<template>
  <b-card class="progress-bar-card" variant="success">
    <b-progress v-model="count" :precision="1" animated variant="warning"></b-progress>
  </b-card>
</template>

<script>
  export default {
    name: 'progress-bar-card',
    computed: {
      count () {
        return this.$store.state.counters.main
      }
    }
  }
</script>

<style scoped>
  .progress-bar-card {
    margin: 20px 0;
  }
</style>
