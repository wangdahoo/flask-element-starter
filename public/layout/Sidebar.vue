<template>
  <el-col :span="3" id="sidebar" style="height: 100%;">
    <el-menu default-active="1" theme="light" @select="handleSelect" style="height: 100%;">
      <el-menu-item index="1">处理中心</el-menu-item>
        <el-submenu index="2">
          <template slot="title">我的工作台</template>
          <el-menu-item index="2-1">选项1</el-menu-item>
          <el-menu-item index="2-2">选项2</el-menu-item>
          <el-menu-item index="2-3">选项3</el-menu-item>
        </el-submenu>
      <el-menu-item index="3">订单管理</el-menu-item>
    </el-menu>
  </el-col>
</template>
<script>
  export default{
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>
