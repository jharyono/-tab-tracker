<template>
  <v-container grid-list-xl text-xs-center>
    <v-layout row>
      <v-flex xs6>
        <song-metadata :song="song" />
      </v-flex>
      <v-flex xs6>
        <you-tube :youtubeId="song.youtubeId"/>
      </v-flex>
    </v-layout>
    <v-layout row>
      <v-flex xs6>
        <lyrics :song="song" />
      </v-flex>
      <v-flex xs6>
        <tab :song="song"/>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import SongMetadata from '@/components/ViewSong/MetaData'
import YouTube from '@/components/ViewSong/YouTube'
import Lyrics from '@/components/ViewSong/Lyrics'
import Tab from '@/components/ViewSong/Tab'
import SongsService from '@/services/SongsService'

export default {
  components: {
    SongMetadata,
    YouTube,
    Lyrics,
    Tab
  },
  data () {
    return {
      song: {}
    }
  },
  async mounted () {
    const songId = this.$store.state.route.params.songId
    this.song = (await SongsService.show(songId)).data
  }
}
</script>

<style scoped>

</style>
