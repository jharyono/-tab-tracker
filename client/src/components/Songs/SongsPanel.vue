<template>
  <panel title="Songs">
    <v-btn
      slot="action"
      class="cyan accent-2"
      light
      small
      absolute
      right
      middle
      fab
      :to="{name: 'songs-create'}">
        <v-icon>
          mdi-plus
        </v-icon>
    </v-btn>
    <div
      class="song"
      v-for="song in songs"
      :key="song.id">
      <v-layout>
        <v-flex xs6>
          <div class="song-title orange--text">{{song.title}}</div>
          <div class="song-artist">{{song.artist}}</div>
          <div class="song-album">{{song.album}}</div>
          <div class="song-genre">{{song.genre}}</div>
          <v-btn
            text
            dark
            class="cyan"
            :to="{
              name: 'song',
              params: {
                songId: song.id
              }
            }">
            View
          </v-btn>
        </v-flex>
        <v-flex xs6>
          <img :src="song.albumImageUrl" alt="" class="album-image" />
        </v-flex>
      </v-layout>
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

<style  scoped>
.song {
  padding: 20px;
  height: 330px;
  overflow: hidden;
}
.song-title {
  font-size: 30px
}

.song-artist {
  font-size: 24px
}

.song-album, .song-genre {
  font-size: 18px
}

.album-image {
  width: 70%;
  margin: 0 auto;
}
</style>
