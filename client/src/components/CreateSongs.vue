<template>
  <v-container grid-list-xl text-xs-center>
    <v-layout row>
      <v-flex xs5>
        <panel title="Song Metadata">
          <v-text-field
            label="Title"
            v-model="song.title"
            required
            :rules="[required]"
          ></v-text-field>

          <v-text-field
            label="Artist"
            v-model="song.artist"
            required
            :rules="[required]"
          ></v-text-field>

          <v-text-field
            label="Genre"
            v-model="song.genre"
            required
            :rules="[required]"
          ></v-text-field>

          <v-text-field
            label="Album"
            v-model="song.album"
            required
            :rules="[required]"
          ></v-text-field>

          <v-text-field
            label="Album Image Url"
            v-model="song.albumImageUrl"
            required
            :rules="[required]"
          ></v-text-field>

          <v-text-field
            label="Youtube ID"
            v-model="song.youtubeId"
            required
            :rules="[required]"
          ></v-text-field>
        </panel>
      </v-flex>
      <v-flex xs7>
        <panel title="Song Structure">
          <v-textarea
            auto-grow
            label="Song Lyrics"
            rows="1"
            v-model="song.lyrics"
          ></v-textarea>
          <v-textarea
            auto-grow
            label="Tab"
            rows="1"
            v-model="song.tab"
          ></v-textarea>
          <span class="red--text" v-if="error">{{error}}</span>
          <div class="mt-2 mb-2">
            <v-btn color="success" @click="create">Save Song</v-btn>
          </div>
        </panel>
      </v-flex>
    </v-layout>
  </v-container>
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
      error: null,
      required: (value) => !!value || 'Requred.'
    }
  },
  methods: {
    async create () {
      this.error = null
      const areAllFieldFilledIn = Object
        .keys(this.song)
        .every(key => !!this.song[key])

      if (!areAllFieldFilledIn) {
        this.error = 'Please fill in all the require fields.'
        return
      }
      try {
        await SongsService.post(this.song)
        this.$router.push({
          name: 'songs'
        })
      } catch (err) {
        console.log(err)
      }
    }
  }
}
</script>

<style scoped>

</style>
