<template>
    <div class="">
        <el-row>
            <el-col :span="3" class="line-height-1">
                <div class="grid-content">
                    姓名：
                </div>
            </el-col>
            <el-col :span="21">
                <div class="grid-content ">
                    <el-input  placeholder="请输入姓名"></el-input>
                </div>
            </el-col>
        </el-row>
        <el-row>
            <el-col :span="3" class="line-height-1">
                <div class="grid-content">
                    手机号：
                </div>
            </el-col>
            <el-col :span="21">
                <div class="grid-content ">
                    <el-input v-model="input" placeholder="请输入手机号"></el-input>
                </div>
            </el-col>
        </el-row>
    </div>
</template>

<script>
    export default {
        name: "Add"
    }
</script>

<style scoped>
    .line-height-1{line-height: 40px;}
    .el-row {
        margin-bottom: 20px;
    }
</style>