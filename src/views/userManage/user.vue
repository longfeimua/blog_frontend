<!--

添加用户表单内的验证问题未解决
-->
<template>
  <div>
  <el-header class="">
    <!--弹出框-->
    <el-popover placement="right" width="600" trigger="click">
    <el-form :span="12" label-width="80px" :model="user" :rules="rule" ref="clearForm">
  <el-form-item label="账户" prop="username">
    <el-input v-model="user.username" ></el-input>
  </el-form-item>
  <el-form-item label="密码" prop="password">
    <el-input v-model="user.password" type="password" ></el-input>
  </el-form-item>
    <el-form-item label="确认密码" prop="Repassword">
    <el-input v-model="user.Repassword" type="password" ></el-input>
  </el-form-item>
  <el-form-item label="邮箱" prop="email">
    <el-input v-model="user.email"></el-input>
  </el-form-item>
    <el-form-item label="手机" prop="mobile">
    <el-input v-model="user.mobile"></el-input>
  </el-form-item>
  </el-form>
    <el-button @click="add" type="primary" style>确定添加</el-button>
    <el-button @click="clear" type="danger" style>重置</el-button>
  <el-button type="warning" style="margin-top: 10px;" slot="reference">添加用户 </el-button>
  </el-popover>
  </el-header>

    <el-table :data="tableData" border style="width: 100%">
    <el-table-column
      prop="id"
      label="ID"
      width="60">
    </el-table-column>
    <el-table-column
      prop="username"
      label="账户"
      width="100">
    </el-table-column>
    <el-table-column
      prop="mobile"
      label="手机"
      width="180">
    </el-table-column>
    <el-table-column
      prop="email"
      label="邮箱">
    </el-table-column>
    </el-table>

  </div>
</template>

<script>
// 数据网络请求核心模块导入
import { getUsers } from '../../network/userManage/userManage'
import { addUser } from '../../network/userManage/addUser'

export default {
  name: 'user',
  data () {
    const validatorPasswd = (rule, value, callback) => {
      if (value) {
        if (value !== this.user.password) {
          callback(new Error('前后密码不一致！'))
          console.log(456)
        } else {
          callback()
        }
      }
    }
    const validatorMobile = (rule, value, callback) => {
      const reg = /^[1](([3][0-9])|([4][5-9])|([5][0-3,5-9])|([6][5,6])|([7][0-8])|([8][0-9])|([9][1,8,9]))[0-9]{8}$/
      if (!reg.test(value)) callback(new Error('请输入正确手机号'))
      callback()
    }
    return {
      // 请求的所有用户数据
      tableData: [],
      // 表单数据
      user: {
        username: null,
        password: null,
        email: null,
        mobile: null,
        Repassword: null
      },
      ifShow: false,
      // 规则验证
      rule: {
        username: [
          { required: true, message: '请输入账户名', trigger: 'blur' },
          { min: 5, max: 8, message: '长度在 5 到 8 个字符', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          { min: 2, max: 11, message: '长度在 2 到 11 个字符', trigger: 'blur' }
        ],
        Repassword: [
          { validator: validatorPasswd, trigger: 'blur' }
        ],
        mobile: [
          { validator: validatorMobile, trigger: 'blur' },
          { required: true, message: '请输入手机号', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    add () {
      // eslint-disable-next-line no-new
      new Promise((resolve, reject) => {
        addUser({ username: this.username, password: this.password, email: this.email, mobile: this.mobile }).then(res => {
          resolve(res)
        })
      }).then(res => {
        console.log(res)
      })
    },
    clear () {
      this.$refs.clearForm.resetFields()
    }
  },
  created () {
    // 获取用户数据
    new Promise((resolve, reject) => {
      getUsers({ pagenum: 1, pagesize: 10 }).then(res => {
        resolve(res)
      })
    }).then(res => {
      let count
      for (count of res.data.users) {
        this.tableData.push(count)
      }
    })
  }
}
</script>

<style>

</style>
