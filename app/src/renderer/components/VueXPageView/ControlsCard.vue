<template>
  <b-card class="controls-card" variant="success">
    <b-button-group>
      <b-button @click="incrementCounter">Plus</b-button>
      <b-button @click="decrementCounter">Minus</b-button>
      <b-button @click="resetCounter">Reset</b-button>
    </b-button-group>
  </b-card>
</template>

<script>
  export default {
    name: 'controls-card',
    methods: {
      decrementCounter () {
        this.$store.dispatch('decrementMain')
      },
      incrementCounter () {
        this.$store.dispatch('incrementMain')
      },
      resetCounter () {
        this.$store.dispatch('resetMain')
      }
    }
  }
</script>

<style scoped>
  .controls-card {
    margin: 20px 0;
  }
</style>
