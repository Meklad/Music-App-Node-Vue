<template>
    <v-layout row>
      <v-flex xs12 sm6 offset-sm3>
        <panel title="Register">
          <p class="error" v-if="error">{{ error }}</p>
              <p class="success" v-if="success">{{ success }}</p>
              <v-text-field
                label="Full Name"
                v-model="fullname"
              ></v-text-field>
              <v-text-field
                label="Username"
                v-model="username"
              ></v-text-field>
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
              <v-btn  class="blue" dark @click="register">Register</v-btn>
        </panel>
      </v-flex>
    </v-layout>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'
import Panel from '@/components/app-layouts/Panel'

export default {
  components: {
    Panel
  },

  data () {
    return {
      fullname: '',
      username: '',
      email: '',
      password: '',
      success: null,
      error: null,
      e1: false
    }
  },

  methods: {
    async register () {
      try {
        const response = await AuthenticationService.register({
          fullname: this.fullname,
          username: this.username,
          email: this.email,
          password: this.password
        })
        console.log(response)
        this.success = response.data.message
        this.$store.dispatch('setToken', response.data.token)
        this.$store.dispatch('setUser', response.data.data)
      } catch (error) {
        this.error = error.response.data.error
      }
    }
  }
}
</script>

<style scoped>

</style>
