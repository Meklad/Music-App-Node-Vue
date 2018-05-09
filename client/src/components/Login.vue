<template>
    <v-layout row>
      <v-flex xs12 sm6 offset-sm3>
        <panel title="Login">
          <p class="error" v-if="error">{{ error }}</p>
              <p class="success" v-if="success">{{ success }}</p>
              <v-text-field
                label="eMail"
                v-model="email"
              ></v-text-field>
              <v-text-field
                v-model="password"
                :append-icon="e1 ? 'Show' : 'Hide'"
                :append-icon-cb="() => (e1 = !e1)"
                :type="e1 ? 'password' : 'text'"
                name="input-10-1"
                label="Enter your password"
                hint="At least 8 characters"
                min="8"
                counter
              ></v-text-field>
              <v-btn  class="blue" dark @click="login">Login</v-btn>
        </panel>
      </v-flex>
    </v-layout>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'
export default {
  data () {
    return {
      fullname: '',
      username: '',
      email: '',
      password: '',
      success: null,
      error: null,
      e1: true
    }
  },

  methods: {
    async login () {
      try {
        const response = await AuthenticationService.login({
          email: this.email,
          password: this.password
        })
        console.log(response)
        this.$store.dispatch('setToken', response.data.token)
        this.$store.dispatch('setUser', response.data.data)
        this.success = response.data.message
        setTimeout(() => {
          this.$router.push({
            name: 'songs'
          })
        }, 1000)
      } catch (error) {
        this.error = error.response.data.error
      }
    }
  }
}
</script>

<style scoped>

</style>
