<template>
    <div>
        <el-row class="b_line">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item>首页</el-breadcrumb-item>
                <el-breadcrumb-item>配置管理</el-breadcrumb-item>
                <el-breadcrumb-item>页面管理</el-breadcrumb-item>
            </el-breadcrumb>
        </el-row>
        <el-row>
            <el-col :span="4">
                页面名称：
            </el-col>
            <el-col :span="8">
                <el-input
                size="small"
                placeholder="请输入内容"
                v-model="pageTit"
                clearable>
                </el-input>
            </el-col>
        </el-row>
    </div>
</template>

<script>
    export default {
        name: "page",
        data(){
            return {
                pageTit:'',
            }
        }
    }
</script>

<style scoped>

</style>