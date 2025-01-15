<!--
 * @Author: your name
 * @Date: 2025-01-15 15:21:02
 * @LastEditors: your name
 * @LastEditTime: 2025-01-15 16:05:50
 * @Description: 
 * @FilePath: /rsa/pages/enc.vue
-->
<template>
    <div>
        {{ pubkey }}
    </div>
</template>
<script setup lang="ts">
const route = useRoute()
console.log(route.query);
    const pubkey = ref('')

    const{publicKey} = aescStore()


    onMounted(()=>{
        pubkey.value = publicKey
    })

// definePageMeta({
//     middleware: [
//         function(to,from){
//             console.log(to.path);
            
//         }
//     ],
// })

</script>