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
                placeholder="请输入文章名称"
                v-model="auditTit"
                clearable>
                </el-input>
            </el-col>
              <el-col :span="1" style="height:10px">
               
            </el-col>
             <el-col :span="1">
                <el-button type="success" size="small">搜索</el-button>
            </el-col>
            <el-col :span="1">
                <router-link to="/Back/addArt">
                    <el-button type="primary" size="small">新增文章</el-button>
                </router-link>
            </el-col>
        </el-row>
             <el-row class="pd_50 table_list">
            <el-table
                :data="tableData"
                border
                style="width: 100%">
                <el-table-column
                    prop="date"
                    label="文章名称"
                    width="180">
                </el-table-column>
                  <el-table-column
                    prop="name"
                    label="是否展示"
                    width="180">
                </el-table-column>
                <el-table-column
                    prop="address"
                    label="页面url"
                   >
                </el-table-column>
              
            </el-table>
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
