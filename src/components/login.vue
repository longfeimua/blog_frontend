<template>
  <div class="login_container">
    <div class="login">
      <img src="../assets/logo.png" alt="img" />
      <!--表单-->
      <el-form ref="form" :model="form" :rules="rule" label-width="80px">
        <el-form-item label="账户" prop="name">
          <el-input v-model="form.name" prefix-icon="el-icon-user"></el-input>
        </el-form-item>
        <el-form-item label="密码">
          <el-input v-model="form.passwd" type="password" prefix-icon="el-icon-s-promotion"></el-input>
        </el-form-item>
      </el-form>
      <el-row>
        <el-button type="primary" @click="login" icon="el-icon-s-promotion">登录</el-button>
      </el-row>
      <!--表单-->
    </div>
  </div>
</template>

<script>
import { loginPost } from '../network/login'

export default {
  name: 'login',
  data () {
    return {
      form: {
        name: 'admin',
        passwd: '123456'
      },
      rule: {
        name: [
          { min: 1, max: 9, message: '长度在 1 到 9 个字符', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    login () {
      // 发送登录信息
      const username = this.form.name
      const password = this.form.passwd
      // eslint-disable-next-line no-new
      new Promise((resolve, reject) => {
        loginPost({ username: username, password: password }).then(res => {
          console.log(res)
          resolve(res)
        })
      })
    }
  }
}
</script>

<style scoped>
.login_container {
  background-color: #2b4b6b;
  height: 100%;
}
.login {
  background: #fff;
  height: 500px;
  width: 650px;
  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
}
img {
  height: 200px;
  width: 200px;
  background-color: #fff;
  margin: 0 auto;
  border-radius: 50%;
  border: 1px solid rgb(230, 227, 93);
  box-shadow: 0 0 10px #eee;
  transform: translate(0, -50%);
}
</style>
