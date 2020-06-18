<template>
  <div id="app">
    <v-app>
      <page-header />
      <v-content>
        <v-container fluid>
          <router-view/>
          </v-container>
      </v-content>
    </v-app>
    <!-- <img src="./assets/logo.png"> -->
  </div>
</template>

<script>
import PageHeader from '@/components/Header.vue'
export default {
  name: 'app',
  components: {
    PageHeader
  }
}
</script>

<style scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
