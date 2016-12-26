import Vue from 'vue'
import VueRouter from 'vue-router'

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

const app = new Vue({
  router
}).$mount('#app')