<!--
1.角色列表
2.添加角色
3.根据ID查询角色
4.编辑提交角色
5.删除角色
6.角色授权
7.删除角色指定权限
-->
<template>
  <div>
    <template>
      <el-table :data="roleList" style="width: 100%">
        <el-table-column prop="id" label="ID" width="180"></el-table-column>
        <el-table-column prop="roleName" label="roleName" width="180"></el-table-column>
        <el-table-column prop="roleDesc" label="roleDesc"></el-table-column>
        <el-table-column prop="children" label="子组件"></el-table-column>
      </el-table>
    </template>
  </div>
</template>

<script>
import { GetRoles } from '../../network/roles/roles'

export default {
  name: 'roles',
  data() {
    return {
      roleList: []
    }
  },
  mounted() {
    // eslint-disable-next-line no-new
    new Promise((resolve, reject) => {
      GetRoles().then(res => resolve(res))
    }).then(res => {
      this.roleList = res.data
      console.log(this.roleList)
    })
  }
}
</script>

<style scoped>
</style>
