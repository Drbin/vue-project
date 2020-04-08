<template>
    <div>
        <el-row class="b_line">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item>首页</el-breadcrumb-item>
                <el-breadcrumb-item>文章管理</el-breadcrumb-item>
            </el-breadcrumb>
        </el-row>
    
        <el-row class="query_box">
            <el-col :span="2" class="query_box_tit">
                文章名称：
            </el-col>
            <el-col :span="4" class="query_box_search">
                <el-input
                size="small"
                placeholder="请输入角色名称"
                v-model="auditTit"
                clearable>
                </el-input>
            </el-col>
            <el-col :span="2">
                <router-link>
                      <el-button type="primary" size="small">主要按钮</el-button>

                </router-link>
            </el-col>
        </el-row>
        <el-row class="pd_50 table_list">

        </el-row>
        <el-row class="pagi_bot">
            <div class="pagi_bot_l">
                共{{total}}条
            </div>
            <el-pagination
                class="pagi_bot_r"
                :page-size="12"
                background
                layout="prev, pager, next"
                :total="total">
            </el-pagination>
        </el-row>
    </div>
</template>

<script>
    export default {
        name: "Article",
        data(){
            return {
                total:100,
            }
        },
        methods: {

        }
    }
</script>

<style scoped>

</style>
