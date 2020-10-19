<template>
  <div class="login_container">
    <div class="login">
    <div class="pic"><img src="../assets/b8014a90f603738d7c8316c6b11bb051f919ec0d.jpg" alt="img" /></div>
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
      <el-button v-show="false" :plain="true"></el-button>
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
        name: '',
        passwd: ''
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
          resolve(res)
        })
      }).then(res => {
        console.log(res)
        if (res.status === 'fail') return this.$message.error('用户不存在或密码错误')
        // 登陆成功
        this.$message.success('登陆成功！')
        // 保存 token值
        window.sessionStorage.setItem('token', res.data.token)
        // 保存登陆信息
        this.$store.commit('login', res.data)
        // 跳转页面
        this.$router.push('/home')
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
  align-items: center;
}
img {
  height: 200px;
  width: 200px;
  background-color: #fff;
  border-radius: 50%;
}
.pic {
  width: 220px;
  height: 220px;
  border-radius: 50%;
  box-shadow: 0 0 10px rgb(51, 49, 49);
  transform: translate(0, -50%);
  background: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
