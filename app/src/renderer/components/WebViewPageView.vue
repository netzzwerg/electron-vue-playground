<template>
  <div class="webview-page">
    <h1>WebView</h1>
    <webview id="foo" v-bind:src="getWebviewPath" style="display:inline-flex; width:640px; height:480px"></webview>
  </div>
</template>

<script>
  import electron from 'electron'

  const winURL = process.env.NODE_ENV === 'development'
  ? `http://localhost:${require('../../../../config').port}`
  : `file://${electron.remote.app.getAppPath()}/dist`

  export default {
    name: 'webview-page',
    data () {
      return {
        src: '/webview/index.html'
      }
    },
    computed: {
      getWebviewPath () {
        return winURL + this.src
      }
    }
  }
</script>

<style scoped>
  div.webview-page {
    margin-top: 20px;
    padding: 0 20px;
    align-items: center;
    justify-content: center;
    text-align: center;
  }
</style>
