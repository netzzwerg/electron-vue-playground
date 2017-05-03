<template>
  <div class="vuex-page">
    <h1>VueX</h1>
    <progress-bar-card></progress-bar-card>
    <controls-card></controls-card>
    <controls-card></controls-card>
  </div>
</template>

<script>
  import ProgressBarCard from './VueXPageView/ProgressBarCard'
  import ControlsCard from './VueXPageView/ControlsCard'
  export default {
    name: 'vuex-page',
    components: {
      ProgressBarCard,
      ControlsCard
    }
  }
</script>

<style scoped>
  div.vuex-page {
    margin-top: 20px;
    padding: 0 20px;
    align-items: center;
    justify-content: center;
    text-align: center;
  }
</style>
