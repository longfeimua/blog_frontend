<template>
  <div>
    <el-row type="flex">
      <el-col :span="6"
        ><h1>{{ BLOG_NAME }}</h1>
      </el-col>
      <el-col class="top-btn" :span="12"
        ><h3>博客</h3>
        <h3>关于我</h3>
      </el-col>
      <el-col class="top-btn" :span="6">
        <h4 v-if="!offlogin">
          未登录 <a @click="loginbtn" href="">立即登录</a>
        </h4>
        <h4 v-if="offlogin">{{ greeting + ' ' }}{{username}}</h4>
        <img
          @click="handleDrawer"
          class="userImg"
          src="http://img.jf258.com/uploads/2014-09-07/091335483.jpg"
        />
      </el-col>
    </el-row>
    <drawer0 ref="openDrawer" />
  </div>
</template>

<script>
import drawer0 from './nav0/drawer0'

export default {
  name: 'nav0',
  components: {
    drawer0
  },
  data() {
    return {
      BLOG_NAME: '五维空间',
      offlogin: window.sessionStorage.getItem('loginstatu'),
      greeting: '',
      username: window.sessionStorage.getItem('username')
    }
  },
  methods: {
    handleDrawer() {
      this.$refs.openDrawer.handleDrawer()
    },
    loginbtn() {
      this.$router.push('/login')
    }
  },
  created() {
    const t = new Date().getHours()
    this.greeting = t > 12 ? '下午好' : '上午好'
  }
}
</script>

<style scoped>
h1 {
  display: inline-block;
  cursor: pointer;
}
.top-btn {
  display: flex;
  flex-wrap: wrap;
  justify-content: end;
  align-items: center;
}
.top-btn h3,
.top-btn h4 {
  padding: 0 20px;
  cursor: pointer;
  display: inline-block;
}
span {
  margin: auto;
}
.userImg {
  width: 50px;
  height: 50px;
  border-radius: 25px;
  position: relative;
  top: -9%;
  cursor: pointer;
}
</style>
