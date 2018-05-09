<template>
  <v-toolbar fixed class="blue" dark>
    <v-toolbar-title class="mr-4">
      <router-link class="home" tag="span" :to="{name: 'songs'}">Music App</router-link>
    </v-toolbar-title>
    <v-spacer></v-spacer>
    <v-toolbar-items>
        <v-btn v-if="!$store.state.isUserLoggedIn" :to="{path:'/login'}" flat dark>
          Login
        </v-btn>
        <v-btn v-if="!$store.state.isUserLoggedIn" :to="{path:'/register'}" flat dark>
          Sign Up
        </v-btn>
        <v-btn v-if="$store.state.isUserLoggedIn" @click="logout()" flat dark>
          Log Out
        </v-btn>
    </v-toolbar-items>
  </v-toolbar>
</template>

<script>
export default {
  methods: {
    logout () {
      this.$store.dispatch('setToken', null)
      this.$store.dispatch('setUser', null)
      this.$router.push({name: 'songs'})
    }
  }
}
</script>

<style scoped>
  .home {
    cursor: pointer;
  }

  .home.hover {
    color: #E9E;
  }
</style>
