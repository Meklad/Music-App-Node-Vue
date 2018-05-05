import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Register from '@/components/Register'

Vue.use(Router)

export default new Router({
  routes: [
    // Landing Page Route...
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    // Registraion Route...
    {
      path: '/register',
      name: 'register',
      component: Register
    }
  ]
})
