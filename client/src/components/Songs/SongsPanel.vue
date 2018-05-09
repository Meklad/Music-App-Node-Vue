<template>
  <panel title="Songs">
    <v-btn
    slot="action"
    :to="{path:'/songs/create'}"
    color="grey lighten-1"
    light
    small
    absolute
    right
    middle
    fab>
    <v-icon>add</v-icon>
  </v-btn>
  <div v-for="song in songs" :key="song.id" class="song">
    <v-layout>
      <v-flex xs6>
        <div class="song-title">
          {{ song.title }}
        </div>
        <div class="song-artist">
          {{ song.artist }}
        </div>
        <div class="song-genre">
          {{ song.genre }}
        </div>
        <v-btn dark class="cyan"
                :to="{name: 'song', params: {songId: song.id}}">
          View Song
        </v-btn>
      </v-flex>
      <v-flex xs6>
        <img class="album-image"
              :src="song.albumImageUrl"
              :alt="song.artist + ' - ' + song.title"
        />
      </v-flex>
    </v-layout>
    <hr color="#0097F4">
  </div>
</panel>
</template>

<script>
import SongsService from '@/services/SongsService'

export default {
  data () {
    return {
      songs: null
    }
  },
  watch: {
    '$route.query.search': {
      immediate: true,
      async handler (value) {
        this.songs = (await SongsService.index(value)).data
      }
    }
  }
}
</script>

<style scoped>
.song {
  padding: 20px;
  height: 225px;
  overflow: hidden;
}
.song-title {
  font-size: 30px;
}
.song-artist {
  font-size: 24px;
}
.song-genre {
  font-size: 18px;
}
.song-image {
  width: 50%;
  margin: 0 auto;
}
</style>
