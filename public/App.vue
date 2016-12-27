<template>
  <div id="app">
    <Navbar></Navbar>
    <router-view></router-view>
  </div>
</template>
<script>
  import './layout/site.css'
  import Navbar from './layout/Navbar.vue'

  export default {
    components: {
      Navbar
    }
  }
</script>
