<template>
  <panel title="Song Metadata">
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
            name: 'song-edit',
            params () {
              return {
                songId: song.id
              }
            }
          }">
          Edit
        </v-btn>

      </v-flex>
      <v-flex xs6>
        <img :src="song.albumImageUrl" alt="" class="album-image" />
      </v-flex>
    </v-layout>
  </panel>
</template>

<script>
export default {
  props: [
    'song'
  ]
}
</script>

<style scoped>

.album-image {
  width: 70%;
  margin: 0 auto;
}

</style>
