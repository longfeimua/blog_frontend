<template>
  <div>
    <el-row type="flex">
      <el-col :span="6"
        ><h1>{{ BLOG_NAME }}</h1></el-col>
      <el-col class="top-btn" :span="12"><h3>博客</h3>
        <h3>关于我</h3></el-col>
      <el-col class="top-btn" :span="6"
        ><h4>未登录 <a href="">立即登录</a></h4>
        <img class="userImg" src="http://img.jf258.com/uploads/2014-09-07/091335483.jpg" /></el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'headtop',
  data() {
    return {
      BLOG_NAME: '这是~震的江山',
      date: new Date()
    }
  }
}
</script>

<style scoped>
.top-btn {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
}
.top-btn h3,
.top-btn h4 {
  padding: 0 20px;
  cursor: pointer;
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
