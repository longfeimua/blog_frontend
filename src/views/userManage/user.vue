<template>
  <div>
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
    <el-button @click="openAddBox" type="warning" style="margin-right: 15px">添加用户</el-button>

<div class="adduser"  v-if="ifShow">
    <el-form label-width="80px" :model="user">
  <el-form-item label="账户">
    <el-input v-model="user.username"></el-input>
  </el-form-item>
  <el-form-item label="密码">
    <el-input v-model="user.password" type="password"></el-input>
  </el-form-item>
  <el-form-item label="邮箱">
    <el-input v-model="user.email"></el-input>
  </el-form-item>
    <el-form-item label="手机">
    <el-input v-model="user.mobile"></el-input>
  </el-form-item>
  </el-form>
    <el-button @click="add" type="warning" style="margin-right: 15px">确定添加</el-button>
</div>
  </div>
</template>

<script>
import { getUsers } from '../../network/userManage/userManage'
import { addUser } from '../../network/userManage/addUser'

export default {
  name: 'user',
  data () {
    return {
      // 所有用户数据
      tableData: [],
      user: {
        username: 'admin',
        password: '12',
        email: '12',
        mobile: '12'
      },
      ifShow: false
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
    openAddBox () {
      this.ifShow = true
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
