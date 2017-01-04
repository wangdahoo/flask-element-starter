<template>
  <div class="container">

    <Navbar>
      <template slot="content">
        <div class="navbar-content-wrapper">

          <div class="navbar-content">
            <!-- 头部导航内容 -->
          </div>

          <div class="user-actions">
            <el-menu theme="light" mode="horizontal" @select="userActionSelect">
              <el-menu-item index="1">
                <el-badge is-dot style="line-height: 14px;">
                  <i class="icon el-icon-message"></i>
                </el-badge>
              </el-menu-item>

              <el-submenu index="3">
                <template slot="title">
                  <span class="username" v-text="username"></span>
                </template>
                <el-menu-item index="3-1">
                  <i class="icon ion-android-person"></i> Logout
                </el-menu-item>
              </el-submenu>
            </el-menu>
          </div>
        </div>
      </template>
    </Navbar>

    <div class="dashboard">
      <Sidebar></Sidebar>
      <div class="page-container">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>
<style lang="less">
  @import "../less/variables";
  @import "../less/mixins";

  .container {
    .flexbox();
    .flex(1);

    .navbar-content-wrapper {
      background: @extra-light-gray;
      .flexbox();
      .flex(1);

      .navbar-content {
        .flex(1);
        padding: 15px 20px;
      }

      .user-actions {
        .el-menu {
          min-width: 150px;
          border-radius: 0;

          .user-message {

          }
        }
      }
    }

    

    .dashboard {
      padding: 60px 0 0 200px;
      width: 100%;
      height: auto;

      .page-container {
        padding: 20px;
      }
    }
  }
</style>
<script>
  import Navbar from './Navbar.vue'
  import Sidebar from './Sidebar.vue'

  export default {
    components: {
      Navbar,
      Sidebar
    },

    data() {
      return {
        username: '157195705@qq.com'
      }
    },

    methods: {
      userActionSelect(key, keyPath) {
        console.log(key, keyPath)
      }
    }
  }

</script>
