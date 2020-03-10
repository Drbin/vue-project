<template>
    <div>
        <el-row class="tac">
            <el-col :span="3">
                <el-menu default-active="1" class="menu_left">                  
                    <el-menu-item index="1">
                        <i class="el-icon-menu"></i>
                        <span slot="title"><router-link to="/Back/Audit">权限管理</router-link></span>
                    </el-menu-item>
                    <el-menu-item index="3" >
                        <i class="el-icon-document"></i>
                        <span slot="title">内容管理</span>
                    </el-menu-item>
                    <el-menu-item index="4">
                        <i class="el-icon-setting"></i>
                        <span slot="title">配置管理</span>
                    </el-menu-item>
                </el-menu>
            </el-col>
            <el-col :span="21">
                <router-view></router-view>
            </el-col>
        </el-row>
    </div>
</template>

<script>
    export default {
        name: "Index",

    }
</script>

<style scoped>
.menu_left a{ text-decoration: none; color: #666; }
.menu_left .is-active a{color: #409EFF;}
</style>