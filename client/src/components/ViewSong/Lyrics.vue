<template>
  <panel title="Lyrics">
    <v-textarea class="mylyrics"
      auto-grow
      readonly
      v-model="song.lyrics"
    >
    </v-textarea>
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
  .mylyrics {
    width: 100%;
    font-family: monospace;
    border: none;
    height: 400px;
    border-style: none;
    border-color: transparent;
    overflow: auto;
    padding: 20px;
  }
</style>
