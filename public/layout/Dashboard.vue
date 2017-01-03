<template>
  <div class="container">

    <Navbar>
      <template slot="content">
        <div class="navbar-content-wrapper">

          <div class="navbar-content">
            <!-- 头部导航内容 -->
          </div>

          <div class="user-actions">
            <el-menu default-active="1" theme="light" mode="horizontal" @select="userActionSelect" class="user-actions-menu">
              <el-submenu index="1">
                <template slot="title">
                  <span class="username" v-text="username"></span>
                </template>
                <el-menu-item index="1-1">
                  <i class="icon ion-android-person"></i> 退出登录
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
  @import '../less/site.less';
  .container {
    .flexbox();
    .flex(1);

    .navbar-content-wrapper {
      background: @extra-light-gray;
      .flexbox();
      .flex(1);

      .navbar-content {
        .flex(1);
      }

      .user-actions {
        .el-menu {
          min-width: 150px;
          border-radius: 0;
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
