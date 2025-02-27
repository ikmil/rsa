/*
 * @Author: your name
 * @Date: 2025-01-15 15:21:02
 * @LastEditors: your name
 * @LastEditTime: 2025-01-16 15:51:49
 * @Description: 
 * @FilePath: /rsa/nuxt.config.ts
 */

export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  typescript:{typeCheck:true},
  css: ['@/assets/css/global.css','element-plus/theme-chalk/dark/css-vars.css'],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "@/assets/css/base.scss" as *;'
        }
      }
    }
  },
  runtimeConfig: {
    count:1,
    public: {
      baseURL: process.env.BASE_URL || 'http://localhost:3000',
    },
  },
  modules:[
   '@element-plus/nuxt',
   '@pinia/nuxt',
   'pinia-plugin-persistedstate/nuxt',
   '@nuxtjs/i18n',
  ],
  piniaPluginPersistedstate: {
    storage: 'localStorage',
  },
  i18n:{
    locales:[
      {code:'en',name:'English',iso:'en-US',file:'en.json'},
      {code:'zh',name:'中文',iso:'zh-CN',file:'zh.json'}
    ],
    defaultLocale:'zh',
    strategy: 'prefix_except_default',
    detectBrowserLanguage:{
      useCookie:true,
      cookieKey:'i18n_redirected',
      redirectOn: 'root',
    },
    lazy:true,
    langDir:'../locales',
  }
})