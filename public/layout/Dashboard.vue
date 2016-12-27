<template>
  <el-row class="container">
    <Sidebar></Sidebar>

    <el-col :span="21">
      Page Content Goes Here.
    </el-col>
  </el-row>
</template>

<style>
  .container {
    height: 100%;
  }
</style>

<script>
  import Sidebar from './Sidebar.vue'

  export default {
    components: {
      Sidebar
    },

    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>
