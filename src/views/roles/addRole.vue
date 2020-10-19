<template>
  <div>
    <input type="text" v-model="form.name" />
    <input type="text" v-model="form.desc" />
    <input type="button" value="添加角色" @click="AddRolebtn" />
  </div>
</template>

<script>
import { AddRole } from '../../network/roles/Addrole'

export default {
  name: 'addRole',
  data() {
    return {
      form: {
        name: null,
        desc: null
      }
    }
  },
  methods: {
    AddRolebtn() {
      AddRole(this.form.name, this.form.desc).then(res => {
        console.log(res)
      })
    }
  }
}
</script>

<style socped>
</style>
