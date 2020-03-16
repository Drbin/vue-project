<template>
    <div class="login_box">
        <div id="id">{{username}}</div>
        <div class="login_box_inner">
            <h1 class="login_tit">用户登录</h1>
            <el-row>
                <el-col :span="8" class="line-height-1">
                    <div class="grid-content">
                        账&nbsp;&nbsp;号：
                    </div>
                </el-col>
                <el-col :span="14">
                    <div class="grid-content ">
                        <el-input v-model="username" placeholder="输入账号"></el-input>
                    </div>
                </el-col>
            </el-row>
            <el-row>
                <el-col :span="8" class="line-height-1">
                    <div class="grid-content">
                        密&nbsp;&nbsp;码：
                    </div>
                </el-col>
                <el-col :span="14">
                    <div class="grid-content ">
                        <el-input v-model="pwd" type="password" placeholder="输入密码"></el-input>
                    </div>
                </el-col>
            </el-row>
            <el-row>
                <el-col :span="8" class="line-height-1">
                    <div class="grid-content">
                        验证码：
                    </div>
                </el-col>
                <el-col :span="7">
                    <div class="grid-content ">
                        <el-input v-model="ver" type="password" placeholder="输入验证码"></el-input>
                    </div>
                </el-col>
                <el-col :span="7">
                    <div class="grid-content ">
                        <img src="">
                    </div>
                </el-col>
            </el-row>
            <el-row class="top_input">
                <div class="grid-content ">
                    <el-button v-on:click="submit" type="primary">登录</el-button>
                </div>

            </el-row>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Login",
        data() {
            return {
                username: '',
                pwd:'',
                ver:''

            }
        },
        methods:{
            submit:function () {
                if(this.username===""||this.pwd===""||this.ver===""){
                    return false;
                }else{
                    sessionStorage.setItem("token", 'true');
                    window.localStorage.setItem("username",this.username)
                    this.$message({
                        type: 'success',
                        message: '登录成功'
                    }); 
                    this.$router.push({path:'/Back/'});
                    return  false
                }
            }
        }
    }
</script>

<style scoped>
    .login_tit{box-shadow: 0 0 5px #ccc; line-height: 60px; margin-bottom: 20px; font-weight: 600; font-size: 24px;}
    .login_box{ width: 100%; height: 100%; float: left;}
    .login_box_inner{ width: 600px; height: 360px; position: absolute; left: 50%; top: 150px;   margin-left: -300px; box-shadow: 0 0 30px #ccc;}
    .el-row{ margin-bottom: 20px; }
    .line-height-1{line-height: 40px;}
    .el-button{ width: 85%;}
    .top_input{ margin-top: 40px;}

</style>