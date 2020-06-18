<template>
  <div>
    <v-toolbar fixed class="cyan" dark>
      <v-app-bar-nav-icon></v-app-bar-nav-icon>
      <v-toolbar-title>
        <router-link
          class="backHome"
          tag="span"
          :to="{
            name: 'songs'
          }">
          Tab Tracker
        </router-link>
      </v-toolbar-title>
      <v-toolbar-items>
        <v-btn
          text="text"
          class="ml-8"
          :to= "{ name: 'songs'}">
          Browse
        </v-btn>
      </v-toolbar-items>
      <v-spacer></v-spacer>
      <v-toolbar-items>
        <v-btn
          v-if="!$store.state.isUserLoggedIn"
          text="text"
          :to="{name: 'login'}">
          Login
        </v-btn>
        <v-btn
          v-if="!$store.state.isUserLoggedIn"
          text="text"
          :to="{name: 'register'}">
          Sign Up
        </v-btn>
        <v-btn
          v-if="$store.state.isUserLoggedIn"
          text="text"
          @click="logout">
          Log Out
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>
  </div>
</template>

<script>

export default {
  methods: {
    logout () {
      this.$store.dispatch('setToken', null)
      this.$store.dispatch('setUser', null)
      this.$router.push({
        name: 'songs'
      })
    }
  }
}
</script>

<style scoped>
.backHome {
  cursor: pointer;
}
</style>
