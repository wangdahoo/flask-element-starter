<template>
  <div class="page-register">
    <Navbar></Navbar>

    <el-row :gutter="20">
      <el-col :span="18" :offset="3">
        <div class="grid-content">
          <p class="f-el extra-light-black text-center">
            用户注册
          </p>

          <!-- Register Form -->
          <el-form ref="registerForm" :model="form" :rules="formRules">
            <el-form-item label="" prop="username">
              <el-input v-model="form.username" placeholder="邮箱"></el-input>
            </el-form-item>
            <el-form-item label="" prop="password">
              <el-input type="password" v-model="form.password" placeholder="密码"></el-input>
            </el-form-item>
            <el-form-item label="" prop="confirm">
              <el-input type="password" v-model="form.confirm" placeholder="再次输入密码"></el-input>
            </el-form-item>

            <el-form-item>
              <el-row :gutter="10">
                <el-col :span="12">
                  <el-button type="primary" @click="onSubmit" class="btn-block">注 册</el-button>
                </el-col>
                <el-col :span="12">
                  <el-button type="default" @click="onReset" class="btn-block">重 置</el-button>
                </el-col>
              </el-row>
            </el-form-item>
          </el-form>

          <div class="divider"></div>
          <p class="f-s extra-light-black">已经有账号？立即
            <router-link to="/login">登录</router-link>
          </p>
        </div>
      </el-col>
    </el-row>
  </div>
</template>
<style lang="less" scoped>
  .page-register {
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

      .divider {
        background-color: #eee;
        width: 100%;
        height: 1px;
        margin: 15px 0 0 0;
      }

      .btn-block {
        width: 100%;
      }
    }
  }
</style>
<script>
  import _ from 'lodash'
  import Navbar from '../layout/Navbar.vue'

  const formDefault = {
    username: '',
    password: '',
    confirm: ''
  }

  export default {
    components: {
      Navbar
    },

    data() {
      return {
        form: {
          username: '',
          password: '',
          confirm: ''
        },

        formRules: {
          username: [
            { required: true, message: '请输入邮箱地址', trigger: 'blur' },
            { type: 'email', message: '请输入正确的邮箱地址', trigger: 'blur,change' },
            { min: 1, max: 50, message: '长度在 50 个字符以内', trigger: 'blur' }
          ],
          password: [
            { required: true, message: '请输入密码', trigger: 'blur' },
            { min: 1, max: 50, message: '长度在 50 个字符以内', trigger: 'blur' }
          ],
          confirm: [
            { required: true, message: '请再次输入密码', trigger: 'blur' },
            { min: 1, max: 50, message: '长度在 50 个字符以内', trigger: 'blur' }
          ]
        }
      }
    },

    methods: {
      onSubmit() {
        this.$refs.registerForm.validate((valid) => {
          if (!valid) return

        })
      },

      onReset() {
        _.extend(this.form, formDefault)
      }
    }
  }
</script>
