<template>
  <div>
  <button @click="clearToken">退出登录</button>
  </div>
</template>

<script>
export default {
  name: 'home',
  methods: {
    // 退出登录，清除token值
    clearToken () {
      window.sessionStorage.clear()
      this.$router.push('/login')
    }
  }
}
</script>

<style scoped>

</style>
