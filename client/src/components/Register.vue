<template>
  <div>
    <h1>Register</h1>
    <input type="text" name="fullname" placeholder="Full Name" v-model="fullname"><br>
    <input type="text" name="username" placeholder="UserName" v-model="username"><br>
    <input type="email" name="email" placeholder="Email" v-model="email"><br>
    <input type="password" name="password" placeholder="Password" v-model="password"><br>
    <button @click="register">Register</button>
  </div>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'
export default {
  data () {
    return {
      fullname: '',
      username: '',
      email: '',
      password: ''
    }
  },

  methods: {
    async register () {
      const response = await AuthenticationService.register({
        fullname: this.fullname,
        username: this.username,
        email: this.email,
        password: this.password
      })

      console.log(response.data)
    }
  }
}
</script>

<style scoped>

</style>
