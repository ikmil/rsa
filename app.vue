<!--
 * @Author: your name
 * @Date: 2024-12-25 19:41:01
 * @LastEditors: your name
 * @LastEditTime: 2025-01-07 11:56:46
 * @Description: 
 * @FilePath: /rsa/app.vue
-->
<template>
  <div>
    <NuxtRouteAnnouncer />
    <NuxtWelcome />
  </div>
</template>
<script setup lang="ts">


  const {data} = await useFetch('/api/test?a=1&b=2')
  console.log('---')
  console.log(data.value?.c)
</script>