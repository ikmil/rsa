<!--
 * @Author: your name
 * @Date: 2025-01-15 15:53:08
 * @LastEditors: your name
 * @LastEditTime: 2025-01-19 18:22:30
 * @Description: 
 * @FilePath: /rsa/components/Header.vue
-->
<script lang="ts" setup>
import type { RouteLocationAsRelativeGeneric, RouteLocationAsPathGeneric } from 'vue-router';

    const menu  = ref([
        {
            name: '首页',
            path: '/'
        },
        {
            name: '加密',
            path: '/enc'
        }
    ])
    const isActiveMenu = ref('/')
    const route = useRoute()

    const isActive = (path: string)=>{
        return route.path === path
    }
    if(route.path === '/'){
        isActiveMenu.value = '/'
    }else{
        isActiveMenu.value = route.path
    }
    const jump = (item: { path: string  })=>{
        navigateTo(item.path)
        isActiveMenu.value = item.path
    }
</script>

<template>
    <div class="header-container">
        <el-row class="header" justify="center">
            <el-col class="menu" :span="12">
                <a :class="isActiveMenu==val.path?'active':''" :href="val.path" v-for="(val,index) in menu" @click="jump(val)">{{ val.name }}</a>
            </el-col>
        </el-row>
    </div>

</template>

<style lang="scss" scoped>
    .header-container{
        padding-top: 60px;
    }
    .header{
        background: var(--primary-bg-color);
        backdrop-filter: blur(8px);
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
            a.active{
                color: var(--secondary-text-color);
            }
        }
        
    }
</style>
