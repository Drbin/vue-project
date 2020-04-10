<template>
    <div>
         <el-row class="b_line">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item>首页</el-breadcrumb-item>
                <el-breadcrumb-item>文章管理</el-breadcrumb-item>
                <el-breadcrumb-item>新增文章</el-breadcrumb-item>
            </el-breadcrumb>
        </el-row>
        <el-row>
            <el-col :span="2">
                文章名称：
            </el-col>
            <el-col :span="5">
                <el-input
                    placeholder="请输入内容"
                    v-model="artTit"
                    clearable>
                </el-input>
            </el-col>
        </el-row>
        
    </div>

</template>

<script>
    export default {
        name: "About",
        data(){
            return{
                artTit:'',
            }
        },
        methods: {

        }
    }
</script>

<style scoped>

</style>
