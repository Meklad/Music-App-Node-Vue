import Vue from 'vue'
import Router from 'vue-router'
import Register from '@/components/Register'
import Login from '@/components/Login'
import Songs from '@/components/Songs/Songs'
import CreateSong from '@/components/CreateSong'
import EditSong from '@/components/EditSong'
import ViewSong from '@/components/ViewSong'

Vue.use(Router)

export default new Router({
  routes: [
    // Registraion Route...
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    // Login Route...
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    // Get All Songs Route...
    {
      path: '/songs',
      name: 'songs',
      component: Songs
    },
    // Create new song...
    {
      path: '/songs/create',
      name: 'songs-create',
      component: CreateSong
    },
    // Edit song...
    {
      path: '/songs/:songId/edit',
      name: 'song-edit',
      component: EditSong
    },
    // Show song with id...
    {
      path: '/songs/:songId',
      name: 'song',
      component: ViewSong
    },
    {
      path: '*',
      redirect: 'songs'
    }
  ]
})
