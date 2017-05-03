<template>
  <div class="electron-page">
    <h1>Electron</h1>
    <info></info>
  </div>
</template>

<script>
  import Info from './ElectronPageView/Info'
  export default {
    name: 'electron-page',
    components: {
      Info
    }
  }
</script>

<style scoped>
  div.electron-page {
    margin-top: 20px;
    padding: 0 20px;
  }
  div.electron-page > h1 {
    align-items: center;
    justify-content: center;
    text-align: center;
  }
</style>
