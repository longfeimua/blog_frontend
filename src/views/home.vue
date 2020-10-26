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
    </el-container>
  </div>
</template>

<script>
import card from './home/card'
import nav0 from './home/nav0'
import { getArticle } from '../network/home/card'

export default {
  name: 'home',
  components: {
    card,
    nav0
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
}
.container {
  width: 80%;
  margin: 0 auto;
}
</style>
