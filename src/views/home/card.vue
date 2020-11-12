<template>
  <div @click="getDetail">
    <el-card style="cursor: pointer" shadow="hover" class="box-card">
      <div slot="header" class="clearfix">
        <span>{{ article.headline }}</span>
        <span style="float: right; padding: 3px 0" type="text">
        {{'作者：' + article.author + '\t' }}{{ '日期：' +  article.date }}</span>
      </div>
      <div class="text item">
        {{ article.describe }}
      </div>
    </el-card>
  </div>
</template>

<script>
export default {
  name: 'card',
  props: ['article'],
  methods: {
    getDetail() {
      this.$router.push('/article/' + this.article.articleId)
    }
  }
}
</script>

<style scoped>
.text {
  font-size: 14px;
}

.item {
  margin-bottom: 18px;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: '';
}
.clearfix:after {
  clear: both;
}

.box-card {
  width: 100%;
  margin-bottom: 10px;
}
</style>
