<template>
    <div class="login_box">
        <div class="login_box_inner">
            <el-row>
                <el-col :span="8" class="line-height-1">
                    <div class="grid-content">
                        账号：
                    </div>
                </el-col>
                <el-col :span="14">
                    <div class="grid-content ">
                        <el-input v-model="input" placeholder="请输入手机号"></el-input>
                    </div>
                </el-col>
            </el-row>
            <el-row>
                <el-col :span="8" class="line-height-1">
                    <div class="grid-content">
                        密码：
                    </div>
                </el-col>
                <el-col :span="14">
                    <div class="grid-content ">
                        <el-input v-model="input" type="password" placeholder="请输入手机号"></el-input>
                    </div>
                </el-col>
            </el-row>
            <el-row>
                <el-button type="primary">登录</el-button>

            </el-row>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Login"
    }
</script>

<style scoped>
    .login_box{ width: 100%; height: 100%; float: left;}
    .login_box_inner{ width: 600px; height: 300px; position: absolute; left: 50%; top: 50%; margin-top: -150px;  margin-left: -300px; box-shadow: 0 0 30px #ccc; border-radius: 10px; }


</style>