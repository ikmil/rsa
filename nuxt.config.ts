/*
 * @Author: your name
 * @Date: 2025-01-15 15:21:02
 * @LastEditors: your name
 * @LastEditTime: 2025-01-15 18:32:24
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
    '@pinia/nuxt'
  ],
})
