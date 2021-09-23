<template>
    <div>

    <el-button type="primary" style="position:fixed;z-index:1;left: 16px;top:20px;" @click="drawer = true">
        open
    </el-button>

    <el-drawer v-model="drawer" title="I am the title" :with-header="false" direction='ltr' :size=220 style="background-color:#000;">
        <div>Hi there!</div>
        <div>Hi there!</div>
        <div>Hi there!</div>
    </el-drawer>

    </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  setup() {
    return {
      drawer: ref(false),
    }
  },
})
</script>