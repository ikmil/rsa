<!--
 * @Author: your name
 * @Date: 2025-01-15 15:53:08
 * @LastEditors: your name
 * @LastEditTime: 2025-01-15 18:04:21
 * @Description: 
 * @FilePath: /rsa/components/Header.vue
-->
<script lang="ts" setup>
    

</script>

<template>
    <div class="header-container">
        <el-row class="header" justify="center">
            <el-col class="menu" :span="12">
                <NuxtLink to="/">首页</NuxtLink>
                <NuxtLink to="/enc">加密</NuxtLink>
            </el-col>
        </el-row>
    </div>

</template>

<style lang="scss" scoped>
    .header-container{
        padding-top: 60px;
    }
    .header{
        background: #fefefe;
        color: #fff;
        backdrop-filter: blur(100px);
        padding: 10px 0;
        position: fixed;
        left: 0;
        top: 0;
        right:0;
        z-index: 9;
        .menu{
            display: flex;
            justify-content: flex-start;
            align-items: center;
            a{
                color: var(--primary-text-color);
                margin-right: 10px;
                display: block;
                text-decoration: none;
                border-radius: 10px;
                line-height: 40px;
                &:hover{
                    color: var(--secondary-text-color);
                }
                width: 50px;
                text-align: center;
                font-weight: 500;
            }
        }
        
    }
</style>
