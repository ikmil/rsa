<!--
 * @Author: your name
 * @Date: 2024-12-25 19:41:01
 * @LastEditors: your name
 * @LastEditTime: 2025-01-19 18:21:30
 * @Description: 
 * @FilePath: /rsa/app.vue
-->
<template>
  <div class="content" :class="{ 'dark': themeStore.isDark }">
    <Header></Header>
    <button class="theme-toggle" @click="themeStore.toggleTheme">
      {{ themeStore.isDark ? '🌙' : '☀️' }}
    </button>
    <NuxtPage></NuxtPage>
  </div>
</template>

<script setup lang="ts">
import { useThemeStore } from '~/composables/themeStore'
import {useI18n} from 'vue-i18n'
const { t ,setLocale} = useI18n()
const themeStore = useThemeStore()

useHead({
  title:t('title'),
  meta: [
    { name: 'description', content: '' },
    { name: 'keywords', content: 'RSA、加密、解密、在线' }
  ]
})

 onMounted(() => {
  const mediaQueryList = matchMedia('(prefers-color-scheme: dark)')
  // themeStore.setTheme(mediaQueryList.matches ? 'dark' : 'light')
  mediaQueryList.addEventListener('change', (evt) => {
    const theme = evt.matches ? 'dark' : 'light'
    themeStore.setTheme(theme)
  })

  // console.log(navigator.language);
  // const userLanguage  = navigator.language=='zh-CN'?'zh' : 'en'
  // setLocale(userLanguage)


})

</script>

<style lang="scss" scoped>
.content {
  margin-bottom: 30px;
}

.theme-toggle {
  position: fixed;
  bottom: 20px;
  right: 20px;
  padding: 10px;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border: none;
  background-color: var(--primary-bg-color);
  color: var(--primary-text-color);
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  z-index: 100;
}

</style>
