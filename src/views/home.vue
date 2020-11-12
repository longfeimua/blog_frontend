<template>
  <div class="back">
    <el-container class="container">
      <!-- header -->
      <el-header class="top">
      <nav0></nav0>
      </el-header>
      <!-- main -->
      <el-main>
        <card
          v-for="value in artData"
          :key="value.articleId"
          :article="value"
        />
      </el-main>
      <el-footer>
      <pagination></pagination>
      </el-footer>
    </el-container>
  </div>
</template>

<script>
import card from './home/card'
import nav0 from './home/navTop'
import { getArticle } from '../network/home/card'
import pagination from './home/component/pagination'

export default {
  name: 'home',
  components: {
    card,
    nav0,
    pagination
  },
  data() {
    return {
      artData: null
    }
  },
  mounted() {
    return new Promise((resolve, reject) => {
      getArticle().then(res => {
        resolve(res)
      })
    }).then(res => {
      this.artData = res
      // console.log(this.artData)
    })
  }
}
</script>

<style scoped>
.top {
  color: white;
}
.back {
  background: url(../assets/image/1pxblue.png) repeat;
  height: 100%;
  overflow: hidden;
}
.container {
  width: 60%;
  height: 100%;
  margin: 0 auto;
  overflow: hidden;
}
</style>
