<!--
 * @Author: your name
 * @Date: 2025-01-15 15:21:02
 * @LastEditors: your name
 * @LastEditTime: 2025-01-16 17:11:54
 * @Description: 
 * @FilePath: /rsa/pages/enc.vue
-->
<template>
    <div style="margin-top: 30px;">
        <el-row justify="center">
            <el-col :span="12">
                <h3>公钥</h3>
                <el-text>接受者的公钥</el-text>
                <el-input
                type="textarea"
                :rows="10"
                placeholder="请输入内容或自动填充"
                v-model="pubkey"
                ></el-input>
                <h3>你的消息</h3>
                <el-text>需要加密的信息</el-text>
                <el-input
                type="textarea"
                :rows="10"
                placeholder="请输入内容"
                v-model="text"
                ></el-input>
                <div style="margin-top: 20px;">
                    <el-button type="primary" @click="encData">加密</el-button>
                </div>
                <div v-if="enctext != ''">
                    <h3>加密结果</h3>
                    <div class="result-text">
                        {{ enctext }}
                    </div>
                    <div style="margin-top: 20px;">
                        <el-button type="primary" @click="copy">复制</el-button>
                        <el-button type="success" @click="share">分享加密链接</el-button>
                    </div>
                </div>
                
            </el-col>
            
        </el-row>
    </div>
</template>
<script setup lang="ts">
    const route = useRoute()
    console.log(route.query);
    const pubkey = ref('')
    const text = ref('')

    const{publicKey} = aescStore()
    const enctext = ref('')
    const copy = ()=>{
        navigator.clipboard.writeText(enctext.value)
        ElMessage({
            message: '复制成功',
            type: 'success'
        })
    }
    const share = ()=>{
        let url = window.location.protocol+'://'+window.location.host
        url = url + '?endata=' + btoa(encodeURIComponent(enctext.value))
        navigator.clipboard.writeText(url)
        ElMessage({
            message: '复制成功',
            type: 'success'
        })
    }
    onMounted(()=>{
        let query = route.query
        
        if(query.publicKey){

            pubkey.value = decodeURIComponent(atob(query.publicKey as string))
        }
    })

    const encData = async()=>{
        let response = await useFetch('/api/encrypt',{
            method:'POST',
            body:{
                pubkey: pubkey.value,
                text: text.value
            }
        })
        let data = response.data.value
        if(data?.code==200){
            enctext.value = data.data
            ElMessage({
                message: data?.message,
                type: 'success'
            })
        }else{
            ElMessage({
                message: data?.message,
                type: 'error'
            })
        }

    }

// definePageMeta({
//     middleware: [
//         function(to,from){
//             console.log(to.path);
            
//         }
//     ],
// })

</script>

<style lang="scss" scoped>
    h3{
        margin: 10px 0;
    }
    .el-text{
        display: block;
        margin-bottom: 10px;
    }
    .result-text{
        font-size: 14px;
        background: #fff;
        padding: 10px;
        line-height: 1.5;
        border-radius: 5px;
        border: 1px solid var(--el-border-color);
        word-break: break-all;
    }
</style>
