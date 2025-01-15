<!--
 * @Author: your name
 * @Date: 2025-01-15 15:21:02
 * @LastEditors: your name
 * @LastEditTime: 2025-01-15 18:25:09
 * @Description: 
 * @FilePath: /rsa/pages/index.vue
-->
<script lang="ts" setup>
    const key = ref('')
    onMounted(() => {
        key.value = `-----BEGIN PUBLIC KEY-----
MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAlOFn8l16VptbsuGQ0qln
M0B2DrT3fvEQcCI+rEGv1Ll4TAF83lpDrZlICcLEGM5lapzsS6RuTzZ6yet/Qgat
vJxjhiLjK7LNkEvuILqY73EgGqEkk8m5gzQV7j1P0YRA0L+tT/HxByWTdXY/QkP5
z6YOUKmfbu6ib+nNbtTSAZJbMko6usHNQmXjrZsRq/wcejG27476NIGTQ8g5JttB
vn5Blh1ukzQG77mvQVxFvv7UUw/4uCNlLBdFCglA9wMcMg2As8SPIQqoX7AIb6KX
3x5u652JZW62xUpDqPNeuvppzx9x3S51c6hxb87UZEsRcoUsjpIg7IT9bS9Otpyz
dQIDAQAB
-----END PUBLIC KEY-----
`
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
                <div class="text-area">
                    <el-input
                        v-model="key"
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
            </el-col>
        </el-row>
    </div>
</template>

<style lang="scss" scoped>
    .desc{
        text-align: center;
        color: var(--primary-text-color);
        h4{
            color: rgb(115.2, 117.6, 122.4);
        }
    }
    .el-textarea__inner{
            font-size: 14px;
            font-weight: 400;
            line-height: 1.2;
    }
</style>
