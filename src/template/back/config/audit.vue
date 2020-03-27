<template>
    <div>
        <el-row class="b_line">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item>首页</el-breadcrumb-item>
                <el-breadcrumb-item>配置管理</el-breadcrumb-item>
                <el-breadcrumb-item>权限管理</el-breadcrumb-item>
            </el-breadcrumb>
        </el-row>
            <el-row class="query_box">
            <el-col :span="2" class="query_box_tit">
                角色名称：
            </el-col>
            <el-col :span="6" class="query_box_search">
                <el-input
                size="small"
                placeholder="请输入角色名称"
                v-model="pageTit"
                clearable>
                </el-input>
            </el-col>
        </el-row>
    </div>
</template>

<script>
    export default {
        name: "audit"
    }
</script>

<style scoped>

</style>