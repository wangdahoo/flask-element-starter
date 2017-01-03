import 'normalize.css/normalize.css'
import 'basscss/css/basscss.css'
import 'ionicons/css/ionicons.css'
import 'element-ui/lib/theme-default/index.css'

import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

import ElementUI from 'element-ui'
Vue.use(ElementUI)

import Login from './components/Login.vue'
import Register from './components/Register.vue'

import Dashboard from './layout/Dashboard.vue'
import Home from './components/dashboard/Home.vue'
import Applications from './components/dashboard/Applications.vue'
import TrendingCustomers from './components/dashboard/TrendingCustomers.vue'
import TrendingAnalysis from './components/dashboard/TrendingAnalysis.vue'
import Settings from './components/dashboard/Settings.vue'

const routes = [
  {
    path: '/login',
    component: Login
  },
  {
    path: '/register',
    component: Register
  },
  {
    path: '/dashboard',
    component: Dashboard,
    children: [
      { path: 'home', component: Home },
      { path: 'applications', component: Applications },
      { path: 'trending/customers', component: TrendingCustomers },
      { path: 'trending/analysis', component: TrendingAnalysis },
      { path: 'settings', component: Settings }
    ]
  }
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
