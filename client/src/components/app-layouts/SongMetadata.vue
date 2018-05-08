<template>
  <panel title="Song MetaData">
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
      </v-flex>
      <v-flex xs6>
        <img class="album-image"
              :src="song.albumImageUrl"
              :alt="song.artist + ' - ' + song.title"
        />
        <br>
        <p>{{song.album}}</p>
      </v-flex>
      </v-layout>
  </panel>
</template>

<script>
import Panel from '@/components/app-layouts/Panel'
export default {
  components: {
    Panel
  },
  props: [
    'song'
  ]
}
</script>

<style scope>
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
