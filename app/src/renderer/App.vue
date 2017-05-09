<template>
  <div id="app">
    <b-navbar toggleable type="inverse" variant="success">
      <b-link class="navbar-brand" to="#">
        <span>Electron VueJS Playground</span>
      </b-link>
      <b-nav is-nav-bar>
        <router-link tag="li" to="/" router-link-exact-active="active" class="nav-item">
          <a class="nav-link">Home</a>
        </router-link>
        <router-link tag="li" to="/electron" router-link-exact-active="active" class="nav-item">
          <a class="nav-link">Electron</a>
        </router-link>
        <router-link tag="li" to="/archive" router-link-exact-active="active" class="nav-item">
          <a class="nav-link">Archive</a>
        </router-link>
        <router-link tag="li" to="/bootstrap" router-link-exact-active="active" class="nav-item">
          <a class="nav-link">Bootstrap</a>
        </router-link>
        <router-link tag="li" to="/vuex" router-link-exact-active="active" class="nav-item">
          <a class="nav-link">VueX</a>
        </router-link>
        <router-link tag="li" to="/webview" router-link-exact-active="active" class="nav-item">
          <a class="nav-link">WebView</a>
        </router-link>
      </b-nav>
    </b-navbar>
    <router-view></router-view>
  </div>
</template>

<script>
  import store from 'renderer/vuex/store'
  export default {
    store
  }
</script>

<style>
  @import url(https://fonts.googleapis.com/css?family=Lato:300);

  * {
    margin: 0;
    padding: 0;
  }

  html,
  body { height: 100%; }

  body {
    background:
      radial-gradient(
        ellipse at center,
        rgba(255, 255, 255, 1) 0%,
        rgba(229, 229, 229, .85) 100%
      );
    background-position: center;
    font-family: Lato, Helvetica, sans-serif;
  }
</style>
