<!--
 * @Author: your name
 * @Date: 2025-01-15 15:21:02
 * @LastEditors: your name
 * @LastEditTime: 2025-01-15 18:25:09
 * @Description: 
 * @FilePath: /rsa/pages/index.vue
-->
<script lang="ts" setup>

    const publicKey = ref('')
    const privateKey = ref('')
    const encrypt_text = ref('')
    const create_key = async() => {
        const result = await useFetch('/api/createkey')
        const data = result.data.value
        if (data?.code==200) {
            publicKey.value = data.publicKey
            privateKey.value = data.privateKey
            aescStore().setAes(data.publicKey,data.privateKey)
        }
    }


  
    onMounted(() => {
        const aes = aescStore().getAes()
        publicKey.value = aes.publicKey
        privateKey.value = aes.privateKey
    })

</script>

<template>
    <div class="home">
        <div class="desc">
            <h2>加密您的分享数据</h2>
            <h4>使用非对称加密技术加密您的数据</h4>
        </div>
        <el-row justify="center">
            <el-col :span="12">
                <h3>秘钥管理</h3>
                <div class="no-data" v-if="!publicKey">
                    <el-empty description="暂无秘钥，请生成" :image-size="100"></el-empty>
                    <div>
                        <el-button type="primary" @click="create_key">生成秘钥</el-button>
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
                        <el-button type="primary">下载秘钥</el-button>
                        <el-button type="success">分享公钥</el-button>
                    </div>
                </div>
                <div v-if="publicKey">
                    <h3>解密操作</h3>
                    <el-text>在下方填入密文</el-text>
                    <div class="text-area">
                        <el-input
                            input-style="font-size: 14px;font-weight: 500;line-height: 1.6;"
                            v-model="encrypt_text"
                            type="textarea"
                            :rows="10"
                            resize="none"
                            placeholder="填入需要加密的数据"
                        ></el-input>
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
    
    
</style>
