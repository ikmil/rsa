/*
 * @Author: your name
 * @Date: 2025-01-19 17:40:21
 * @LastEditors: your name
 * @LastEditTime: 2025-01-19 18:05:29
 * @Description: 
 * @FilePath: /rsa/composables/themeStore.ts
 */
import { defineStore } from 'pinia'

export const useThemeStore = defineStore('theme', {
  state: () => ({
    isDark: false
  }),
  actions: {
    toggleTheme() {
      this.isDark = !this.isDark
      document.documentElement.classList.toggle('dark', this.isDark)
    },
    setTheme(themeName:string){
      this.isDark = themeName === 'dark'
      document.documentElement.classList.toggle('dark', this.isDark)
    }
  }
})
