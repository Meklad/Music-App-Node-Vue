<template>
  <div id="app">
    <v-app>
      <app-header></app-header>
      <main>
        <v-container fluid>
          <router-view/>
        </v-container>
      </main>
    </v-app>
  </div>
</template>

<script>
import AppHeader from '@/components/app-layouts/AppHeader.vue'
export default {
  name: 'App',
  components: {
    AppHeader
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.danger-alert {
  color: white;
  background: red;
  border: 1px solid red;
  border-radius: 3px;
},
.success-alert {
  color: white;
  background: green;
  border: 1px solid green;
  border-radius: 3px;
}
</style>
