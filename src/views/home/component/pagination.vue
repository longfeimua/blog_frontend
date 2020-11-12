<template>
  <el-pagination
    id="pagination"
    background
    layout="prev, pager, next"
    :page-size="5"
    :total="total"
  >
  </el-pagination>
</template>

<script>
export default {
  name: 'pagination',
  data() {
    return {
      // 列表总数
      total: 50
    }
  }
}
</script>

<style scoped>
#pagination {
  position: fixed;
  bottom: 10px;
}
</style>
