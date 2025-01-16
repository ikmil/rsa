<!--
 * @Author: your name
 * @Date: 2024-12-25 19:41:01
 * @LastEditors: your name
 * @LastEditTime: 2025-01-16 17:45:55
 * @Description: 
 * @FilePath: /rsa/app.vue
-->
<template>
  <div class="content">
    <Header></Header>
    <NuxtPage></NuxtPage>
  </div>
</template>
<script setup lang="ts">
  useHead({
    title:'在线RSA加密解密',
    meta: [
      { name: 'description', content: '在线RSA加密解密' },
      { name: 'keywords', content: 'RSA、加密、解密、在线' }
    ]
  })
</script>
<style lang="scss" scoped>
  .content{
    margin-bottom: 30px;
  }
</style>