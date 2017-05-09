<template>
  <div class="archive-page">
    <h1>Electron Archive (app.asar)</h1>
    <list></list>
  </div>
</template>

<script>
  import List from './ArchivePageView/List'
  export default {
    name: 'archive-page',
    components: {
      List
    }
  }
</script>

<style scoped>
  div.archive-page {
    margin-top: 20px;
    padding: 0 20px;
  }
  div.archive-page > h1 {
    align-items: center;
    justify-content: center;
    text-align: center;
  }
</style>
