<template>
  <div>
    <el-drawer
      title="个人中心"
      :visible.sync="drawer"
      :direction="direction"
      :close-on-press-escape="true"
      :size="'10%'"
      :modal-append-to-body="false"
    >
    <el-button @click="handlewb" type="primary" class="wb">写博客</el-button>
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
      this.$router.push('/write')
    }
  }
}
</script>

<style scoped>
.wb{
  margin-left: 20px;
}
</style>
