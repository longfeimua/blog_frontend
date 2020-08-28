<!--

添加用户表单内的验证问题未解决
-->
<template>
  <div>
  <el-header class="">
    <!--添加用户表单弹出框    op-->
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
    <!--添加用户表单弹出框   ed-->
    <!--用户表单展示列表    op-->
    <el-table :data="tableData.userlist" border style="width: 100%">
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
    <el-pagination @current-change="handleCurrentChange" background layout="prev, pager, next" :total=this.tableData.sumPage*10>
</el-pagination>
    <!--用户表单展示列表    op-->
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
      listNum: 3, // 每页数据个数**config
      // 请求的所有用户数据
      tableData: {
        userlist: [],
        // eslint-disable-next-line no-undef
        sumPage: 1,
        mutiuser: []
      },
      // 表单数据
      user: {
        username: null,
        password: null,
        email: null,
        mobile: null,
        Repassword: null
      },
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
    // 添加用户 请求
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
    // 添加用户表单重置功能
    clear () {
      this.$refs.clearForm.resetFields()
    },
    // 页码功能
    handleCurrentChange (page) {
      // 清空展示列表
      this.tableData.userlist = []
      // 根据页数添加对应页的数据
      let i
      for (i of this.tableData.mutiuser.slice(page * this.listNum - this.listNum, page * this.listNum)) {
        this.tableData.userlist.push(i)
      }
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
        this.tableData.sumPage = this.tableData.mutiuser.push(count) / this.listNum // 每页两个元素
      }
      // 给展示列表添加第一页数据
      for (let i = 0; i < this.listNum; i++) {
        this.tableData.userlist.push(this.tableData.mutiuser[i])
      }
    })
  }
}
</script>

<style>

</style>
