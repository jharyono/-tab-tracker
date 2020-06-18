<template>
  <v-container grid-list-xl text-xs-center>
    <v-layout row wrap>
      <v-flex xs4 offset-xs4>
        <panel title="Login">
          <v-form name="tab-tracker-form" autocomplete="off">
            <v-text-field
              type="email"
              name="email"
              v-model="email"
              label="Email"
              prepend-icon="mdi-account-circle"
            />
            <v-text-field
              :type="showPassword ? 'text' : 'password'"
              name="password"
              v-model="password"
              label="Password"
              autocomplete="new-password"
              prepend-icon="mdi-lock"
              :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
              @click:append="showPassword = !showPassword"
            />
          </v-form>
          <v-snackbar top :color="snackbar.color" v-model="snackbar.show">
          {{ snackbar.message }}
          <v-btn
            color="white"
            text
            dark
            @click="snackbar.show = false"
          >
            Close
          </v-btn>
          </v-snackbar>
          <div class="mt-4 mb-4">
            <v-btn color="success" @click="login">Login</v-btn>
          </div>
        </panel>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'
export default {
  data () {
    return {
      email: '',
      password: '',
      error: null,
      showPassword: false,
      snackbar: {
        show: false,
        message: null,
        color: null
      }
    }
  },
  methods: {
    async login () {
      try {
        const response = await AuthenticationService.login({
          email: this.email,
          password: this.password
        })
        this.$store.dispatch('setToken', response.data.token)
        this.$store.dispatch('setUser', response.data.user)
      } catch (error) {
        this.error = error.response.data.error
        this.snackbar = {
          message: this.error,
          color: 'error',
          show: true
        }
      }
    }
  }
}
</script>

<style scoped>

</style>
