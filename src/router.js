import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Things from './views/Things.vue'
import Login from './views/Login.vue'
import Lista from './views/Lista.vue'

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
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      // component: function () { 
      //   return import(/* webpackChunkName: "about" */ './views/Login.vue')
      // }
      component: Login
    },
    {
      path: '/things',
      name: 'things',            
      component: Things
    },
    {
      path: '/lista',
      name: 'lista',            
      component: Lista
    }
  ]
})
