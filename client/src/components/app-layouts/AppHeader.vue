<template>
  <v-toolbar fixed class="blue" dark>
    <v-toolbar-title class="mr-4">
      <span class="home" @click="navigateTo({name: 'Home'})">Music App</span>
    </v-toolbar-title>
    <!-- !TODO: Implement Me -->
    <!-- <v-toolbar-items>
      <v-btn flat dark>
        Browse Music
      </v-btn>
    </v-toolbar-items> -->
    <v-spacer></v-spacer>
    <v-toolbar-items>
        <v-btn v-if="!$store.state.isUserLoggedIn" :to="{path:'/login'}" flat dark>
          Login
        </v-btn>
        <v-btn v-if="!$store.state.isUserLoggedIn" :to="{path:'/register'}" flat dark>
          Sign Up
        </v-btn>
    </v-toolbar-items>
  </v-toolbar>
</template>

<script>
export default {
  methods: {
    navigateTo (route) {
      this.$router.push(route)
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
