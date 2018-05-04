<template>
  <v-layout column>
    <v-flex xs6 offset-xs-3>
      <div class="white elevation-2">
        <v-toolbar flat dense class="cyan" dark>
          <v-toolbar-title>Register</v-toolbar-title>
          <div class="pl-4 pr-4 pt-2 pb-2">
              <p class="error" v-if="error">{{ error }}</p><br><br>
              <p class="success" v-if="error">{{ success }}</p><br><br>
              <input type="text" name="fullname" placeholder="Full Name" v-model="fullname"><br>
              <input type="text" name="username" placeholder="UserName" v-model="username"><br>
              <input type="email" name="email" placeholder="Email" v-model="email"><br>
              <input type="password" name="password" placeholder="Password" v-model="password"><br><br>
              <button @click="register">Register</button>
          </div>
        </v-toolbar>
      </div>
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
      error: null
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
        this.success = response.data.success
        console.log(this.success)
      } catch (error) {
        this.error = error.response.data.error
      }
    }
  }
}
</script>

<style scoped>
  .success {
    color: green;
  }
  .error {
    color: red;
  }
</style>
