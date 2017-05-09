export default [
  {
    path: '/',
    name: 'home-page',
    component: require('components/LandingPageView')
  },
  {
    path: '/bootstrap',
    name: 'bootstrap-page',
    component: require('components/BootstrapPageView')
  },
  {
    path: '/electron',
    name: 'electron-page',
    component: require('components/ElectronPageView')
  },
  {
    path: '/archive',
    name: 'archive-page',
    component: require('components/ArchivePageView')
  },
  {
    path: '/vuex',
    name: 'vuex-page',
    component: require('components/VueXPageView')
  },
  {
    path: '/webview',
    name: 'webview-page',
    component: require('components/WebViewPageView')
  },
  {
    path: '*',
    redirect: '/'
  }
]
