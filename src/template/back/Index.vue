<template>
    <div>
        <el-row class="back_title">
            <h1>
                信息管理
            </h1>
            <div class="login_out">
                 <i class="el-icon-user-solid"></i>
                欢迎您！<span>{{admin}}</span> 
                [<a href="javascript:;" @click="exitLogin">退出</a>]
            </div>
        </el-row>
        <el-row class="tac">
            <el-col :span="3">
                <el-menu default-active="2" class="el-menu-vertical-demo menu_left">
                    <el-menu-item index="2">
                       
                        <router-link slot="title" to="/Back/">
                            <i class="el-icon-house"></i>
                            <span >系统主页</span>
                        </router-link>
                      
                    </el-menu-item>
                    <el-submenu index="1">
                        <template slot="title">
                            <i class="el-icon-setting"></i>
                            <span>配置管理</span>
                        </template>
                        <el-menu-item-group>
                            <el-menu-item index="1-1"><router-link to="/Back/Audit">&nbsp;权限管理</router-link></el-menu-item>
                            <el-menu-item index="1-2"><router-link to="/Back/Page">&nbsp;页面管理</router-link></el-menu-item>
                        </el-menu-item-group>
                    </el-submenu>
                  
                    <el-menu-item index="3" >
                        <i class="el-icon-document"></i>
                        <span slot="title">导航三</span>
                    </el-menu-item>
                    <el-menu-item index="4">
                        <i class="el-icon-setting"></i>
                        <span slot="title">导航四</span>
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
        data(){
            return{
                admin:'admin'
            }
        },
        methods:{
           
            exitLogin(){
                this.$confirm('此操作将退出系统, 是否继续?', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                     this.$message({
                        type: 'info',
                        message: '已退出'
                    });  
                    window.localStorage.removeItem("timestamp")
                    window.localStorage.removeItem("tel");
                    sessionStorage.removeItem("token");
                    this.$router.push({path:'/Login'});
               
                }).catch(() => {
                    this.$message({
                        type: 'info',
                        message: '已取消'
                    });          
                });
            },
        }
        

    }
</script>

<style>
.back_title{ height: 70px; line-height: 70px; padding: 0 30px; box-sizing: border-box; border-bottom: 1px solid #e6e6e6; text-align: left; font: 28px;}
.back_title h1{ width: 200px; height: 70px; line-height: 70px; float: left; margin-left: 100px; color: #409EFF; text-shadow: 0  0 5px #000;}
.login_out {width: 200px; height: 70px; line-height: 70px; text-align: right; float: right;font-size: 16px; margin-right: 50px; }
.login_out i{ font-size: 22px;}
.login_out span{ color: red;}
.login_out a{ text-decoration: none; color: #409EFF; }

.menu_left .el-menu-item-group__title{display: none;}
.menu_left a{ display: block; text-decoration: none; color: #666;}
.menu_left .is-active>a{ color: #409EFF;}
</style>