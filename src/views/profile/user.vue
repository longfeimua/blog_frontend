<template>
  <div class="boder">
    <template>
  <el-table :data="tableData" border style="width: 100%">
    <el-table-column
      prop="id"
      label="ID"
      width="180">
    </el-table-column>
    <el-table-column
      prop="name"
      label="账户"
      width="180">
    </el-table-column>
    <el-table-column
      prop="eamil"
      label="邮箱">
    </el-table-column>
  </el-table>
  {{tableData}}
</template>
  </div>
</template>

<script>
export default {
  name: 'user',
  data () {
    return {
      tableData: [{
        id: this.$store.getters.showData.id,
        name: this.$store.getters.showData.name,
        email: this.$store.getters.showData.email
      }]
    }
  }
}
</script>

<style>
</style>
