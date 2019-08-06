import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Things from './views/Things.vue'
import Login from './views/Login.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/login',
      name: 'login',     
      component: Login
    },
    {
      path: '/things',
      name: 'things',            
      component: Things
    }
  ]
})
