<template>
    <v-layout row>
      <v-flex xs12 sm6 offset-sm3>
        <br>
        <songs-search-panel />
        <br>
        <songs-panel />
      </v-flex>
    </v-layout>
</template>

<script>
import SongsPanel from './SongsPanel'
import SongsSearchPanel from './SongsSearchPanel'

export default {
  components: {
    SongsPanel,
    SongsSearchPanel
  }
}
</script>

<style scoped>

</style>
