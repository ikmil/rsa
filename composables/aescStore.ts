/*
 * @Author: your name
 * @Date: 2025-01-16 09:32:59
 * @LastEditors: your name
 * @LastEditTime: 2025-01-16 15:46:59
 * @Description: 
 * @FilePath: /rsa/composables/aescStore.ts
 */
import {defineStore} from 'pinia'
export const aescStore = defineStore('aescStore',()=>{
    const publicKey = ref('')
    const privateKey = ref('')
    const setAes = (pubKey:string,priKey:string)=>{
        publicKey.value = pubKey
        privateKey.value = priKey
    }
    const getAes = ()=>{
        return {publicKey:publicKey.value,privateKey:privateKey.value}
    }
    return {publicKey,privateKey,setAes,getAes}
},{
    persist:true
})