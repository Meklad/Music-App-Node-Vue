<template>
  <div>
    <v-layout row>
      <v-flex xs5>
        <song-metadata :song="song" />
      </v-flex>
      <v-flex xs6 offset-xs1>
        <you-tube :youtubeId="song.youtubeId" />
      </v-flex>
    </v-layout>
    <br>
    <v-layout row>
      <v-flex xs5>
        <tab :tab="song.tab" />
      </v-flex>
      <v-flex xs6 offset-xs1>
        <lyrics :lyrics="song.lyrics"></lyrics>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
import SongsService from '@/services/SongsService'
import Panel from '@/components/app-layouts/Panel'
import SongMetadata from '@/components/app-layouts/ViewSongComponents/SongMetadata'
import YouTube from '@/components/app-layouts/ViewSongComponents/YouTube'
import Tab from '@/components/app-layouts/ViewSongComponents/Tab'
import Lyrics from '@/components/app-layouts/ViewSongComponents/Lyrics'

export default {
  components: {
    Panel,
    SongMetadata,
    YouTube,
    Tab,
    Lyrics
  },
  data () {
    return {
      song: {}
    }
  },
  async mounted () {
    const songId = this.$store.state.route.params.songId
    try {
      this.song = (await SongsService.show(songId)).data.song
    } catch (err) {
      console.log(err)
    }
  }
}
</script>

<style scoped>

</style>
