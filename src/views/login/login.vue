<template>
  <div class="login-container">
    <Header title="CRM" small-title="只要学不死，就往死里学" ></Header>
    <div class="img-class">
      <img src="~@/assets/images/IMG_7114.png">
    </div>
    <div class="form-class">
      <h3 style="margin-top: 30px">登录</h3>
      <el-form :model="loginForm"
               status-icon
               :rules="ruleForm" ref="ruleForm"
               label-width="100px"
               class="demo-ruleForm">
        <div style="padding: 15% 15% 0 0;text-align: center">

          <el-form-item label="账号" prop="pass">
            <el-input type="text" v-model="loginForm.user_name" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="密码" prop="pass">
            <el-input type="password" v-model="loginForm.password" autocomplete="off" @keyup.enter="handleLogin"></el-input>
          </el-form-item>
        </div>
        <div style="margin-top: 50px">
          <el-form-item>
            <el-button type="primary" @click.prevent="handleLogin('ruleForm')">登录</el-button>
            <el-button @click="resetForm('ruleForm')">重置</el-button>
          </el-form-item>
        </div>
      </el-form>
    </div>
  </div>

</template>

<script>
import Header from '@/components/component/Header/Header'

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'login',
  components: {
    Header
  },
  data () {
    return {
      loginMode: true, // 登录方式切换
      loginForm: {
        user_name: 'admin',
        password: ''
      },
      ruleForm: {
        user_name: [{ required: true, message: '请输入用户名', trigger: 'blur' }],
        password: [{ required: true, message: '请输入密码', trigger: 'blur' }]
      },
      loading: false,
      capsTooltip: false,
      passwordType: 'password'
    }
  },
  methods: {
    handleLogin () {
      if (this.loginForm.user_name === '' || this.loginForm.password === '') {
        alert('请补全用户信息')
        return
      }
      if (this.loginForm.user_name === 'admin' && this.loginForm.password === 'admin') {
        localStorage.setItem('token', 'hhh')
        this.$router.replace('/home')
      } else {
        alert('密码输入错误')
      }
    },
    resetForm (formName) {
      this.$refs[formName].resetFields()
    }
  }

}
</script>

<style lang="less" scoped>
.login-container {
  background-color: #3C3C3C;
}
.img-class{
  position: absolute;
  top: 0px; left: 0px;
  width: 60%;
  img {
    width: 100%;
    height: 90%;
    position: relative;
    top: 50px;
  }
}
.form-class {
  width: 350px;
  height: 350px;
  border:1px solid #D5D5D5;
  text-align: center;
  position: absolute;
  top: 25%;right: 10%
}
</style>
