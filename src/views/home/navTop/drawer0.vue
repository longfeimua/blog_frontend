<template>
  <div>
    <el-drawer
      title="个人中心"
      :visible.sync="drawer"
      :direction="direction"
      :size="'20%'"
      :with-header="false"
    >
      <ul>
        <li>
          <el-button class="dBtn" @click="handlewb" type="primary"
            >写博客</el-button
          >
        </li>
        <li>
          <el-button class="dBtn" @click="logOut" type="danger"
            >退出登录</el-button
          >
        </li>
      </ul>
    </el-drawer>
  </div>
</template>

<script>
export default {
  name: 'drawer0',
  data() {
    return {
      direction: 'rtl',
      drawer: false
    }
  },
  methods: {
    handleDrawer() {
      this.drawer = true
    },
    handlewb() {
      if (window.sessionStorage.loginstatu) {
        this.$router.push('/write')
      } else {
        this.$message.error('请先登录')
      }
    },
    logOut() {
      window.sessionStorage.clear()
      // 页面刷新
      this.$message('登出成功')
      setTimeout(() => {
        this.$router.go(0)
      }, 500)
    }
  }
}
</script>

<style scoped>
ul li {
  margin-bottom: 10px;
}
.dBtn {
  width: 60%;
  font-size: 16px;
}
</style>
