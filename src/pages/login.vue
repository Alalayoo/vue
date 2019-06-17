<template>
  <div class="login_page">
    <el-container>
      <el-header>Header</el-header>
      <el-main>
        <el-form :model="loginForm" status-icon :rules="rules" ref="loginForm" label-width="100px" class="demo-ruleForm">
        <el-form-item label="用户名" prop="username">
          <el-input type="username" v-model="loginForm.username" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input type="password" v-model="loginForm.password" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" v-on:click="submitForm('loginForm')">登录</el-button>
        </el-form-item>
      </el-form>
      </el-main>
      <el-footer>Footer</el-footer>
    </el-container>
  </div>
</template>

<script>
  import {login} from '../api/common'
  export default {
    data () {
      return {
        loginForm: {
          username: '',
          password: ''
        },
        rules: {
          username: [
            { required: true, message: '请输入用户名', trigger: 'blur' }
          ],
          password: [
            { required: true, message: '请输入密码', trigger: 'blur' }
          ]
        },
        showLogin: false
      }
    },
    mounted () {
    },
    computed: {
    },
    methods: {
      async submitForm (formName) {
        this.$refs[formName].validate(async (valid) => {
          if (valid) {
            const res = await login(this.loginForm)
            if (res.status == 1) {
              this.$message({
                type: 'success',
                message: '登录成功'
              })
              this.$router.push('manage')
            } else {
              this.$message({
                type: 'error',
                message: res.message
              })
            }
          } else {
            this.$notify.error({
              title: '错误',
              message: '请输入正确的用户名密码',
              offset: 100
            })
            return false
          }
        })
      }
    },
    watch: {

    }
  }
</script>

<style scoped>
  .el-header, .el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }
  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;
  }
</style>
