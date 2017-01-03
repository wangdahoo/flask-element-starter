<template>
  <div class="sidebar">
    <el-menu default-active="1" theme="dark" @select="handleSelect">
      <el-menu-item index="1">
        <i class="icon ion-android-home"></i>
        Home
      </el-menu-item>

      <el-menu-item index="2">
        <i class="icon ion-android-list"></i>
        Applications
      </el-menu-item>

      <el-submenu index="3">
        <template slot="title">
          <i class="icon ion-podium"></i> 
          Trending
        </template>
        <el-menu-item index="3-1">
          <i class="icon ion-android-people"></i> Customer
        </el-menu-item>
        <el-menu-item index="3-2">
          <i class="icon ion-pie-graph"></i> Analysis
        </el-menu-item>
      </el-submenu>

      <el-menu-item index="4">
        <i class="icon ion-android-settings"></i>
        Settings
      </el-menu-item>
    </el-menu>
  </div>
</template>
<style lang="less" scoped>
  .sidebar {
    position: fixed;
    left: 0;
    top: 0;
    width: 200px;
    height: 100%;
    padding-top: 60px;
    .el-menu {
      height: 100%;
      border-radius: 0;
      > .el-menu-item, > .el-submenu {
        .icon {
          margin-right: 15px;
        }
      }
    }
  }
</style>
<script>
  export default {
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath)
        
        let path = '/dashboard'

        if (key == '1') {
          path += '/home'
        } else if (key == '2') {
          path += '/applications'
        } else if (key == '3-1') {
          path += '/trending/customers'
        } else if (key == '3-2') {
          path += '/trending/analysis'
        } else {
          path += '/settings'
        }

        $router.push({
          path: path
        })

      }
    }
  }
</script>
