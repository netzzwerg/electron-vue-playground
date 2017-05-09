<template>
  <div>
    <b-table striped :items="items" :fields="fields">
      <template slot="name" scope="item"></template>
    </b-table>
  </div>
</template>

<script>
  import glob from 'glob'
  import electron from 'electron'

  let archive = {
    list () {
      let path = electron.remote.app.getAppPath()
      let result = glob.sync(path + '/**/*.*')
      let files = result.map(function (a, b) {
        let obj = {'name': a.slice(path.length)}
        return obj
      })
      return files
    }
  }

  export default {
    data () {
      return {
        items: archive.list(),
        fields: {
          name: {
            label: 'Files'
          }
        }
      }
    }
  }
</script>
