<template>
    <v-layout row>
      <v-flex xs4 offset-xs1>
        <panel title="Song MetaData">
          <div class="danger-alert" v-if="error">{{ error }}</div>
          <div class="success-alert" v-if="success">{{ success }}</div>
          <v-text-field
            label="Title"
            required
            :rules="[required]"
            v-model="song.title"
          ></v-text-field>
          <v-text-field
            label="Artist"
            required
            :rules="[required]"
            v-model="song.artist"
          ></v-text-field>
          <v-text-field
            label="Genre"
            required
            :rules="[required]"
            v-model="song.genre"
          ></v-text-field>
          <v-text-field
            label="Album"
            required
            :rules="[required]"
            v-model="song.album"
          ></v-text-field>
          <v-text-field
            label="Album Image Url"
            required
            :rules="[required]"
            v-model="song.albumImageUrl"
          ></v-text-field>
          <v-text-field
            label="Youtube ID"
            required
            :rules="[required]"
            v-model="song.youtubeId"
          ></v-text-field>
        </panel>
      </v-flex>
      <v-flex xs-6 offset-xs1>
        <panel title="Song Structure">
          <v-text-field
            label="Lyrics"
            required
            :rules="[required]"
            v-model="song.lyrics"
            multi-line
          ></v-text-field>
          <v-text-field
            label="Tab"
            required
            :rules="[required]"
            v-model="song.tab"
            multi-line
          ></v-text-field>
        </panel>
        <v-btn  class="blue" dark @click="update">Update</v-btn>
      </v-flex>
    </v-layout>
</template>

<script>
import SongsService from '@/services/SongsService'
export default {
  data () {
    return {
      song: {
        title: null,
        artist: null,
        genre: null,
        album: null,
        albumImageUrl: null,
        youtubeId: null,
        lyrics: null,
        tab: null
      },
      required: (value) => !!value || 'Required.',
      success: null,
      error: null
    }
  },

  methods: {
    async update (req, res) {
      this.error = null
      const areAllFieldsFilledIn = Object.keys(this.song).every(key => !!this.song[key])
      if (!areAllFieldsFilledIn) {
        this.error = 'Please fill in all required fields.'
        return
      }
      const songId = this.$store.state.route.params.songId
      try {
        await SongsService.put(this.song)
        this.success = 'Successfuly Publish New Song.'
        setTimeout(() => {
          this.$router.push({
            name: 'song',
            params: songId

          })
        }, 1000)
      } catch (err) {
        console.log(err)
      }
    }
  },
  async mounted () {
    try {
      const songId = this.$store.state.route.params.songId
      this.song = (await SongsService.show(songId)).data.song
    } catch (err) {
      console.log('Error While Get Song Data: ', err)
    }
  }
}
</script>

<style scoped>

</style>
