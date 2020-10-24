<template>
  <div>
    <p v-html="html"></p>
  </div>
</template>

<script>
import showdown from 'showdown'
import { getArticleContent } from '../../network/home/cardDetail'

export default {
  name: 'cardDetail',
  data() {
    return {
      html: ''
    }
  },
  mounted() {
    new Promise((resolve, reject) => {
      getArticleContent(this.$route.params.articleId).then(res => {
        resolve(res)
      })
    }).then(res => {
      const converter = new showdown.Converter()
      const text = res[0].content
      const html = converter.makeHtml(text)
      this.html = html
    })
  }
}
</script>

<style>
</style>
