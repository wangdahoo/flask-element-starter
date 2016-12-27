<template>
  <el-row style="background: #324057;">
    <el-col :span="6" style="padding-left: 60px; padding-top: 7px;">
      <img src="/static/logo.png" class="logo">
      <span class="app-name">Admin Template</span>
    </el-col>

    <el-col :span="15">
      &nbsp;
    </el-col>

    <el-col :span="3">
      <el-menu default-active="1" theme="dark" mode="horizontal" @select="handleSelect">
        <el-submenu index="1">
          <template slot="title">Admin</template>
          <el-menu-item index="1-1">退出</el-menu-item>
        </el-submenu>
      </el-menu>
    </el-col>
  </el-row>
</template>
<style lang='css'>
  .logo {
    position: absolute;
    top: 15px;
    left: 16px;
    width: 30px;
    height: 30px;
  }

  .app-name {
    font-size: 18px;
    line-height: 50px;
    color: #eff2f7;
  }

</style>
<script>
  export default{
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>
