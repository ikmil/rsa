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
})