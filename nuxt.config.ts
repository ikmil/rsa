/*
 * @Author: your name
 * @Date: 2024-12-25 19:41:01
 * @LastEditors: your name
 * @LastEditTime: 2025-01-06 15:31:07
 * @Description: 
 * @FilePath: /rsa/nuxt.config.ts
 */
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  typescript:{typeCheck:true},
  
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
  ],
})
