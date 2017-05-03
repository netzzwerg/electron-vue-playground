<template>
  <div>
    <b-table striped :items="items" :fields="fields">
      <template slot="name" scope="item">{{item.value}}</template>
    </b-table>
  </div>
</template>

<script>
  import os from 'os'

  export default {
    data () {
      return {
        items: [{
          name: 'os.platform()',
          value: os.platform()
        }, {
          name: 'process.versions',
          value: process.versions
        }, {
          name: 'remote.app.getName()',
          value: this.$electron.remote.app.getName()
        }, {
          name: 'remote.app.getVersion()',
          value: this.$electron.remote.app.getVersion()
        }, {
          name: 'remote.app.getAppPath()',
          value: this.$electron.remote.app.getAppPath()
        }, {
          name: 'remote.app.getLocale()',
          value: this.$electron.remote.app.getLocale()
        }, {
          name: 'remote.app.getPath("home")',
          value: this.$electron.remote.app.getPath('home')
        }, {
          name: 'remote.screen.getPrimaryDisplay().size.height',
          value: this.$electron.remote.screen.getPrimaryDisplay().size.height
        }, {
          name: 'remote.screen.getPrimaryDisplay().size.width',
          value: this.$electron.remote.screen.getPrimaryDisplay().size.width
        }, {
          name: 'remote.process.versions.chrome',
          value: this.$electron.remote.process.versions.chrome
        }, {
          name: 'remote.process.getProcessMemoryInfo().peakWorkingSetSize',
          value: this.$electron.remote.process.getProcessMemoryInfo().peakWorkingSetSize
        }, {
          name: 'remote.process.getProcessMemoryInfo().privateBytes',
          value: this.$electron.remote.process.getProcessMemoryInfo().privateBytes
        }, {
          name: 'remote.process.getProcessMemoryInfo().sharedBytes',
          value: this.$electron.remote.process.getProcessMemoryInfo().sharedBytes
        }, {
          name: 'remote.process.getProcessMemoryInfo().workingSetSize',
          value: this.$electron.remote.process.getProcessMemoryInfo().workingSetSize
        }, {
          name: 'remote.process.getSystemMemoryInfo().free',
          value: this.$electron.remote.process.getSystemMemoryInfo().free
        }, {
          name: 'remote.process.getSystemMemoryInfo().total',
          value: this.$electron.remote.process.getSystemMemoryInfo().total
        }],
        fields: {
          name: {
            label: 'Property Name'
          },
          value: {
            label: 'Value'
          }
        }
      }
    }
  }
</script>
