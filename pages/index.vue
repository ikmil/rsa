<!--
 * @Author: your name
 * @Date: 2025-01-15 15:21:02
 * @LastEditors: your name
 * @LastEditTime: 2025-01-19 18:27:08
 * @Description: 
 * @FilePath: /rsa/pages/index.vue
-->
<script lang="ts" setup>
    const route = useRoute()
    const publicKey = ref('')
    const privateKey = ref('')
    const encrypt_text = ref('')
    const decrypto_text = ref('')
    const initialized = ref(false)
    const create_key = async() => {
        const result = await useFetch('/api/createkey')
        const data = result.data.value
        if (data?.code==200) {
            publicKey.value = data.publicKey
            privateKey.value = data.privateKey
            aescStore().setAes(data.publicKey,data.privateKey)
        }
    }

    const decrypto = async ()=>{
        const response = await useFetch('/api/decrypt',{
            method: 'POST',
            body: {
                privkey: privateKey.value,
                text: encrypt_text.value
            }
        })
        const data = response.data.value
        if(data?.code==200){
            decrypto_text.value = data.data
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
  
    onMounted(() => {
        publicKey.value = aescStore().publicKey
        privateKey.value = aescStore().privateKey
        const query = route.query
        if(query.endata){
            encrypt_text.value = decodeURIComponent(atob(query.endata as string))
        }
        initialized.value = true
    })



    const share = ()=>{
        let url = window.location.protocol+'://'+window.location.host+'/enc'
        url = url + '?publicKey=' + btoa(encodeURIComponent(publicKey.value))
        navigator.clipboard.writeText(url)
        ElMessage({
            message: '复制成功,快分享给别人吧！',
            type: 'success'
        })
    }

    interface FileOption{
        text:string
        name:string
    }
    const downloadFile = (file:FileOption)=>{
        const blob = new Blob([file.text], {type: 'text/plain'})
        const url = URL.createObjectURL(blob)
        const a = document.createElement('a')
        a.style.display = 'none'
        a.href = url
        a.download = file.name+'.pem'
        document.body.appendChild(a)
        a.click()
        document.body.removeChild(a)
        
    }
    function delay(ms: number) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
    const download = ()=>{
        [{text:privateKey.value,name:'privateKey'}, {text:publicKey.value,name:'publicKey'}].map((item,index)=>{
            delay(index*1000).then(()=>{
                downloadFile(item)
            })
        })
    }
</script>

<template>
    <div class="home">
        <div class="desc">
            <h2>{{ useT('bigTitle') }}</h2>
            <h4>{{ useT('bigDes') }}</h4>
        </div>
        <el-row justify="center">
            <el-col :sm="12" :xs="22" v-if="initialized">
                <h3>{{ useT('rowTitle1') }}</h3>
                <div class="no-data" v-if="!publicKey">
                    <el-empty :description="useT('emptyDes')" :image-size="100"></el-empty>
                    <div>
                        <el-button type="primary" @click="create_key">{{ useT('createAes') }}</el-button>
                    </div>
                </div>
                <div v-if="publicKey">
                    <div class="text-area">
                        <el-input
                            input-style="font-size: 14px;font-weight: 500;line-height: 1.6;"
                            v-model="publicKey"
                            type="textarea"
                            :rows="10"
                            resize="none"
                            readonly
                        ></el-input>
                    </div>
                    <div style="margin-top: 20px;">
                        <el-button type="primary" @click="download">{{ useT('downloadName') }}</el-button>
                        <el-button type="success" @click="share">{{ useT('shareLinkName') }}</el-button>
                    </div>
                </div>
                <div v-if="publicKey">
                    <h3>{{ useT('rowTitle2') }}</h3>
                    <el-text>{{ useT('rowTitle2Des') }}</el-text>
                    <div class="text-area">
                        <el-input
                            input-style="font-size: 14px;font-weight: 500;line-height: 1.6;"
                            v-model="encrypt_text"
                            type="textarea"
                            :rows="10"
                            resize="none"
                            :placeholder="useT('rowTitle2Placeholder')"
                        ></el-input>
                    </div>
                    <div style="margin-top: 20px;">
                        <el-button type="primary" @click="decrypto">{{ useT('decryName') }}</el-button>
                    </div>
                    <div v-if="decrypto_text!=''">
                        <h3>{{ useT('decryResult') }}</h3>
                        <div class="decrypto-area">
                            {{ decrypto_text }}
                        </div>
                    </div>
                    
                </div>
            </el-col>
        </el-row>
    </div>
</template>

<style lang="scss" scoped>
    .no-data{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    .desc{
        text-align: center;
        color: var(--primary-text-color);
        h4{
            color: rgb(115.2, 117.6, 122.4);
        }
    }
    .el-text{
        display: block;
        margin-bottom: 10px;
    }
    .decrypto-area{
        font-size: 14px;
        background: #fff;
        padding: 10px;
        line-height: 1.5;
        border-radius: 5px;
        border: 1px solid var(--el-border-color);
        word-break: break-all;
    }
    
    
</style>
