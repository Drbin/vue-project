<template>
    <div class="">
        <el-row>
            <el-col :span="3" class="line-height-1">
                <div class="grid-content">
                    姓名：
                </div>
            </el-col>
            <el-col :span="8">
                <div class="grid-content ">
                    <el-input v-model="name"  placeholder="请输入姓名"></el-input>
                </div>
            </el-col>
        </el-row>
        <el-row>
            <el-col :span="3" class="line-height-1">
                <div class="grid-content">
                    手机号：
                </div>
            </el-col>
            <el-col :span="8">
                <div class="grid-content ">
                    <el-input v-model="input" placeholder="请输入手机号"></el-input>
                </div>
            </el-col>
        </el-row>
        <el-row>
            <el-col :span="3" class="line-height-1">
                <div class="grid-content">
                    备注：
                </div>
            </el-col>
            <el-col :span="8">
                <div class="grid-content ">
                    <el-input v-model="note" placeholder="请输入备注"></el-input>
                </div>
            </el-col>
        </el-row>
    </div>
</template>

<script>
    export default {
        name: "Add",
        data(){
            return {
                telCode:'',
                name:'',
                note:''
            }
        }
    }
</script>

<style scoped>
    .line-height-1{line-height: 40px;}
    .el-row {
        margin-bottom: 20px;
    }
</style>