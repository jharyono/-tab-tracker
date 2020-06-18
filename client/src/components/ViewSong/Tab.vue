<template>
  <panel title="Tab">
    <v-textarea class="mytab"
      auto-grow
      readonly
      v-model="song.tab"
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
  .mytab {
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
