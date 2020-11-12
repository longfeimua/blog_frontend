<template>
  <div>
    <el-input
      class="inputbox"
      v-model="headline"
      placeholder="请输入标题"
    ></el-input>
    <el-input
      class="inputbox"
      type="textarea"
      :autosize="{ minRows: 10, maxRows: 20 }"
      v-model="content"
      placeholder="请在此输入今日学习记录吧..."
    >
    </el-input>
    <el-input
      class="inputbox"
      v-model="describe"
      placeholder="请输入描述"
    ></el-input>
    <el-button class="wbbtn" @click="submitInput" type="primary">
      提交博文
    </el-button>
  </div>
</template>

<script>
import { addArticle } from '../../network/blog/writepage'
export default {
  name: 'writepage',
  data() {
    return {
      content: '',
      headline: '',
      describe: ''
    }
  },
  methods: {
    submitInput() {
      const mdtxt = {
        content: this.content,
        headline: this.headline,
        describe: this.describe
      }
      return new Promise((resolve, reject) => {
        addArticle(mdtxt).then(res => {
          resolve(res)
        })
      }).then(res => {
        if (res.code === 1) {
          this.$message({
            message: '保存成功',
            type: 'success'
          })
          this.$router.push('/home')
        }
      })
    }
  }
}
</script>

<style scoped>
.inputbox {
  width: 500px;
  margin: 10px 40px;
  font-size: 16px;
}
.wbbtn {
  display: block;
  position: relative;
  left: 440px;
}
</style>
