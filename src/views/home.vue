<template>
  <el-container style="height: 100%; background-color: #eee;border: 1px solid #eee">
  <!--Top栏 op#########################-->
  <el-header class="top" height="44px">
    <!--管理系统名-->
    <h2>XXX后台管理系统</h2>
    <div class="leftTop">
    <!--账号部分信息展示-->
    <i></i>
    <span>管理员 </span>
    <!--下拉菜单 -->
    <el-dropdown @command="handleCommand">
      <span class="el-dropdown-link ">
        更多<i class="el-icon-arrow-down el-icon--right"></i>
      </span>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item command="profile">个人信息</el-dropdown-item>
        <el-dropdown-item command="clearToken" divided>注销</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
    </div>
  </el-header>
  <!--Top栏 ed#############################-->
  <el-container>
  <!--Aside op#############################-->
  <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
    <el-menu @open="handleOpen" :default-openeds="['1']">  <!--默认展开列表-->
      <!--第1个el-menu   op-->
      <el-submenu index="1">
        <template slot="title"><i class="el-icon-message"></i>用户</template>
        <el-menu-item-group>
          <el-menu-item @click="routeManage('/user')" index="1-1">用户管理</el-menu-item>
          <el-menu-item @click="routeManage" index="1-2">添加</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <!--第1个el-menu   ed-->
      <!--第2个el-menu   op-->
      <el-submenu index="2">
        <template slot="title"><i class="el-icon-message"></i>商品管理</template>
        <el-menu-item-group>
          <template slot="title">分组一</template>
          <el-menu-item index="1-1">选项1</el-menu-item>
          <el-menu-item index="1-2">选项2</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group title="分组2">
          <el-menu-item index="1-3">选项3</el-menu-item>
        </el-menu-item-group>
        <el-submenu index="1-4">
          <template slot="title">选项4</template>
          <el-menu-item index="1-4-1">选项4-1</el-menu-item>
        </el-submenu>
      </el-submenu>
      <!--第2个el-menu   ed-->
      <!--第3个el-menu   op-->
      <el-submenu index="3">
        <template slot="title"><i class="el-icon-message"></i>商品管理</template>
        <el-menu-item-group>
          <template slot="title">分组一</template>
          <el-menu-item index="1-1">选项1</el-menu-item>
          <el-menu-item index="1-2">选项2</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group title="分组2">
          <el-menu-item index="1-3">选项3</el-menu-item>
        </el-menu-item-group>
        <el-submenu index="1-4">
          <template slot="title">选项4</template>
          <el-menu-item index="1-4-1">选项4-1</el-menu-item>
        </el-submenu>
      </el-submenu>
      <!--第3个el-menu   ed-->
    </el-menu>
  </el-aside>
  <!--Aside ed#############################-->
  <!--Main op#############################-->
    <el-main>
    <!--路由显示-->
    <iframe ref="iframe" src="" frameborder="0" scrolling="yes" height="100%" width="100%"></iframe>
    </el-main>
  <!--Main ed#############################-->
  </el-container>
  </el-container>
</template>

<script>
export default {
  name: 'home',
  methods: {
    // 下拉菜单事件判断
    handleCommand (command) {
      switch (command) {
        // 个人信息
        case 'profile':
          this.$refs.iframe.src = 'http://localhost:8080/profile'
          break
        // 注销
        case 'clearToken':
          this.clearToken()
          break
        default:
          break
      }
    },
    handleOpen (key, keyPath) {
      console.log(key, keyPath)
    },
    // iframe实现局部页面显示
    routeManage (route) {
      this.$refs.iframe.src = 'http://localhost:8080' + route
    },
    // 退出登录，清除token值
    clearToken () {
      window.sessionStorage.clear()
      this.$router.push('/login')
    }
  },
  data () {
    return {

    }
  }
}
</script>

<style scoped>

.top{
  display:flex;
  color:#eee;
  line-height: 44px;
  background-color: #333;
  justify-content: space-between;
  padding: 0 2%;
}
h2{
  margin: 0;
}
</style>
