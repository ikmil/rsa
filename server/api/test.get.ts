/*
 * @Author: your name
 * @Date: 2025-01-07 11:07:24
 * @LastEditors: your name
 * @LastEditTime: 2025-01-07 11:15:36
 * @Description: 
 * @FilePath: /rsa/server/api/test.get.ts
 */
export default defineEventHandler((event) => {
    const query = getQuery(event)
    
    return {
      ...query,
      c:3
    }
})