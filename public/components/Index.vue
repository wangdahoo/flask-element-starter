<template>
  <div style="min-height: 500px;">
    <Dashboard></Dashboard>
    <router-view></router-view>
  </div>
</template>
<style lang='css'>

</style>
<script>
  import Dashboard from '../layout/Dashboard.vue'
  export default{
    components: {
      Dashboard
    }
  }
</script>
