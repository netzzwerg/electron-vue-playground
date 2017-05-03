<template>
  <div class="bootstrap-page">
    <h1>Bootstrap 4</h1>
    <b-alert variant="danger" dismissible :show="showDismissibleAlert" @dismissed="showDismissibleAlert=false">
      Dismissible Alert!
    </b-alert>
    <b-button @click="showDismissibleAlert=true" variant="primary">Button A</b-button>
    <b-button variant="danger">Button B</b-button>
  </div>
</template>

<script>
  export default {
    name: 'bootstrap-page',
    data () {
      return {
        showDismissibleAlert: false
      }
    }
  }
</script>

<style scoped>
  div.bootstrap-page {
    margin-top: 20px;
    padding: 0 20px;
    align-items: center;
    justify-content: center;
    text-align: center;
  }
</style>
