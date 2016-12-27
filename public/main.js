import Vue from 'vue'
import VueRouter from 'vue-router'
import Element from 'element-ui'

import Index from './components/Index.vue'
import About from './components/About.vue'

const routes = [
  { path: '/', component: Index },
  { path: '/about', component: About }
]

const router = new VueRouter({
  routes
})

window.$router = router

import App from './App.vue'

new Vue({
  render: h => h(App),
  router
}).$mount('#app')