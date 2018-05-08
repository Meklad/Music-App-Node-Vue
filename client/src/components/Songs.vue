<template>
    <v-layout row>
      <v-flex xs12 sm6 offset-sm3>
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
                       @click="navigateTo({name: 'song', params: {songId: song.id}})">
                  View Song
                </v-btn>
              </v-flex>
              <v-flex xs6>
                <img class="album-image"
                     src="../assets/images/avatar.png"
                     :alt="song.artist + ' - ' + song.title"
                />
              </v-flex>
            </v-layout>
            <hr color="#0097F4">
          </div>
        </panel>
      </v-flex>
    </v-layout>
</template>

<script>

import SongsService from '@/services/SongsService'
import Panel from '@/components/app-layouts/Panel'

export default {
  components: {
    Panel
  },
  data () {
    return {
      songs: []
    }
  },
  async mounted () {
    try {
      this.songs = (await SongsService.index()).data.songs
    } catch (error) {
      this.error = error.response.data.error
    }
  },
  methods: {
    navigateTo (route) {
      this.$router.push(route)
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
