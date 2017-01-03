<template>
  <div class="page-login">
    <Navbar></Navbar>

    <el-row :gutter="20">
      <el-col :span="18" :offset="3">
        <div class="grid-content">
          <p class="f-el extra-light-black text-center">
            用户登录
          </p>

          <!-- Login Form -->
          <el-form ref="loginForm" :model="form" :rules="formRules">
            <el-form-item label="" prop="username">
              <el-input v-model="form.username" placeholder="邮箱"></el-input>
            </el-form-item>
            <el-form-item label="" prop="password">
              <el-input type="password" v-model="form.password" placeholder="密码"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="onSubmit" class="btn-block">登录</el-button>
            </el-form-item>
          </el-form>

          <p class="f-s extra-light-black">还没有账号？马上去 <router-link to="/register">注册</router-link></p>
        </div>
      </el-col>
    </el-row>
  </div>
</template>
<style lang="less" scoped>
  @import '../less/site.less';

  .page-login {
    padding: 80px 0 0 0;
    width: 100%;
    
    .el-row {
      &:last-child {
        margin-bottom: 0;
      }
    }
    .grid-content {
      max-width: 350px;
      margin: 0 auto;

      .btn-block {
        width: 100%;
      }
    }
  }
</style>
<script>
  import Navbar from '../layout/Navbar.vue'
  export default {
    components: {
      Navbar
    },

    data() {
      return {
        form: {
          username: '',
          password: ''
        },

        formRules: {
          username: [
            { required: true, message: '请输入邮箱地址', trigger: 'blur' },
            { type: 'email', message: '请输入正确的邮箱地址', trigger: 'blur,change' },
            { min: 5, max: 50, message: '长度在 50 个字符以内', trigger: 'blur' }
          ],
          password: [
            { required: true, message: '请输入密码', trigger: 'blur' },
            { min: 5, max: 50, message: '长度在 50 个字符以内', trigger: 'blur' }
          ]
        }
      }
    },

    methods: {
      onSubmit() {
        this.$refs.loginForm.validate((valid) => {
          if (!valid) return
          
          // Your Magic Here.

        })
      }
    }
  }
</script>
