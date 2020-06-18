<template>
  <v-container grid-list-xl text-xs-center>
    <v-layout row wrap>
      <v-flex xs8 offset-xs2>
        <search-song/>
        <songs-panel class="mt-2"/>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import SongsPanel from './SongsPanel'
import SearchSong from './SearchSong'
import SongsService from '@/services/SongsService'
export default {
  components: {
    SongsPanel,
    SearchSong
  },
  data () {
    return {
      songs: null
    }
  },
  async mounted () {
    this.songs = (await SongsService.index()).data
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
