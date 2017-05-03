<template>
  <div>
    <img src="./LandingPageView/assets/logo.png" alt="electron-vue">
    <h1>Welcome.</h1>
    <current-page></current-page>
    <versions></versions>
    <links></links>
    <b-alert state="danger" dismissible :show="showDismissibleAlert" @dismissed="showDismissibleAlert=false">
      Dismissible Alert!
    </b-alert>
    <b-button @click="showDismissibleAlert=true" variant="primary">Button A</b-button>
    <b-button variant="danger">Button B</b-button>
  </div>
</template>

<script>
  import CurrentPage from './LandingPageView/CurrentPage'
  import Links from './LandingPageView/Links'
  import Versions from './LandingPageView/Versions'
  export default {
    components: {
      CurrentPage,
      Links,
      Versions
    },
    data () {
      return {
        showDismissibleAlert: false
      }
    },
    name: 'landing-page'
  }
</script>

<style scoped>
  img {
    margin-top: -25px;
    width: 450px;
  }
</style>
