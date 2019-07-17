import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueResource from 'vue-resource'
import './plugins/element.js'

Vue.config.productionTip = false
Vue.use(VueResource)

Vue.http.options.root = 'http://www.vue.blog.menut.ro/';

new Vue({
  router,
  store,
  render: function (h) { return h(App) }
}).$mount('#app')
